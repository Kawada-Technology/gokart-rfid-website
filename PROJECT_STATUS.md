# 🤖 Project Context & Handover Documentation
> **Target Audience:** AI Agents & New Developers
> **Last Updated:** 2025-12-27
> **Project State:** "Headless" Backend Complete. Frontend Static. Admin UI Skipped.
> **Repository Root:** `c:\Users\kawad\Projects\RFID\GoKartRFIDTool\gokart-rfid-website`

## 1. 🚨 CRITICAL CONTEXT FOR AI AGENTS
**READ THIS BEFORE WRITING CODE:**

1.  **Tech Stack Constraints**:
    *   **Next.js 15 (React 19)**: Be careful with 3rd-party React libraries (rich text editors, carousel, drag-n-drop) that may not yet support React 19.
        *   *Known Issue*: `react-markdown-editor-lite` fails.
        *   *Recommended*: `@uiw/react-md-editor` or native HTML elements.
    *   **Prisma v5.22.0**: We intentionally **downgraded from Prisma v7** due to configuration stability issues with the connection pooler. **DO NOT UPGRADE** back to v7 without explicit user instruction.
    *   **Tailwind CSS v4**: Configurations are in CSS variables (`src/app/globals.css`), NOT `tailwind.config.js`.

2.  **Database & Infrastructure**:
    *   **Provider**: Supabase PostgreSQL.
    *   **Connection**: We use the **IPv4 Connection Pooler** (Port 5432, Session Mode) because the local dev environment is IPv4-only.
    *   **Env Var**: `DATABASE_URL` must point to `aws-1-ap-northeast-1.pooler.supabase.com`.
    *   **Schema**: Synced via `npx prisma db push`. Local migrations are not strictly enforced yet.

3.  **Authentication**:
    *   **Provider**: NextAuth.js v4 (Credentials Flow).
    *   **Protection**: `middleware.ts` protects `/admin/*`.
    *   **Exclusion**: `/admin/login` is explicitly excluded in `middleware.ts` to prevent infinite redirect loops.
    *   **Admin Creds**: `kenchan4091@gmail.com` / `@Vatar4091`.

---

## 2. Implementation Status

| Feature Module | Status | Details |
| :--- | :--- | :--- |
| **Foundation** | ✅ 100% | Next.js 15, Tailwind v4, App Router, Responsive Design. |
| **Database** | ✅ 100% | Supabase connected, Schema defined, Seeded. |
| **Auth System** | ✅ 100% | Middleware, Login Page, Session Mgmt, Logout. |
| **API Layer** | ✅ 100% | REST APIs for Auth, Blog, and SEO are **fully implemented**. |
| **Admin UI** | ⚠️ Partial | Dashboard Shell exists. **CRUD forms are SKIPPED**. |
| **Frontend** | ⚠️ Static | Pages exist but display Mock Data. Not connected to APIs yet. |

---

## 3. API Documentation (Implemented)

The following endpoints exist in `src/app/api/` and connect directly to the database.

### 📝 Blog System (`src/app/api/blog`)
*   **GET** `/api/blog`: List all posts. Query params: `?status=published`.
*   **POST** `/api/blog`: Create post. (Auth: Admin).
    *   Body: `{ title, slug, content, tags[], category, status }`
*   **GET** `/api/blog/[id]`: Get single post details.
*   **PATCH** `/api/blog/[id]`: Update post. (Auth: Admin).
*   **DELETE** `/api/blog/[id]`: Delete post. (Auth: Admin).

### 🔍 SEO System (`src/app/api/seo`)
*   **GET** `/api/seo`: List all page configs.
*   **POST** `/api/seo`: Create config. (Auth: Admin).
    *   Body: `{ page, title, description, keywords, ogImageUrl }`
    *   Ex: `page: "home"`, `page: "about"`.
*   **GET** `/api/seo/[page]`: Get config by page slug.
*   **PATCH** `/api/seo/[page]`: Update config.
*   **DELETE** `/api/seo/[page]`: Delete config.

---

## 4. Architecture Specifications

### 4.1 File Structure
```
gokart-rfid-website/
├── src/
│   ├── app/
│   │   ├── api/                 # ✅ REST APIs (Auth, Blog, SEO)
│   │   ├── admin/               # ⚠️ Admin UI (Dashboard done, Login done, others empty)
│   │   └── (frontend)/          # ⚠️ Public pages (Static, need data connection)
│   ├── lib/
│   │   ├── prisma.ts            # ✅ Singleton Prisma Client
│   │   └── auth.ts              # ✅ NextAuth Configuration
│   └── middleware.ts            # ✅ Route Protection logic
├── prisma/
│   └── schema.prisma            # ✅ Database Models
└── .env.local                   # ✅ Env Config (Supabase + NextAuth)
```

### 4.2 Database Schema (Key Models)
*   **User**: Admin accounts (`role: "admin"`).
*   **BlogPost**: Content Management (`slug` is unique).
*   **SeoConfig**: Dynamic Metadata (`page` is unique key).
*   **Kart** / **Lap**: Reserved for Phase 7 (RFID integration).

---

## 5. Next Steps (Action Plan for New Agent)

If you are taking over this project, here is the recommended path:

### Phase 7: Frontend Integration (Priority)
1.  **Connect Blog Listing**:
    *   Edit `src/app/blog/page.tsx`.
    *   Replace mock data with `fetch('/api/blog?status=published')` (or direct Prisma call in Server Component).
2.  **Connect SEO**:
    *   Create a util function `getSeoMetadata(page: string)`.
    *   Use `generateMetadata` in `layout.tsx` or `page.tsx` to fetch dynamic titles.
3.  **Home Page Stats**:
    *   Connect the "Stats" section to real DB counts (Karts, Laps, Posts).

### Phase 6: Admin UI (Optional/Backlog)
*   The APIs are ready, but the UI forms (`/admin/blog/new`, `/admin/seo`) were skipped to save time.
*   If needed, implement them using **`@uiw/react-md-editor`** (for Markdown) to avoid React 19 issues.

---

## 6. How to Run & Verify
1.  **Install**: `npm install`
2.  **DB Sync**: `npx prisma db push`
3.  **Dev Server**: `npm run dev` (If errors, try `npm run dev -- --turbopack`)
4.  **Admin Login**: `http://localhost:3000/admin/login`
    *   Use credentials listed in Section 1.

**Good luck!** 🚀
