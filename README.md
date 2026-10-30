# UI/UX Portfolio - David Olumide Daniel

Modern portfolio site built with Next.js and Tailwind. Content is stored in a
local data file for easy updates.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Update content

- Homepage, About, Contact copy:
  - `src/app/page.tsx`
  - `src/app/about/page.tsx`
  - `src/app/contact/page.tsx`
- Case studies data:
  - `src/lib/projects.ts`
- Project images:
  - `public/projects/`

## Build

```bash
npm run build
npm start
```

## Vercel deployment

Import the GitHub repository into Vercel as a Next.js project and keep the
detected build settings. Configure these environment variables for Production
and Preview deployments:

- `NEXT_PUBLIC_SITE_URL`: the production `https://*.vercel.app` URL, without a
  trailing slash.
- `RESEND_API_KEY`: a server-only Resend API key.
- `CONTACT_TO_EMAIL`: the email address linked to the Resend account that should
  receive portfolio enquiries.

The existing Netlify deployment continues to use Netlify Forms while it remains
online. Vercel and other hosts submit through the server-side `/api/contact`
route, which fails closed when Resend is not configured and does not expose the
API key to browser code.
