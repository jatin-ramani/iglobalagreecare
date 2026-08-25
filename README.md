# IGLOBALAGREECARE

Premium responsive website for IGLOBALAGREECARE, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Content and assets

- `app/` contains all pages, SEO routes, and the inquiry API.
- `components/` contains the responsive navigation, footer, forms, and reusable UI.
- `lib/data.ts` contains product and verified contact data.
- `public/client/` contains locally hosted imagery and the logo extracted from the client presentation.

The website content is based on `Agriculture Presentation.pdf`. Configure the Resend variables in `.env.local` to enable inquiry notifications and customer confirmations.

## Deploy

Import the `frontend` directory into Vercel, add the variables from `.env.example`, verify the sending domain in Resend, and deploy.
