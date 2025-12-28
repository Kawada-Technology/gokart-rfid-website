---
description: GoKart RFID 网站多语言问题排查与修复
---

# 当前状态

## ✅ 已完成
1. 主题系统 (白天/黑夜) - 正常工作
2. 品牌更新为 "Kawada GoKart RFID"
3. Footer 简化布局
4. next-intl 基础架构安装完成

## ❌ 当前问题
**多语言切换不生效** - 用户点击语言选择器改为 EN，界面仍显示中文

## 错误分析

### 症状
- Cookie 保存正确 (`locale=en`)
- `useLocale()` 返回正确值
- 但 `t('key')` 仍返回中文

### 已排查
- ✅ Cookie 名称正确 (`locale`)
- ✅ 翻译文件路径正确 (`messages/*.json`)
- ✅ i18n/request.ts 配置正确
- ✅ NextIntlClientProvider 已添加到 layout.tsx
- ✅ useTranslations() hook 正确使用

### 可能原因
1. **服务器/客户端消息传递问题**
2. **dev server 缓存** - 可能需要重启
3. **messages prop 传递不完整**

---

# 修复步骤

## Step 1: 检查消息传递
```bash
# 打开浏览器开发者工具
# 检查 Network -> 查看 HTML 响应
# 搜索 "NextIntlClientProvider" 确认 messages 是否包含在内
```

## Step 2: 重启 dev server
```bash
# 停止当前 dev server (Ctrl+C)
npm run dev -- --turbopack
# 清除浏览器 cookie 和缓存
# 重新测试语言切换
```

## Step 3: 调试输出
在 `Navigation.tsx` 添加：
```typescript
const t = useTranslations('Navigation');
const locale = useLocale();
console.log('Current locale:', locale);
console.log('Translation test:', t('home'));
```

查看浏览器控制台输出。

## Step 4: 检查 layout.tsx
确认：
```typescript
export default async function RootLayout({ children }: Props) {
  const messages = await getMessages();  // ← 这行是否执行？
  
  return (
    <NextIntlClientProvider messages={messages}>  {/* ← messages 是否有值？ */}
      ...
    </NextIntlClientProvider>
  );
}
```

## Step 5: 参考官方文档
https://next-intl.dev/docs/environments/server-client-components

重点查看：
- "Using internationalization in Client Components"
- "Option 4: Providing all messages"

---

# 关键文件清单

## 配置文件
- `src/i18n/request.ts` - 读取 cookie `locale`
- `next.config.ts` - 包含 `createNextIntlPlugin`
- `src/app/layout.tsx` - 包含 `NextIntlClientProvider`

## 翻译文件
- `messages/en.json` - English
- `messages/zh.json` - 华语 (默认)
- `messages/ms.json` - Malay
- `messages/ta.json` - Tamil

## 组件
- `src/components/LanguageSelector.tsx` - 使用 `useLocale()`
- `src/components/Navigation.tsx` - 使用 `useTranslations('Navigation')`
- `src/components/Footer.tsx` - 使用 `useTranslations('Footer')`

---

# 下一步操作

1. **立即执行**: 重启 dev server
2. **添加调试**: console.log 输出当前 locale 和翻译结果
3. **如仍失败**: 查看 next-intl GitHub issues，搜索类似问题

---

# 备注给 Gemini

如果接手此任务：
- 已安装 `next-intl`, `js-cookie`
- Cookie 名称必须是 `locale` (不要改)
- 主要问题：翻译不生效，可能是 NextIntlClientProvider 的 messages 传递
- 参考文档：https://next-intl.dev/docs/getting-started/app-router
- Dev server 正在运行，可能需要重启

**关键提示**: 不要随意修改 UI，专注解决翻译功能。
