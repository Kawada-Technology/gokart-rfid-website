# GoKart RFID Website

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


