---
description: GoKart RFID 网站 - 多语言和主题完整应用任务
---

# 任务概述

## 目标
1. **修复多语言切换功能** - 使语言选择器真正生效
2. **全站应用多语言** - 所有页面支持 EN/ZH/MS/TA 四种语言
3. **全站应用主题色** - 确保白天/黑夜模式在所有页面生效

---

# Task 1: 修复语言切换 (高优先级) ⚠️

## 当前问题
- 用户点击 EN，界面仍显示中文
- Cookie 保存正确，但翻译未应用

## 调试步骤
1. 检查浏览器控制台，添加：
```typescript
// 在 Navigation.tsx 中
console.log('Locale:', useLocale());
console.log('Home text:', t('home'));
```

2. 检查 `layout.tsx` 的 messages：
```typescript
const messages = await getMessages();
console.log('Messages keys:', Object.keys(messages));
```

3. 如果 messages 为空或不正确：
   - 检查 `src/i18n/request.ts` 路径
   - 确认 Cookie 名称是 `locale`
   - 重启 dev server

## 可能的修复方案

### 方案 A: 检查 server/client 消息同步
确保 `NextIntlClientProvider` 正确传递 messages。

### 方案 B: 使用 getLocale() server-side
可能需要在 request.ts 中正确读取 cookie。

### 方案 C: 参考官方文档
https://next-intl.dev/docs/getting-started/app-router/without-i18n-routing

特别关注 "Provide a locale" 章节。

---

# Task 2: 全站应用多语言

## 需要翻译的页面

### 1. 主页 (`src/app/page.tsx`)
需要翻译的内容：
- Hero section 标题和描述
- 按钮文字 ("下载最新版本", "查看技术文档")
- 统计数据标签
- 功能特性标题和描述

建议创建：`messages/*/HomePage.json`

### 2. 服务页 (`src/app/services/page.tsx`)
- 页面标题
- 服务列表
- CTA 按钮

### 3. 功能页 (`src/app/features/page.tsx`)
- 功能列表
- 描述文字

### 4. 博客页 (`src/app/blog/page.tsx`)
- 页面标题
- "查看更多" 等按钮

### 5. 关于页 (`src/app/about/page.tsx`)
- 关于内容
- 团队介绍

### 6. 管理后台 (`src/app/admin/*`)
**保持中文** - 后台只给管理员用，不需要多语言

## 翻译文件结构示例

```json
// messages/en.json
{
  "Navigation": { ... },
  "Footer": { ... },
  "HomePage": {
    "hero": {
      "badge": "High-Precision RFID Racing System",
      "title": "Kawada GoKart RFID",
      "subtitle": "Lap Counter System",
      "description": "Professional karting lap counter...",
      "downloadBtn": "Download Latest Version",
      "docsBtn": "Technical Documentation"
    },
    "stats": {
      "posts": "Published Articles",
      "laps": "Total Laps",
      "tags": "Received Tags",
      "speed": "Baud Rate (BPS)"
    }
  }
}
```

## 实施步骤

1. **创建完整的翻译文件** (4种语言)
   - 提取所有硬编码文字
   - 使用 AI 翻译工具辅助翻译马来语和泰米尔语

2. **逐页替换硬编码文字**
   ```typescript
   // Before
   <h1>功能特性</h1>
   
   // After
   const t = useTranslations('Features');
   <h1>{t('title')}</h1>
   ```

3. **测试每个页面的四种语言**

---

# Task 3: 全站应用主题色

## 已完成
- ✅ `globals.css` - 颜色变量定义
- ✅ Navigation - 主题切换按钮
- ✅ Footer - 主题色
- ✅ ThemeProvider - 全局包裹

## 需要检查的页面

### 检查清单
```
[ ] 主页 - 背景渐变、卡片颜色
[ ] 服务页 - 卡片、按钮
[ ] 功能页 - 图标、文字颜色
[ ] 博客页 - 文章卡片
[ ] 关于页 - 背景、文字
[ ] 管理后台 - 表格、表单
```

### 确保使用 Tailwind 颜色变量
- ✅ `bg-background` 而不是 `bg-white`
- ✅ `text-foreground` 而不是 `text-black`
- ✅ `border-border` 而不是 `border-gray-200`
- ✅ `bg-card` 用于卡片背景
- ✅ `text-primary` 用于强调色

### 暗色模式特殊处理
某些元素可能需要 dark mode 特殊样式：
```tsx
className="bg-white dark:bg-card"
```

---

# 执行计划

## Phase 1: 修复语言切换 (1-2小时)
1. 调试当前配置
2. 修复消息传递问题
3. 验证四种语言都能切换

## Phase 2: 主页翻译 (1小时)
1. 创建 HomePage 翻译
2. 替换主页文字
3. 测试所有语言

## Phase 3: 其他页面翻译 (2-3小时)
1. 服务页
2. 功能页
3. 博客页
4. 关于页

## Phase 4: 主题色检查 (1小时)
1. 逐页检查暗色模式
2. 修复颜色不一致的地方
3. 确保所有卡片、按钮、表单都正确显示

## Phase 5: 全面测试 (1小时)
1. 测试 4 种语言 × 2 种主题 = 8 种组合
2. 移动端测试
3. 修复发现的问题

---

# 关键注意事项

## DO ✅
- 使用 `useTranslations()` 获取翻译
- 使用 Tailwind 的颜色变量
- 保持后台中文
- 测试每个改动

## DON'T ❌
- 不要改动后台语言
- 不要硬编码颜色值
- 不要跳过测试
- 不要改变 UI 布局（除非必要）

---

# 成功标准

## 多语言
- [ ] 语言选择器正常工作
- [ ] 所有前台页面支持 4 种语言
- [ ] 切换语言后所有文字都更新
- [ ] Cookie 正确保存用户选择

## 主题
- [ ] 主题切换按钮正常工作
- [ ] 暗色模式所有页面颜色正确
- [ ] 卡片、按钮、表单在两种主题下都清晰可读
- [ ] 没有颜色闪烁或不一致

---

# 参考资源

- next-intl 文档: https://next-intl.dev/docs
- Tailwind Dark Mode: https://tailwindcss.com/docs/dark-mode
- OKLCH 颜色工具: https://oklch.com

---

# 当前项目状态

- Dev server 运行中 (port 3000)
- 已安装: next-intl, next-themes, js-cookie
- 翻译文件: messages/en.json, zh.json, ms.json, ta.json (部分完成)
- 主题色: globals.css 已配置

**开始执行**: 从 Task 1 开始，修复语言切换功能！
