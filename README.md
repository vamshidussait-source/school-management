# EduManage — School Management System (Next.js)

This is the Next.js (App Router) conversion of the original single-file React/Vite
prototype. It adds working login & registration, splits the 3,200-line `App.tsx`
into reusable components, and turns the old "click a portal to enter" demo into
real role-based routing.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. You'll be redirected to `/login`.

### Demo accounts

Mock auth is backed by `localStorage` (no backend yet). Any of these work with
password `password123`, or register a new account from `/register`:

| Role    | Email               |
|---------|---------------------|
| Admin   | admin@school.edu    |
| Teacher | teacher@school.edu  |
| Student | student@school.edu  |
| Parent  | parent@school.edu   |

## Project structure

```
app/
  (auth)/login/page.tsx          Login page
  (auth)/register/page.tsx       Registration page
  (auth)/forgot-password/page.tsx
  (auth)/layout.tsx              Redirects already-logged-in users away
  admin/layout.tsx               Wraps all /admin/* routes in PortalShell
  admin/dashboard/page.tsx       Thin route wrapper -> portal-views/AdminDashboard
  admin/students/page.tsx        ...one folder per nav item, same pattern
  teacher/...  student/...  parent/...   (same structure per portal)
  layout.tsx                     Root layout: fonts, AuthProvider, Toaster
  page.tsx                       "/" redirects to /login or /{role}/dashboard

src/
  components/
    shared/        Badge, Btn, Card, Modal, Input, Select, Table*, StatCard,
                    PageHeader, SearchBar, Avatar — the reusable primitives
                    that used to be defined inline at the top of App.tsx
    layout/         Sidebar, Header, PortalShell (auth + role guard + chrome)
    portal-views/    The 44 actual page bodies (AdminStudents, TeacherGrades,
                    StudentResults, ParentFees, etc.), one component per file
  data/
    mock-data.ts    All the sample STUDENTS/TEACHERS/etc. arrays, typed
    nav-config.ts   Sidebar navigation + portal labels/colors
  lib/
    types.ts        Shared TypeScript types (Student, Teacher, AuthUser, ...)
    auth.ts         Mock auth: login(), register(), session helpers
    utils.ts        cn() class-merging helper
  hooks/
    useAuth.tsx     React context exposing { user, loading, logout, refresh }
  styles/
    globals.css     Tailwind v4 entrypoint + the original design tokens/theme
```

## Why it's split up this way

- **`components/shared`** — generic UI building blocks with no business logic.
  Same components the original `App.tsx` defined inline (`Badge`, `Btn`,
  `Modal`, `Card`, `TableWrapper`/`Th`/`Td`, `FormField`/`Input`/`Select`,
  `StatCard`, `PageHeader`, `SearchBar`, `Avatar`), now individually
  importable instead of living in one 3,200-line file.
- **`components/layout`** — the app chrome (`Sidebar`, `Header`) plus
  `PortalShell`, which replaces the old `App()` root component. It checks
  the session, redirects to `/login` if there isn't one, redirects to the
  user's own portal if they try to view someone else's, and renders the
  sidebar/header/content frame.
- **`components/portal-views`** — one file per dashboard page (what used to
  be `AdminStudents()`, `TeacherGrades()`, etc. inside `App.tsx`). Each route
  in `app/` is a 3-line wrapper that imports and renders one of these, so the
  actual page logic is easy to find and edit without scrolling through
  thousands of lines.
- **`data/mock-data.ts`** — every sample data array, now typed against
  `lib/types.ts` instead of being inferred inline.

## Authentication

`src/lib/auth.ts` simulates a backend using `localStorage`, with a small
artificial delay so loading states feel real. `login()` and `register()` are
written to match what a real API call would need (email/password in,
`{ ok, user }` or `{ ok, error }` out), so swapping them for real `fetch()`
calls to your backend should mostly mean rewriting the inside of those two
functions — the pages and `useAuth()` hook shouldn't need to change.

Each portal route (`/admin/*`, `/teacher/*`, `/student/*`, `/parent/*`) is
wrapped in `PortalShell`, which enforces that the logged-in user's `role`
matches the portal they're viewing. There's no real password hashing or
session expiry here — that's expected to live in your eventual backend.

## Notes on the conversion

- Routing: React state (`useState(portal)`, `useState(currentPage)`) became
  real URLs (`/admin/students`, `/teacher/grades`, ...), so the browser
  back/forward buttons and refresh now work correctly, and pages can be
  linked to directly.
- Charts (`recharts`) only run in the browser, so any page that renders a
  chart is marked `"use client"`. Pages that are pure static markup (no
  `useState`/`onClick`/charts) were left as Server Components.
- `AdminTimetable` is reused as-is by `/student/timetable` and
  `/teacher/timetable` (matching the original behavior, where those routes
  rendered `<AdminTimetable />` directly). Likewise `/teacher/exams` renders
  the same `AdminExams` component the admin portal uses.
- The shadcn/ui component library that shipped in the original
  `components/ui` folder was not ported — `App.tsx` never imported from it,
  so it would have added ~50 unused files.

## What's not wired up yet

- All "Add", "Edit", "Delete" buttons throughout the dashboards are still
  visual-only (as they were in the original prototype) — they don't persist
  changes anywhere.
- Forgot-password is a UI stub (no email actually gets sent).
- No real backend/database — see `src/lib/auth.ts` for where to plug one in.
