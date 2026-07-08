# App Hub

One page that lists and launches all your HTML apps.

## Folder layout

```
app-hub/
├─ index.html        ← the hub (don't need to touch this)
├─ apps.js           ← the ONE file you edit to add apps
├─ README.md
└─ apps/
   └─ hello-synth/   ← each app lives in its own folder
      └─ index.html
```

## Add a new app (30 seconds)

1. Drop your app's files into `apps/your-app-name/` (make sure the entry file is `index.html`).
2. Open `apps.js` and copy the commented block, filling in your details:

```js
{
  title: "My Next App",
  description: "One line about what it does.",
  path: "apps/my-next-app/",
  tags: ["tool"],
  accent: "#ff5d8f",
  added: "2026-07-08"
},
```

3. Open `index.html` — it's there. That's it.

`path` can point at a folder (`apps/foo/`) or a specific file (`apps/foo/game.html`).
`accent` is any CSS color and sets the card's glow. `tags` power the search + filter chips.

## Run it locally

Double-click `index.html`. Everything is static — no server, no build step.

## Publish to the web (GitHub Pages, free)

The layout is already Pages-ready. When you want it live:

1. Create a repo (e.g. `app-hub`) and upload this whole folder's contents to it.
2. Repo **Settings → Pages → Source: main branch / root → Save**.
3. Your hub goes live at `https://<your-username>.github.io/app-hub/`.

Push new apps the same way you added them locally, then commit — the live site updates automatically.

> Note: the audio in the sample app needs a click first (browsers block autoplay). That's normal, not a bug.
