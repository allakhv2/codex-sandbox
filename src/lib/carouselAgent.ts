export interface CarouselAgentInput {
  readonly niche: string;
  readonly audience: string;
  readonly tone: 'bold' | 'expert' | 'friendly';
  readonly goal: 'lead' | 'sale' | 'engagement';
}

export interface CarouselSlide {
  readonly title: string;
  readonly body: string;
}

export interface CarouselAgentOutput {
  readonly hook: string;
  readonly caption: string;
  readonly hashtags: string[];
  readonly slides: CarouselSlide[];
}

const GOAL_TO_CTA: Record<CarouselAgentInput['goal'], string> = {
  lead: 'Напиши в Директ слово "СТАРТ" и получи мини-аудит.',
  sale: 'Переходи по ссылке в профиле и забирай предложение сегодня.',
  engagement: 'Сохрани карусель и отметь друга, кому это полезно.',
};

const TONE_TO_STYLE: Record<CarouselAgentInput['tone'], string> = {
  bold: 'Смело и дерзко, с короткими punchy фразами.',
  expert: 'Структурно и экспертно, с конкретикой и аргументами.',
  friendly: 'Тепло и дружелюбно, как совет от знакомого.',
};

/**
 * Builds an Instagram carousel draft tailored to business context.
 */
export function buildCarouselDraft(input: CarouselAgentInput): CarouselAgentOutput {
  const cleanNiche = input.niche.trim() || 'digital business';
  const cleanAudience = input.audience.trim() || 'busy founders';

  const hook = `Как ${cleanNiche} может привлекать ${cleanAudience} через карусели без выгорания`;

  const slides: CarouselSlide[] = [
    {
      title: 'Слайд 1 — Hook',
      body: `${hook}. ${TONE_TO_STYLE[input.tone]}`,
    },
    {
      title: 'Слайд 2 — Problem',
      body: `${cleanAudience} часто видят контент, но не понимают, зачем действовать прямо сейчас.`,
    },
    {
      title: 'Слайд 3 — Framework',
      body: `Формула: Hook → Pain → Micro-solution → Social proof → CTA для цели ${input.goal}.`,
    },
    {
      title: 'Слайд 4 — CTA',
      body: GOAL_TO_CTA[input.goal],
    },
  ];

  const caption = [
    `Карусель для ниши: ${cleanNiche}.`,
    `Аудитория: ${cleanAudience}.`,
    `Тональность: ${TONE_TO_STYLE[input.tone]}`,
    GOAL_TO_CTA[input.goal],
  ].join(' ');

  const hashtags = ['#instagrammarketing', '#contentstrategy', '#carouseldesign', '#smmtips', '#growth'];

  return {
    hook,
    caption,
    hashtags,
    slides,
  };
}
