import CarouselAgent from './components/CarouselAgent';
import Hero from './components/Hero';

const FEATURES = [
  { title: 'Hook-driven сценарии', text: 'Агент собирает цепляющий первый слайд под конкретную нишу и аудиторию.' },
  { title: '4-слайдовый фреймворк', text: 'Готовая структура Hook → Problem → Framework → CTA экономит часы на продакшен.' },
  { title: 'Caption + hashtags', text: 'Вместе со слайдами получаешь подпись и набор хештегов для быстрого постинга.' },
] as const;

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero
        title="AI-агент для красивых Instagram-каруселей"
        subtitle="Собирай структуру поста, тексты слайдов и подписи под твою нишу за пару кликов — mobile-first и без хаоса в контенте."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {FEATURES.map((feature) => (
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6" key={feature.title}>
            <h2 className="text-lg font-semibold text-slate-100">{feature.title}</h2>
            <p className="mt-2 text-slate-400">{feature.text}</p>
          </article>
        ))}
      </section>
      <CarouselAgent />
    </main>
  );
}
