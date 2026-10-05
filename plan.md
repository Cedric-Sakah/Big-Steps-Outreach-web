# BONET Website Plan

## Product and implementation

Build a single-page, responsive Next.js App Router website for Big Steps Outreach Network (BONET). Use TypeScript, semantic React components, local CSS, and user-supplied BONET imagery extracted carefully from the reference screenshot where practical. The site is an informational, static website: no account, server, database, or payment integration is required. Donation/support calls to action will navigate to the on-page contact/support section instead of claiming a payment flow that has not been configured.

### Project structure

- `app/layout.tsx`: document metadata, global font/color setup, and shared page shell.
- `app/page.tsx`: homepage section composition and data for programs, values, and initiatives.
- `app/globals.css`: responsive layout, component styling, states, reduced-motion handling, and mobile navigation styles.
- `public/images/`: BONET photos cropped from the user-provided design-reference screenshot where legible and suitable.
- `public/manus-routes.json`: static route declaration for the single public route `/`.
- `next.config.ts`, `package.json`, and `tsconfig.json`: Next.js static export and TypeScript toolchain.

## Design description

- **Design movement:** contemporary, human-centered nonprofit editorial design, closely following the supplied BONET screenshot.
- **Core principles:** community-first imagery; clear and credible impact; warm, dignified storytelling; direct, useful navigation.
- **Color philosophy:** use a confident BONET cobalt blue for action and advocacy, grounded by soft lilac/off-white section backgrounds and deep charcoal text. Green is a restrained supporting accent for community and growth.
- **Layout paradigm:** long-scroll campaign landing page with a wide photographic hero, an asymmetric image-and-copy impact section, a straightforward program-card row, a varied photo mosaic for initiatives, a full-width blue mission statement, and a quiet footer.
- **Signature elements:** bold blue donation/support buttons; compact eyebrow labels and short blue section underlines; rounded photo corners and small impact callouts.
- **Interaction philosophy:** anchor links take visitors directly to useful content; focus states are visible; mobile navigation stays simple; button and card motion is subtle and nonessential.
- **Animation:** brief opacity/translation on hover only; no essential scroll-triggered animation; respect `prefers-reduced-motion`.
- **Typography system:** clean, accessible sans-serif family using system fallbacks; strong compact headings paired with comfortably spaced body text and small, legible overlines.
- **Brand essence:** a youth-led Cameroonian network turning participation into safer, more equitable community futures; **hopeful, grounded, determined**.
- **Brand voice:** direct and community-centered. Example lines: “Young people belong in every decision that shapes their future.” “Big steps start with communities moving together.”
- **Wordmark & logo:** a simple, custom stepped-path symbol paired with the BONET wordmark, drawn in inline SVG/CSS so it remains crisp and lightweight.
- **Signature brand color:** BONET cobalt blue, `#1455D9`.

## Content and behavior

Preserve the user’s supplied facts: founded in 2010; youth-led association; registration No: 000762/ADR/J06/BAPP; over 50,000 young people, women, and vulnerable people directly reached across the South West, North West, West, Centre, East, Littoral, Adamawa, and Far North Regions of Cameroon; mission, vision, and ten stated values; work spanning youth and women empowerment, good governance, human rights, marginalization, inequality, HIV/AIDS, and other STDs. Program and initiative wording should remain concise and avoid inventing dates, project outcomes, partner names, or contact details.
