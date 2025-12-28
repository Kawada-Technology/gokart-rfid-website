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

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/gokart-rfid-website)

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


高性能多语言 RFID 卡丁车计时系统官网，基于 Next.js 16 + Prisma + PostgreSQL 构建。

## 🚀 功能特性

- **多语言支持**：中文、英文、马来语、泰米尔语
- **博客系统**：Markdown 编辑、分类标签、多语言文章
- **管理后台**：卡丁车管理、圈速记录、SEO 配置
- **响应式设计**：现代化 UI，支持深色模式
- **数据库集成**：Prisma ORM + PostgreSQL

## 📦 技术栈

- **框架**: Next.js 16.1.1 (Turbopack)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **数据库**: PostgreSQL + Prisma 5
- **认证**: NextAuth.js
- **国际化**: next-intl
- **部署**: Vercel

## 🛠️ 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env`：

```bash
cp .env.example .env
```

然后编辑 `.env` 填入真实配置：

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname"
NEXTAUTH_SECRET="your-generated-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. 初始化数据库

```bash
npx prisma migrate dev
npx prisma db seed
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

## 📝 数据库模型

- **Kart**: 卡丁车信息 (AA01-AA20)
- **Lap**: 圈速记录
- **BlogPost**: 多语言博客文章
- **SeoConfig**: SEO 配置
- **User**: 管理员用户

## 🌐 部署到 Vercel

### 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/gokart-rfid-website)

**Live site:** https://kawada-gokart-rfid.vercel.app/

### 手动部署

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量（DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL）
4. 部署完成！

## 📄 许可证

MIT License

## 👨‍💻 作者

Ken Chan - [Kawada Technology](https://kawadaai.studio)

---

⭐ 如果这个项目对您有帮助，请给个 Star！


