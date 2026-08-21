# Rajdip Bhattacharya — Portfolio

Personal portfolio site for [Rajdip Bhattacharya](https://github.com/rajdip-b). Built with Next.js (Pages Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and fill in the values you need:

| Variable | Purpose |
| --- | --- |
| `MAIL_USERNAME` | Gmail address used by the contact form |
| `MAIL_PASSWORD` | Gmail app password for that address |
| `GITHUB_TOKEN` | Token used to load public pull requests |
| `IGNORED_ORGANIZATIONS` | Comma-separated GitHub orgs to hide from Open Source |

`NEXT_PUBLIC_MAIL_*` and `NEXT_PUBLIC_IGNORED_ORGANIZATIONS` are still accepted so existing deploys keep working.

## Scripts

```bash
npm run dev          # start the development server
npm run build        # production build
npm run start        # serve the production build
npm run lint         # Next.js ESLint
npm run prettier:fix # format the repo
```
