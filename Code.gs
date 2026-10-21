/**
 * @OnlyCurrentDoc
 *
 * Amelia Recall Coder — Google Sheets backend (Google Apps Script)
 *
 * The @OnlyCurrentDoc line above limits this script's permission to the one
 * Sheet it's attached to. It can't open your other files, Drive or email.
 *
 * Paste this whole file into Extensions > Apps Script of a new Google Sheet,
 * change the two passcodes below, then Deploy > New deployment > Web app
 * (Execute as: Me, Who has access: Anyone). See SETUP.md.
 *
 * Everything the coding page saves lives in the "Store" tab, one row per
 * record: responses, units (the unitizer's splits) and codes (each coder's work).
 * Don't edit that tab by hand; use the page's Export for analysis.
 */

// ---- Change these before deploying. Use long random passcodes (20+ characters).
// ---- Share CODER_KEY with RAs; keep LEAD_KEY to yourself.
var LEAD_KEY = 'change-me-lead';
var CODER_KEY = 'change-me-coder';

// ---- Lockout: after this many wrong passcodes within the window, all sign-ins pause.
var MAX_FAILURES = 25;
var LOCK_MINUTES = 15;

var SHEET_NAME = 'Store';

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.getRange(1, 1, 1, 4).setValues([['path', 'json', 'updatedAt', 'role']]);
    sh.setFrozenRows(1);
    sh.getRange('B:B').setNumberFormat('@'); // keep JSON as plain text
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Checks the passcode and counts wrong ones. Returns 'lead', 'coder', 'locked' or null.
function level_(key) {
  var cache = CacheService.getScriptCache();
  if (cache.get('locked')) return 'locked';
  if (key && key === LEAD_KEY) return 'lead';
  if (key && key === CODER_KEY) return 'coder';
  var fails = Number(cache.get('fails') || 0) + 1;
  cache.put('fails', String(fails), LOCK_MINUTES * 60);
  if (fails >= MAX_FAILURES) {
    cache.put('locked', '1', LOCK_MINUTES * 60);
    cache.remove('fails');
  }
  Utilities.sleep(1500); // slows down guessing
  return null;
}

// Coders see responses, units and only their own role's codes, so the two coders stay blind to each other.
function canRead_(level, role, path) {
  if (level === 'lead') return true;
  if (path.indexOf('codes/') === 0) {
    var id = path.split('/').pop();
    return (role === 'C1' || role === 'C2') && id.indexOf(role + '__') === 0;
  }
  return true;
}

function canWrite_(level, role, path) {
  if (level === 'lead') return true;
  if (path.indexOf('units/') === 0) return true;
  if (path.indexOf('codes/') === 0) {
    var id = path.split('/').pop();
    return (role === 'C1' || role === 'C2') && id.indexOf(role + '__') === 0;
  }
  return false; // responses: lead only
}

// Visiting the web app URL in a browser just confirms it's running. All data goes through POST.
function doGet() {
  return json_({ ok: false, error: 'use_post', message: 'Amelia Recall Coder backend is running.' });
}

function doPost(e) {
  var body;
  try { body = JSON.parse(e.postData.contents); } catch (err) { return json_({ ok: false, error: 'bad_json' }); }
  var level = level_(body.key);
  if (level === 'locked') return json_({ ok: false, error: 'locked', minutes: LOCK_MINUTES });
  if (!level) return json_({ ok: false, error: 'bad_key' });
  if (body.action === 'pull') return pull_(level, body);
  return write_(level, body);
}

function pull_(level, body) {
  var since = Number(body.since || 0);
  var rows = getSheet_().getDataRange().getValues();
  var docs = [];
  for (var i = 1; i < rows.length; i++) {
    var path = String(rows[i][0] || '');
    if (!path) continue;
    var t = Number(rows[i][2] || 0);
    if (t < since) continue;
    if (!canRead_(level, body.role, path)) continue;
    var raw = String(rows[i][1] || '');
    docs.push({ path: path, data: raw === '' ? null : JSON.parse(raw), t: t });
  }
  return json_({ ok: true, level: level, docs: docs });
}

function write_(level, body) {
  var ops = body.ops || [];
  for (var i = 0; i < ops.length; i++) {
    if (!ops[i].path || !canWrite_(level, body.role, String(ops[i].path))) {
      return json_({ ok: false, error: 'forbidden', path: ops[i].path });
    }
  }
  var lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    var sh = getSheet_();
    var last = sh.getLastRow();
    var paths = last > 1 ? sh.getRange(2, 1, last - 1, 1).getValues() : [];
    var rowOf = {};
    for (var r = 0; r < paths.length; r++) rowOf[String(paths[r][0])] = r + 2;
    var now = Date.now();
    var appends = [], appendAt = {};
    ops.forEach(function (op) {
      var path = String(op.path);
      // A delete leaves an empty record so other open pages learn about it.
      var row = [path, op.op === 'delete' ? '' : JSON.stringify(op.data), now, body.role || ''];
      if (rowOf[path]) sh.getRange(rowOf[path], 1, 1, 4).setValues([row]);
      else if (appendAt[path] !== undefined) appends[appendAt[path]] = row;
      else { appendAt[path] = appends.length; appends.push(row); }
    });
    if (appends.length) sh.getRange(sh.getLastRow() + 1, 1, appends.length, 4).setValues(appends);
    return json_({ ok: true, t: now });
  } finally {
    lock.releaseLock();
  }
}
