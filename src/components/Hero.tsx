export interface HeroProps {
  readonly title: string;
  readonly subtitle: string;
}

/** Main hero section for top-of-funnel conversion. */
export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-fuchsia-900/30 backdrop-blur">
        <p className="mb-4 inline-flex rounded-full border border-fuchsia-500/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
          Built for creators & startups
        </p>
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-xl bg-fuchsia-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-fuchsia-300" type="button">
            Generate carousel
          </button>
          <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:border-fuchsia-300" type="button">
            View examples
          </button>
        </div>
      </div>
    </section>
  );
}
