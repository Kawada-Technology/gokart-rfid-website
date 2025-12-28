# GoKart RFID Website

## Kawada GoKart RFID 网站 https://kawada-gokart-rfid.vercel.app/

---

## 简介 / Introduction

高性能多语言 RFID 卡丁车计时系统官网，基于 **Next.js 16 + Prisma + PostgreSQL** 构建，支持中文、英文、马来语、泰米尔语等多语言。

A high‑performance multilingual RFID kart timing system website built with **Next.js 16, Prisma, and PostgreSQL**, supporting Chinese, English, Malay, Tamil, and more.

---

## 🚀 功能特性 / Features

- **多语言支持**：中文、英文、马来语、泰米尔语
- **博客系统**：Markdown 编辑、分类标签、多语言文章
- **管理后台**：卡丁车管理、圈速记录、SEO 配置
- **响应式设计**：现代化 UI，支持深色模式
- **数据库集成**：Prisma ORM + PostgreSQL

- **Multilingual**: Chinese, English, Malay, Tamil
- **Blog system**: Markdown editing, categories, multilingual posts
- **Admin panel**: Kart management, lap records, SEO settings
- **Responsive UI**: Modern design with dark mode support
- **Database**: Prisma ORM + PostgreSQL

---

## 📦 技术栈 / Tech Stack

- **框架**: Next.js 16.1.1 (Turbopack)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **数据库**: PostgreSQL + Prisma 5
- **认证**: NextAuth.js
- **国际化**: next‑intl
- **部署**: Vercel

- **Framework**: Next.js 16.1.1 (Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL + Prisma 5
- **Auth**: NextAuth.js
- **i18n**: next‑intl
- **Deployment**: Vercel

---

## 🛠️ 本地开发 / Local Development

### 1. 安装依赖 / Install Dependencies

```bash
npm install
```

### 2. 配置环境变量 / Configure Environment Variables

复制 `.env.example` 为 `.env` 并填写真实配置：

```bash
cp .env.example .env
```

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname"
NEXTAUTH_SECRET="your-generated-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. 初始化数据库 / Initialize Database

```bash
npx prisma migrate dev
npx prisma db seed
```

### 4. 启动开发服务器 / Start Development Server

```bash
npm run dev
```

访问 http://localhost:3000 即可查看本地站点。

---

## 🌐 部署到 Vercel / Deploy to Vercel

### 一键部署 / One‑Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/gokart-rfid-website)

**Live site:** https://kawada-gokart-rfid.vercel.app/

### 手动部署 / Manual Deploy

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量（`DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`）
4. 完成部署！

---

## 📄 许可证 / License

MIT License

---

## 👨‍💻 作者 / Author

Ken Chan - [Kawada Technology](https://kawadaai.studio)

---

⭐ 如果这个项目对您有帮助，请给个 Star！
---  

 **????(GitHub Pages)**:  
[https://<YOUR_GITHUB_USERNAME>.github.io/gokart-rfid-website](https://<YOUR_GITHUB_USERNAME>.github.io/gokart-rfid-website)
---  

 **????(GitHub Pages)**:  
[https://<kawada-technology.github.io/gokart-rfid-website](https://kawada-technology.github.io/gokart-rfid-website)
