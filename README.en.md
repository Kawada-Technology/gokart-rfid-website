# GoKart RFID Website

## Kawada GoKart RFID Website https://kawada-gokart-rfid.vercel.app/

---

## Introduction

A high‑performance multilingual RFID kart timing system website built with **Next.js 16, Prisma, and PostgreSQL**, supporting Chinese, English, Malay, Tamil, and more.

---

## 🚀 Features

- Multilingual: Chinese, English, Malay, Tamil
- Blog system: Markdown editing, categories, multilingual posts
- Admin panel: Kart management, lap records, SEO settings
- Responsive UI: Modern design with dark mode support
- Database: Prisma ORM + PostgreSQL

---

## 📦 Tech Stack

- Framework: Next.js 16.1.1 (Turbopack)
- Language: TypeScript 5
- Styling: Tailwind CSS 4
- Database: PostgreSQL + Prisma 5
- Auth: NextAuth.js
- i18n: next‑intl
- Deployment: Vercel

---

## 🛠️ Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in real values:

```bash
cp .env.example .env
```

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname"
NEXTAUTH_SECRET="your-generated-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Initialize database

```bash
npx prisma migrate dev
npx prisma db seed
```

### 4. Start development server

```bash
npm run dev
```

Visit http://localhost:3000 to see the site locally.

---

## 🌐 Deploy to Vercel

### One‑Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kawada-Technology/gokart-rfid-website)

**Live site:** https://kawada-gokart-rfid.vercel.app/

### Manual Deploy

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables (`DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`)
4. Deploy!

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Ken Chan - [Kawada Technology](https://kawadaai.studio)

---

⭐ If this project helped you, please give it a Star!


