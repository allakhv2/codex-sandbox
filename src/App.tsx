import Hero from './components/Hero';

const FEATURES = [
  { title: 'A/B tests in 5 min', text: 'Run experiments fast and ship winners with confidence.' },
  { title: 'Mobile-first blocks', text: 'Responsive sections crafted for modern mobile conversion.' },
  { title: 'Privacy-aware analytics', text: 'Track growth events without exposing sensitive data.' },
] as const;

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero
        title="Launch high-converting product pages in days, not months"
        subtitle="React + TypeScript landing kit for startup teams focused on performance, trust, and conversion."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {FEATURES.map((feature) => (
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6" key={feature.title}>
            <h2 className="text-lg font-semibold text-slate-100">{feature.title}</h2>
            <p className="mt-2 text-slate-400">{feature.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
