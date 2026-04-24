# Portfolio AI

Production-ready personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and Geist fonts.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

## Contact Form Setup

The contact API needs these environment variables in local development and in Vercel production:

```bash
GMAIL_USER=yourgmailaddress@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
CONTACT_TO_EMAIL=yourgmailaddress@gmail.com
```

`CONTACT_TO_EMAIL` is optional. If you leave it empty, messages are sent to `GMAIL_USER`.
