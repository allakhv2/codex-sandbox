import { buildCarouselDraft } from './carouselAgent';

describe('buildCarouselDraft', () => {
  it('builds a 4-slide draft with CTA based on goal', () => {
    const draft = buildCarouselDraft({
      niche: 'B2B SaaS',
      audience: 'product managers',
      tone: 'expert',
      goal: 'sale',
    });

    expect(draft.slides).toHaveLength(4);
    expect(draft.caption).toMatch(/B2B SaaS/);
    expect(draft.slides[3]?.body).toMatch(/ссылке в профиле/i);
  });

  it('uses safe defaults when text fields are empty', () => {
    const draft = buildCarouselDraft({
      niche: '   ',
      audience: '',
      tone: 'friendly',
      goal: 'engagement',
    });

    expect(draft.hook).toMatch(/digital business/i);
    expect(draft.hook).toMatch(/busy founders/i);
  });
});
