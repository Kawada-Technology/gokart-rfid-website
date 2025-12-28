# SEO & Analytics 配置指南

## 已集成的工具

### 1. ✅ Vercel Analytics（无需配置）
- **功能**：实时访问统计、页面浏览量
- **启用方式**：部署到 Vercel 后自动启用
- **查看数据**：Vercel Dashboard → Analytics

### 2. ⚙️ Google Analytics（需配置）
- **功能**：详细流量分析、用户行为、地理位置、设备统计

#### 配置步骤：
1. 前往 [Google Analytics](https://analytics.google.com/)
2. 创建账号并获取 **Measurement ID** (格式：G-XXXXXXXXXX)
3. 在项目根目录 `.env.local` 中添加：
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. 重启开发服务器：`npm run dev`

### 3. ✅ Vercel Speed Insights（无需配置）
- **功能**：页面性能监控、Core Web Vitals
- **启用方式**：部署到 Vercel 后自动启用

---

## 动态 SEO (已实现)

### 管理 SEO 配置
1. 登录后台：`http://localhost:3000/admin/login`
2. 进入 **SEO 配置**
3. 点击页面卡片（首页、功能、服务等）
4. 填写：
   - 页面标题 (Title)
   - 页面描述 (Description)
   - 关键词 (Keywords)

### 自动应用
前台页面会自动从数据库读取 SEO 配置，无需重新部署。

---

## 环境变量清单

在 `.env.local` 中配置以下变量：

```env
# 数据库
DATABASE_URL="your-supabase-url"

# 认证
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"

# Google Analytics（可选）
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

---

## 部署到 Vercel

1. 推送代码到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量（复制上述所有变量）
4. 部署

部署后，Vercel Analytics 和 Speed Insights 会自动启用！

---

## 验证集成

### 本地验证
```bash
npm run dev
```
打开浏览器开发者工具 → Network，查看是否加载：
- `gtag/js` (Google Analytics)
- `va/script.js` (Vercel Analytics)

### 生产验证
部署后访问：
- Vercel Dashboard → Analytics（查看访问统计）
- Vercel Dashboard → Speed Insights（查看性能数据）
- Google Analytics 控制台（实时流量）

---

## 常见问题

**Q: Google Analytics 没数据？**
A: 检查 `.env.local` 中的 `NEXT_PUBLIC_GA_ID` 是否正确。

**Q: Vercel Analytics 看不到？**
A: 确保已部署到 Vercel（本地不显示）。

**Q: 如何查看关键词排名？**
A: 使用 Google Search Console (需单独配置)。
