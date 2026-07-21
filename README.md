# Dr. Abhilekh — Consultant Urologist Website

A production-ready, single-page luxury medical practice website built with
Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion,
MongoDB/Mongoose, React Hook Form + Zod, and Nodemailer.

## 1. Prerequisites

- Node.js 20+
- A MongoDB connection string (Atlas or self-hosted)
- SMTP credentials for outbound email notifications (Gmail app password, SendGrid, etc.)

## 2. Install

```bash
npm install
```

## 3. Configure environment variables

Copy `.env.example` to `.env.local` and fill in real values:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|---|---|
| `MONGODB_URI` | Connection string for the appointments database |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | SMTP server details |
| `SMTP_USER` / `SMTP_PASSWORD` | SMTP auth credentials |
| `SMTP_FROM` | "From" address used on outgoing emails |
| `CLINIC_NOTIFICATION_EMAIL` | Inbox that receives new appointment/contact notifications |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL, used in metadata and schema |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number in international format, no `+` or spaces |
| `NEXT_PUBLIC_CLINIC_PHONE` | Phone number used in `tel:` links (with `+`) |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED` | A Google Maps "Embed a map" URL for the clinic location |

The site will still build and run without these set, but appointment emails
will silently log a warning instead of sending, and MongoDB calls will throw
until `MONGODB_URI` is set.

## 4. Add real images

See `IMAGE_MANIFEST.md` for the full list of required files, their purpose,
orientation, and recommended resolution. Convert all photos to `.webp`,
name them exactly as listed, and place them in `public/images/`.

The site will not render correctly (broken image icons) until these files
are present — none of the image paths in the code are placeholders or
remote URLs, by design.

## 5. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 6. Build for production

```bash
npm run build
npm run start
```

## 7. Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel.
3. Add all variables from `.env.example` in Vercel's Project → Settings → Environment Variables.
4. Deploy. Vercel will detect Next.js automatically.

## Project structure

```
app/                  Routes, layouts, API routes, SEO files
  api/appointment/     POST endpoint — saves to MongoDB, emails the clinic
  api/contact/         POST endpoint — emails the clinic
  privacy-policy/      Static legal page
  terms/               Static legal page
components/
  layout/              Navbar, Footer, FloatingActions, ScrollProgress
  sections/            One component per homepage section
  ui/                  Reusable primitives (SectionHeading, SplitText, MagneticButton)
hooks/                 useActiveSection, useCounter
lib/                   mongodb.ts, email.ts, validations.ts, data.ts (site copy)
models/                Mongoose Appointment schema
types/                 Shared TypeScript interfaces
public/images/         Place all real photography here (see IMAGE_MANIFEST.md)
```

## Notes on the appointment flow

- Submissions are validated client-side (Zod via React Hook Form) and
  server-side (the same Zod schema, re-run in the API route) — never trust
  the client alone.
- Every request is saved to MongoDB first; if the email notification fails,
  the appointment is still recorded, and the failure is only logged.
- Duplicate MongoDB connections are prevented via a cached global connection
  (`lib/mongodb.ts`), which is safe for Next.js hot reload and serverless
  cold starts on Vercel.

## Accessibility & performance notes

- All interactive elements have visible focus states and ARIA labels.
- `prefers-reduced-motion` disables/shortens animations site-wide.
- Images use `next/image` with explicit `sizes` for responsive loading.
- Fonts are loaded via `next/font` (self-hosted, no layout shift).
