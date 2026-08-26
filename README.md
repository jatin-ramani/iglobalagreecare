# IGLOBALAGREECARE

Responsive multi-product export website built with Next.js App Router, TypeScript and Tailwind CSS.

## Run locally

```bash
pnpm install
copy .env.example .env.local
pnpm dev
```

## Inquiry email setup

Both the homepage quote form and full contact form submit to `app/api/quote/route.ts`. Configure these variables locally and in Vercel:

```env
NEXT_PUBLIC_SITE_URL=https://www.iglobalagreecare.com
RESEND_API_KEY=re_xxxxxxxxx
EMAIL_FROM=IGLOBALAGREECARE <onboarding@resend.dev>
BUSINESS_EMAIL=iglobalagreecare2040@gmail.com
```

For production sending, verify a domain in Resend and replace `onboarding@resend.dev` with an address on that domain. Never commit the real API key. The forms include a honeypot field for basic bot filtering.

## Content structure

- `lib/data.ts` is the source of truth for all 11 products, contact details, FAQs and trust badges.
- `app/products/[slug]/page.tsx` creates every product detail route.
- `public/products/` contains locally hosted product imagery.
- `[CUSTOMIZE]` comments mark certifications, testimonials, leadership, export markets, legal copy and representative product images requiring verified client information.

## Production checklist

- Replace representative Cow Dung Cakes and PP/PET Strapping photographs with real client product images.
- Confirm certifications before showing badges as held.
- Add real leadership information, testimonials and export markets.
- Confirm the exact Google Maps pin.
- Have Privacy Policy and Terms reviewed by a qualified professional.
- Add all environment variables in Vercel and test a live inquiry.
