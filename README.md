# CareAX Homepage

RANA LEE · 이라나 · AX Instructor 공식 홈페이지

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Global CSS
- **Database**: Supabase PostgreSQL
- **Deployment**: Vercel

## 로컬 실행

```bash
npm install
cp .env.local.example .env.local
# .env.local 에 Supabase 키 입력
npm run dev
```

## 환경변수 (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Supabase 테이블 생성 SQL

```sql
create table contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);
```

## 배포 (Vercel)

1. Vercel에서 GitHub 저장소 연결
2. Environment Variables에 위 3개 키 입력
3. Deploy

## 폴더 구조

```
src/
├── app/
│   ├── api/contact/route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Nav.tsx
    ├── HeroSection.tsx
    ├── TickerSection.tsx
    ├── AboutSection.tsx
    ├── CurriculumSection.tsx
    ├── MethodSection.tsx
    ├── TestimonialsSection.tsx
    ├── CTASection.tsx
    └── Footer.tsx
```
