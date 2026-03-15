import { useMemo, useState } from 'react';
import { buildCarouselDraft, type CarouselAgentInput } from '../lib/carouselAgent';

const INITIAL_INPUT: CarouselAgentInput = {
  niche: 'Онлайн-школа английского',
  audience: 'эксперты и фрилансеры 25-35',
  tone: 'expert',
  goal: 'lead',
};

/**
 * Interactive assistant for generating Instagram carousel ideas.
 */
export default function CarouselAgent() {
  const [input, setInput] = useState<CarouselAgentInput>(INITIAL_INPUT);
  const draft = useMemo(() => buildCarouselDraft(input), [input]);

  return (
    <section className="mx-auto mt-4 grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8">
      <article className="rounded-3xl border border-fuchsia-400/30 bg-slate-900/80 p-6">
        <h2 className="text-2xl font-bold text-white">Instagram Carousel Agent</h2>
        <p className="mt-2 text-sm text-slate-300">Заполни контекст — агент соберет структуру из 4 слайдов, caption и hashtag-пак.</p>

        <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
          <label className="block">
            <span className="text-xs uppercase tracking-wider text-slate-400">Ниша</span>
            <input
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
              onChange={(event) => setInput((current) => ({ ...current, niche: event.target.value }))}
              value={input.niche}
            />
          </label>

          <label className="block">
            <span className="text-xs uppercase tracking-wider text-slate-400">Аудитория</span>
            <input
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
              onChange={(event) => setInput((current) => ({ ...current, audience: event.target.value }))}
              value={input.audience}
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-slate-400">Тон</span>
              <select
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                onChange={(event) => setInput((current) => ({ ...current, tone: event.target.value as CarouselAgentInput['tone'] }))}
                value={input.tone}
              >
                <option value="bold">Bold</option>
                <option value="expert">Expert</option>
                <option value="friendly">Friendly</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-slate-400">Цель</span>
              <select
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                onChange={(event) => setInput((current) => ({ ...current, goal: event.target.value as CarouselAgentInput['goal'] }))}
                value={input.goal}
              >
                <option value="lead">Lead</option>
                <option value="sale">Sale</option>
                <option value="engagement">Engagement</option>
              </select>
            </label>
          </div>
        </form>
      </article>

      <article className="rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-6">
        <h3 className="text-lg font-semibold text-cyan-200">Hook</h3>
        <p className="mt-2 text-slate-100">{draft.hook}</p>

        <h3 className="mt-5 text-lg font-semibold text-cyan-200">Slides</h3>
        <ol className="mt-2 space-y-3">
          {draft.slides.map((slide) => (
            <li className="rounded-2xl border border-slate-700 bg-slate-950/60 p-3" key={slide.title}>
              <p className="font-semibold text-white">{slide.title}</p>
              <p className="mt-1 text-sm text-slate-300">{slide.body}</p>
            </li>
          ))}
        </ol>

        <h3 className="mt-5 text-lg font-semibold text-cyan-200">Caption</h3>
        <p className="mt-2 text-sm text-slate-300">{draft.caption}</p>

        <h3 className="mt-5 text-lg font-semibold text-cyan-200">Hashtags</h3>
        <p className="mt-2 text-sm text-slate-300">{draft.hashtags.join(' ')}</p>
      </article>
    </section>
  );
}
