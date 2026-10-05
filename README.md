# BONET website

A responsive, static-exportable Next.js website for Big Steps Outreach Network (BONET).

## Run locally

Install dependencies with the pinned package manager and start the development server:

```sh
pnpm install
pnpm dev
```

The site serves on port 3000. Create the static export with `pnpm build`; Next.js writes the export to `out/`.

The homepage is the only public page. Content and program cards live in `app/page.tsx`; responsive styles are in `app/globals.css`. The program photography was cropped from the screenshot supplied with the project request and uploaded into the project-managed `/manus-storage/` image paths used by the page.
