# Recall Coder

A browser-based tool for coding free-recall responses to a story. One person **unitizes** each response (splits it into recall units), then two coders independently code each unit, first by which segment of the story it came from ("Act"), then by which idea unit in the story it matches. A lead adds responses, assigns them, checks inter-coder reliability and exports the results.

To see it work, open `index.html` in a browser and click **Try the demo**. The demo loads two invented responses, and nothing in it is saved.

Originally built for a narrative recall study using the "Amelia" story ("After Careful Consideration"). That story is included in `story.js` as a worked example.

## What it does

- **Unitizer:** click a word to end a unit after it. A side panel shows your unitizing rules and the story key.
- **Coder 1 and Coder 2:**
  - **Act pass:** each coder places every unit in a story segment, or marks it Not in story or Unclear. The Acts are then locked.
  - **Idea-unit pass:** each coder matches each unit to one or more idea units within its segment. The story key sits alongside, follows the current unit and can be searched.
  - **Blind coding:** each coder sees only their own codes.
- **Lead:**
  - **Responses:** add responses one at a time or pasted from a spreadsheet, and assign each one to both coders or a single coder. One button double-codes a random 20% and splits the rest.
  - **Reliability:** percent agreement and Cohen's κ for Act and idea unit, with every disagreement listed.
  - **Export:** a unit-level CSV and a participant-level CSV (distinct idea units recalled, gist and detail counts, counts per segment).

## Files

| File | What it is |
| --- | --- |
| `index.html` | The coding page. You shouldn't need to edit it, apart from pasting in your web app URL (see SETUP.md). |
| `story.js` | Everything specific to one story: title, segments, idea units, unitizing guide, demo responses. |
| `Code.gs` | The Google Apps Script backend that saves everything to a Google Sheet you own. |
| `SETUP.md` | Step-by-step setup: the Google Sheet, the script, the passcodes and hosting. |

## Using it with your own story

Replace the values in `story.js`; nothing else changes.

- **`title`, `subtitle`:** shown in the header and the browser tab.
- **`slug`:** a short name with letters, digits and `_` only, used in exported file names.
- **`acts`:** your story's segments, numbered from 1, for example `{1: "Setup", 2: "The conflict", 3: "Resolution"}`. Use as many as you need. The page calls them "Acts", and segment colors repeat after six.
- **`units`:** your master idea-unit list, one row per idea unit:
  ```js
  [unitNumber, actNumber, "Label", "Story text", "Other-condition text or null", "G" or "D"]
  ```
  - Number the units 1, 2, 3 and so on through the whole story.
  - The fifth field is for stories with condition-specific wording. Coders see both versions, and either counts as the same idea unit. Use `null` if your story has one version.
  - The last field (gist or detail) is used only in the exports. Coders never see it. If you don't use the distinction, put `"D"` everywhere.
- **`guide`:** your unitizing rules, as simple HTML (`<p>`, `<h3>`, `<ul>`, `<li>`, `<b>`, `<i>`). The Amelia rules are a good starting point for clause-level unitizing.
- **`demo`:** example responses for the demo. **Use invented text, not real participant responses**, because anyone who opens the page can read this file.

If a story has hundreds of units or very long texts, everything still works. Each saved record holds up to about 50,000 characters, which is far more than a recall response needs.

## Setting up shared saving

Follow SETUP.md. In short: create a Google Sheet, paste `Code.gs` into its Apps Script editor, set your two passcodes, deploy it as a web app, paste the web app's URL into `index.html`, and host `index.html` and `story.js` together (GitHub Pages and Netlify both work).

**Never publish a `Code.gs` that has your real passcodes in it.** The copy in this package has placeholders (`change-me-lead`, `change-me-coder`) and is safe to share.

## Good to know

- **Updates:** each open page checks the Sheet for new work every 15 seconds.
- **Blinding:** coders are kept blind by the page and the script. This prevents accidental peeking, not a determined coder switching roles.
- **Data storage:** all data lives in the Google Sheet of whoever deployed the script. Make sure that fits your IRB's data plan.
