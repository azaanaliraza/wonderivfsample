export type Block =
  | { type: 'prose'; heading?: string; paragraphs: string[] }
  | { type: 'list'; heading?: string; intro?: string; items: string[]; note?: string }
  | {
      type: 'steps';
      heading: string;
      intro?: string;
      steps: { title: string; text: string }[];
    }
  | {
      type: 'table';
      heading: string;
      intro?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      type: 'cards';
      heading: string;
      intro?: string;
      cards: { title: string; text?: string }[];
    }
  | { type: 'note'; heading?: string; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface Faq {
  q: string;
  a: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export type TreatmentCategory =
  | 'fertility-treatments'
  | 'diagnostics'
  | 'fertility-preservation'
  | 'male-fertility'
  | 'advanced-ivf';

export interface ServicePage {
  slug: string;
  path: string;
  category: TreatmentCategory;
  title: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  blocks: Block[];
  faqs?: Faq[];
}

export interface ConditionPage {
  slug: string;
  path: string;
  group: 'infertility' | 'female' | 'male';
  title: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  blocks: Block[];
  faqs?: Faq[];
}

export interface Doctor {
  slug: string;
  path: string;
  name: string;
  credentials: string;
  title: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  stats: Stat[];
  intro: string;
  bio: string[];
  education: string[];
  expertise: string[];
  recognitions?: string[];
  quote?: string;
  approach?: string[];
  closingCta: string;
}

export interface Leader {
  slug: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  bio: string[];
  quote?: string;
}

export interface StaticPage {
  slug: string;
  path: string;
  title: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  image?: string;
  imageAlt?: string;
  blocks: Block[];
  faqs?: Faq[];
}

export interface BlogPost {
  slug: string;
  path: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readingTime: string;
  blocks: Block[];
}

export interface LocationCard {
  slug?: string;
  name: string;
  city: string;
  address: string[];
  phone: string;
  phoneHref: string;
  mapUrl?: string;
  image?: string;
  imageAlt?: string;
}
