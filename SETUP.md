# Recall Coder: setup

The tool has two pieces:

- **`index.html`** and **`story.js`** make up the coding page that you and your RAs open in a browser. `story.js` holds everything about your story (see README.md).
- **`Code.gs`** is a short script that saves everything into a Google Sheet you own.

Setup takes about 15 minutes, and you only do it once.

## 1. Create the Google Sheet and the script

1. Create a new, blank Google Sheet. Name it something like *Recall Coding*.
2. In the Sheet, go to **Extensions → Apps Script**.
3. Delete the placeholder code, paste in all of `Code.gs`, and click **Save**.
4. Near the top of the script, replace the two passcodes:
   - `LEAD_KEY` is for you only. It unlocks the Responses, Reliability and Export tabs and lets you see both coders' work.
   - `CODER_KEY` is shared with your RAs. With it, each coder sees only their own codes.

   Make each passcode long and random, at least 20 characters and not real words. A password manager's generator works well. Then save again.

## 2. Deploy the script as a web app

1. Click **Deploy → New deployment**. Click the gear icon and choose **Web app**.
2. Set **Execute as: Me** and **Who has access: Anyone**.
3. Click **Deploy** and authorize with your Google account.
   - If Google shows "Google hasn't verified this app," click **Advanced → Go to … (unsafe)**. This is normal for your own scripts.
   - The permission screen should ask only to view and manage the spreadsheet the script is attached to, not all your Sheets.
4. Copy the **Web app URL**. It ends in `/exec`.
5. To check it's running, paste that URL into a browser. You should see a short message saying the backend is running.

> If **Anyone** isn't offered, your MSU Google account probably restricts it. Do steps 1–2 with a personal Google account instead.

**About "Anyone":** this means anyone with the URL can reach the script, but nothing can be read or saved without one of your passcodes. After 25 wrong passcodes within 15 minutes, all sign-ins pause for 15 minutes. That stops guessing, but it also means someone who deliberately enters wrong passcodes could lock your team out for that long. You can change both numbers at the top of `Code.gs`.

## 3. Put the URL into the page

Open `index.html` in a text editor (TextEdit in plain-text mode, Notepad or VS Code). Near the top of the `<script>` section, find this line:

```js
const API_URL = "";
```

Paste your URL between the quotes and save.

## 4. Host the page

Pick one option:

- **Netlify Drop (easiest):** sign up free at netlify.com, open app.netlify.com/drop, and drag in the folder containing `index.html` and `story.js`. You get a link like `something.netlify.app`. You can rename it in Site settings.
- **GitHub Pages:** create a repository, upload `index.html` and `story.js`, and turn on **Settings → Pages** for the main branch.
- **No hosting:** send RAs `index.html` and `story.js`, kept together in one folder. Double-clicking `index.html` opens it in their browser, and it should still save to the same Sheet. Test this once yourself first; if it won't connect, use one of the options above.

## 5. Use it

1. Open the page and sign in with the **lead** passcode. Choose **Lead → Responses**.
2. Paste your responses from a spreadsheet. Use the columns `pid`, `session`, `condition` (optional) and `text` with a header row.
3. Click **Double-code a random 20%, split the rest**, or set each response's coder by hand.
4. Give RAs the link and the **coder** passcode:
   - The unitizer picks **Unitizer**.
   - The two coders pick **Coder 1** and **Coder 2**.
   - Everyone enters their initials.
5. Check **Reliability** as double-coded responses come in. Use **Export** for the CSVs.

Each page checks for new work every 15 seconds. It also checks when someone switches back to the tab.

## Good to know

- **Changing the script:** after editing `Code.gs`, go to **Deploy → Manage deployments**, click the pencil icon, and choose **New version**. The URL stays the same.
- **Changing a passcode:** edit it in `Code.gs` and redeploy as above. Everyone using the old passcode will be asked to sign in again.
- **Don't edit the Store tab by hand.** The page reads it directly. Use **Export** for analysis.
- **Shared computers:** the page remembers the passcode in the browser. Have RAs click **Sign out** when they finish on a lab computer.
- **Backups:** if data gets overwritten by mistake, restore the Sheet under **File → Version history**. Exporting the CSVs now and then also gives you a copy.
- **Blinding:** the coders are kept apart by the page and the script. A determined RA could still switch roles in the page, so this protects against accidental peeking, not deliberate snooping.
- **Data:** the recall text is stored in your Google Drive. Make sure that fits your IRB data plan. It's fine if the responses are de-identified.
- **Trying it out:** **Try the demo** on the sign-in screen loads two sample responses. Nothing in the demo is saved.
