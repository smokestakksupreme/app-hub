# Custom domain setup (GitHub Pages)

Goal: serve **AllAppsJohnnie** from a domain you own (e.g. `allappsjohnnie.com`)
instead of `username.github.io`.

Order matters: get the site live on Pages first, then attach the domain.

---

## Step 0 — Get the site on GitHub Pages first

1. Create a repo and upload the contents of this `app-hub` folder to it.
2. **Settings → Pages → Source: `main` branch, `/root` → Save.**
3. Confirm it loads at `https://<username>.github.io/<repo>/` before continuing.

---

## Step 1 — Buy the domain

Any registrar works (Cloudflare, Namecheap, Porkbun, Google-successor Squarespace, etc.).
Cloudflare and Porkbun tend to be cheapest and don't upsell. You just need the name;
you do NOT need their hosting or website builder.

---

## Step 2 — Point DNS at GitHub

You have two setups. Pick one (or do both — apex + www is the common combo).

### Option A — Apex / "naked" domain  (allappsjohnnie.com)

In your registrar's DNS settings, create four **A records** and (recommended) four **AAAA records**:

```
Type  Name  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153

AAAA  @     2606:50c0:8000::153
AAAA  @     2606:50c0:8001::153
AAAA  @     2606:50c0:8002::153
AAAA  @     2606:50c0:8003::153
```

### Option B — Subdomain  (www.allappsjohnnie.com)

Create one **CNAME record**:

```
Type   Name  Value
CNAME  www   <username>.github.io.
```

> These GitHub IPs are current as of this writing but occasionally change.
> Verify against GitHub's live doc: "Managing a custom domain for your GitHub Pages site."

---

## Step 3 — Tell GitHub about the domain

1. Repo **Settings → Pages → Custom domain** → type `allappsjohnnie.com` (or the www version) → **Save.**
   - This auto-creates a file named `CNAME` in your repo containing the domain. Leave it there.
2. Wait for the DNS check to go green (minutes to a few hours; up to 48h worst case).
3. Tick **Enforce HTTPS** once it's available — this gives you a free auto-renewing SSL cert.

---

## Step 4 — Verify

- `https://allappsjohnnie.com` loads the hub with a padlock.
- If you set both apex and www, GitHub redirects one to the other automatically.

---

## Common snags

- **"Domain does not resolve to the GitHub Pages server"** → DNS hasn't propagated yet, or a record has a typo. Give it time, then recheck.
- **HTTPS checkbox greyed out** → GitHub is still issuing the cert. Wait, don't toggle repeatedly.
- **Old parking page shows** → registrar left a default A record; delete any A/AAAA/CNAME records you didn't add above.
- **Links break after moving to a custom domain** → all paths in this hub are relative, so they keep working. If you ever hardcode a URL in an app, use a relative path (`apps/foo/`) not an absolute one.
