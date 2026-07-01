# Company culture photos

Put company culture photos in **this folder** to make them appear in the
**Life at CS Group** gallery on the Careers page (`/careers`).

## How to add a photo

1. Copy your image file into this folder, e.g. `offsite.jpg`.
2. Open `src/lib/careers.ts` and find the `shots:` list under `culture`.
3. On the matching shot, add a `src` pointing to your file:

   ```ts
   { caption: { en: "Team offsites", zh: "团队团建" }, src: "/culture/offsite.jpg" },
   ```

That's it — the placeholder frame is replaced by your photo automatically.

## Tips

- Portrait shots look best at about **1200 × 1500 px** (4:5).
- For a wide shot (the ones marked `span: "wide"`), use about **1600 × 1000 px**.
- Use `.jpg` for photos, `.webp` for smaller files. Keep each under ~500 KB.
- Any shot without a `src` shows a tasteful placeholder frame — so you can add
  photos a few at a time.
