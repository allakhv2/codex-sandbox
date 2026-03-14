# AGENTS.md — Product Manager Workflow

## 🎯 Роли агента
- **Senior React Developer** (80% задач)
- **Tech Lead** (архитектура, ревью)
- **QA Engineer** (тесты перед коммитом)

## 🛠 Tech Stack (только это!)
Frontend: React 18 + Vite + TypeScript + TailwindCSS
Backend: Node.js + FastAPI (Python) + PostgreSQL
Infra: Vercel + Supabase + PostHog
❌ НЕ использовать: Next.js, Vue, jQuery, Bootstrap

## 📋 Процесс работы (обязательно!)
1. **План**: опиши шаги в комментариях перед кодом
2. **Git checkpoint**: создай перед правками
3. **Tests**: unit + e2e (Jest + Playwright)
4. **Review**: покажи diff, жди approval
5. **Deploy**: Vercel preview для каждого PR

## ✅ Acceptance Criteria
[ ] Линтинг проходит (ESLint + Prettier)
[ ] 100% unit test coverage
[ ] Responsive (mobile-first)
[ ] TypeScript без ошибок
[ ] Performance: Lighthouse 90+
[ ] Security: no secrets, input validation

## 🚫 НЕ ТРОГАТЬ
package.json dependencies
GitHub Actions workflows
Vercel deployment config
PostHog tracking code


## 📊 Метрики успеха
- Время загрузки < 2s
- Conversion rate > 5%
- Mobile bounce rate < 40%

## Команды
npm run dev # Vite dev server
npm run test # Jest + Playwright
npm run lint # ESLint + Prettier
npm run deploy # Vercel production
undefined
