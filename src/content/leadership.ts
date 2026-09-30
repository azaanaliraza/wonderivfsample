import type { Leader, StaticPage } from '../lib/content-types';

export const leaders: Leader[] = [
  {
    slug: 'manish-khatri',
    name: 'Mr. Manish Khatri',
    role: 'Director',
    image: '/images/leadership/mr-manish-khatri-ivf-specialist-india.webp',
    imageAlt: 'Mr. Manish Khatri, Founder & Director of Wonder IVF',
    bio: [
      'Manish Khatri is Director of Wonder IVF and Founder & Director of Wonder IVF and Childcare Pvt. Ltd., the organisation he launched in June 2025 together with his wife and Joint Director, Jasmeet Khatri.',
      'His professional journey spans mining, real estate, infrastructure, manufacturing and healthcare, and is marked by a long-standing commitment to building enterprises with depth, discipline and enduring value.',
      'From 2014 to 2019 he was Co-founder, Promoter and Director of Indira IVF, contributing to the organisation\'s expansion across India. His responsibilities covered the complete development lifecycle of healthcare centres — from site identification, construction and licensing to vendor management, infrastructure execution, operational onboarding and post-launch operations.',
      'He is recognised for his resilience, discipline, measured optimism and hands-on approach to leadership, and believes that leadership is defined not by hierarchy but by responsibility — the willingness to stand with people through challenge, change and growth.',
    ],
    quote:
      'Every journey to parenthood is unique, and every patient deserves hope, honesty, and exceptional care. With over 15 years of experience in fertility treatment, our mission has always been to provide world-class IVF services while supporting couples with compassion at every step. At Wonder IVF, we don\'t just treat infertility — we help build families and create lifelong happiness.',
  },
  {
    slug: 'jasmeet-khatri',
    name: 'Mrs. Jasmeet Khatri',
    role: 'Director',
    image: '/images/leadership/mrs-jasmeet-khatri-ivf-specialist-india.webp',
    imageAlt: 'Mrs. Jasmeet Khatri, Director of Wonder IVF',
    bio: [
      'Mrs. Jasmeet Khatri is Director of Wonder IVF, where she is named among the founders of the centre.',
      'In June 2025 she launched Wonder IVF and Childcare Pvt. Ltd. together with her husband, Manish Khatri, with the organisation commencing operations with centres in Andheri and Kolhapur and a strategic roadmap for further expansion.',
    ],
    quote:
      'Every family begins with hope, and we are privileged to be a part of that journey. At Wonder IVF, we understand the emotions, challenges, and dreams that come with fertility treatment. Our promise is to provide not just advanced medical care, but also compassion, honesty, and support — because your journey matters as much to us as it does to you.',
  },
];

export const leadershipPage: StaticPage = {
  slug: 'leadership',
  path: '/leadership/',
  title: 'Leading with experience, caring with heart',
  lede: 'For us, fertility care has never been just about medical treatment — it\'s about standing beside people during one of the most emotional journeys of their lives.',
  metaTitle: 'Leadership | The Founders Behind Wonder IVF, Mumbai',
  metaDescription:
    'Meet Mr. Manish Khatri and Mrs. Jasmeet Khatri, the founders behind Wonder IVF, and discover how more than 15 years of experience in IVF and reproductive medicine shapes the centre\'s approach to fertility care.',
  blocks: [
    {
      type: 'prose',
      heading: 'More than a fertility centre',
      paragraphs: [
        'With over 15 years of experience in IVF and reproductive medicine, our founders have had the privilege of helping countless individuals and couples take their first steps toward parenthood. Every success story has reinforced one belief: every family begins with hope, and every patient deserves to be treated with empathy, honesty, and respect.',
        'At Wonder IVF, we\'ve created a place where patients feel heard, supported, and confident in their care. Behind every consultation is a dream, and behind every treatment plan is a family waiting to be complete.',
        'The greatest achievement isn\'t just a successful treatment — it\'s the moment we see hope turn into happiness.',
      ],
    },
    {
      type: 'cards',
      heading: 'The people behind the care',
      intro: 'Our founders',
      cards: [
        {
          title: 'Mr. Manish Khatri',
          text: 'Director. Every journey to parenthood is unique, and every patient deserves hope, honesty, and exceptional care. With over 15 years of experience in fertility treatment, our mission has always been to provide world-class IVF services while supporting couples with compassion at every step. At Wonder IVF, we don\'t just treat infertility — we help build families and create lifelong happiness.',
        },
        {
          title: 'Mrs. Jasmeet Khatri',
          text: 'Director. Every family begins with hope, and we are privileged to be a part of that journey. At Wonder IVF, we understand the emotions, challenges, and dreams that come with fertility treatment. Our promise is to provide not just advanced medical care, but also compassion, honesty, and support — because your journey matters as much to us as it does to you.',
        },
      ],
    },
  ],
};

export const founderPage: StaticPage = {
  slug: 'founder-and-director',
  path: '/founder-and-director/',
  title: 'Manish Khatri',
  lede: 'Founder & Director, Wonder IVF and Childcare Pvt. Ltd. — advancing healthcare through visionary leadership.',
  metaTitle:
    'Manish Khatri | Founder & Director | Visionary Healthcare Leader Advancing Medical Innovation',
  metaDescription:
    'Manish Khatri, Founder & Director of Wonder IVF and Childcare Pvt. Ltd., on his journey from mining and healthcare infrastructure to building a fertility institution founded on clinical excellence and ethical practice.',
  image: '/images/leadership/mr-manish-khatri-ivf-specialist-india.webp',
  imageAlt: 'Mr. Manish Khatri, Founder & Director of Wonder IVF',
  blocks: [
    {
      type: 'prose',
      paragraphs: [
        'Manish Khatri\'s professional journey is distinguished by a long-standing commitment to building enterprises with depth, discipline and enduring value. His career spans mining, real estate, infrastructure, manufacturing and healthcare — sectors in which he has consistently demonstrated strategic foresight, operational excellence and an ability to transform ambition into execution.',
      ],
    },
    {
      type: 'steps',
      heading: 'Career timeline',
      steps: [
        {
          title: '1998–2014 — Early Entrepreneurial Years',
          text: 'Manish began his entrepreneurial journey in the family mining business while completing his education. By the age of 22, he was independently managing large-scale operations and leading a workforce of more than 500 people. In 2006, he established his own entrepreneurial path, expanding into real estate and subsequently venturing into manufacturing. These formative years developed the foundations of his leadership philosophy — understanding business from the ground up, managing people at scale, taking ownership of difficult decisions and maintaining operational discipline while pursuing growth.',
        },
        {
          title: '2014–2019 — The Strategic Leap into Healthcare',
          text: 'Recognising the opportunity to create meaningful and lasting impact through healthcare, Manish made a strategic transition into the sector with an execution-led mindset. He became Co-founder, Promoter and Director of Indira IVF, contributing significantly to the organisation\'s expansion across India. His responsibilities extended across the complete development lifecycle of healthcare centres, including site identification and development, construction, licensing, vendor management, infrastructure execution and operational onboarding, followed by continued involvement in post-launch operations. His approach went beyond creating physical infrastructure: he focused on developing teams, establishing trust, strengthening operational systems and creating the culture required to deliver quality patient care at scale.',
        },
        {
          title: '2019–2022 — A Test of Resilience',
          text: 'The period between 2019 and 2022 represented one of the most challenging chapters of Manish\'s professional journey, involving a complex business dispute. He navigated the period with composure, discipline and perseverance, ultimately reaching an amicable settlement in 2022 and exiting the previous partnership. The experience strengthened his perspective on leadership, partnership, governance and long-term enterprise building, and reinforced his belief that setbacks can become foundations for a stronger future when approached with clarity and resilience.',
        },
        {
          title: '2022–2025 — When One Chapter Ends, Another Begins',
          text: 'During the subsequent three-year non-compete period, Manish remained active as an entrepreneur and investor. He expanded his real estate interests, established a quartz slab processing facility in Thailand and explored strategic investment opportunities across sectors. This phase demonstrated another defining characteristic of his entrepreneurial journey — adaptability. Rather than viewing transition as a pause, he used the period to broaden his experience, evaluate new opportunities and prepare for his next major venture.',
        },
        {
          title: '2025–Present — The Next Chapter: Wonder IVF',
          text: 'In June 2025, Manish launched Wonder IVF and Childcare Pvt. Ltd. together with his wife and Joint Director, Jasmeet Khatri. The organisation commenced operations with centres in Andheri and Kolhapur, with a strategic roadmap for further expansion. Wonder IVF represents the convergence of Manish\'s decades of entrepreneurial and operational experience with his deep understanding of healthcare infrastructure, centre development and scalable healthcare operations. His vision is to build a healthcare institution where clinical excellence, patient experience, operational discipline and ethical business practices grow together.',
        },
      ],
    },
    {
      type: 'prose',
      heading: 'Leadership & values',
      paragraphs: [
        'Manish is recognised for his resilience, discipline, measured optimism and hands-on approach to leadership.',
        'He is a practical problem-solver who believes that sustainable businesses are built through trust, accountability and strong relationships. He values trust, loyalty, dignity and responsibility, while maintaining a leadership style that is grounded and accessible.',
        'For Manish, leadership is not defined by hierarchy. It is defined by responsibility — the willingness to stand with people through challenge, change and growth.',
      ],
    },
    {
      type: 'prose',
      heading: 'Building a legacy',
      paragraphs: [
        'From becoming an entrepreneur at a young age in the mining sector to building and scaling enterprises across multiple industries, Manish Khatri\'s journey reflects a consistent combination of vision, courage, resilience and execution.',
        'Today, as Founder & Director of Wonder IVF and Childcare Pvt. Ltd., he is focused on building more than a healthcare business. He is building an institution — one designed to combine clinical excellence with compassionate care, operational strength with human values, and growth with lasting purpose. His journey continues with a clear objective: to create a healthcare organisation capable of making a meaningful difference in the lives of patients and families while building enduring value for generations to come.',
      ],
    },
    {
      type: 'list',
      items: ['Vision', 'Courage', 'Resilience', 'Execution'],
    },
  ],
};

export const visionPage: StaticPage = {
  slug: 'vision-and-mission',
  path: '/vision-and-mission/',
  title: 'Vision & Mission',
  lede: 'Our vision and mission at Wonder IVF are centred around transforming fertility care into a journey of hope, trust, and successful outcomes.',
  metaTitle: 'Wonder IVF Mission and Vision | Trusted IVF Centre in Mumbai, India',
  metaDescription:
    'Discover the vision and mission behind Wonder IVF — advanced reproductive science, ethical practice and compassionate support, with fertility care that is accessible, transparent and personalised.',
  image: '/images/treatments/fertility-consultation-mumbai-maharashtra.webp',
  imageAlt: 'Fertility consultation with specialists at Wonder IVF Maharashtra',
  blocks: [
    {
      type: 'prose',
      paragraphs: [
        'Our vision and mission at Wonder IVF are centred around transforming fertility care into a journey of hope, trust, and successful outcomes. We aim to create a supportive system where advanced reproductive science meets genuine human care, helping individuals and couples move from uncertainty to parenthood with confidence. As a growing name among trusted IVF centers in India, we are committed to redefining the fertility experience.',
      ],
    },
    {
      type: 'prose',
      heading: 'Beyond treatment',
      paragraphs: [
        'Our goal is to build a trusted fertility centre that goes beyond treatments — focusing on emotional well-being, ethical practices, and long-term patient relationships with meaningful results. We are here to make fertility care accessible, transparent, and personalised, ensuring that every patient feels informed, respected, and supported at every stage of their IVF treatment journey.',
        'Through a combination of medical expertise, modern technology, and compassionate guidance, Wonder IVF is committed to delivering reliable results while maintaining the highest standards of integrity and care.',
      ],
    },
    {
      type: 'prose',
      heading: 'Our Vision',
      paragraphs: [
        'To become a trusted leader in fertility care and among leading IVF centers in India, by empowering individuals and couples to achieve their dream of parenthood through advanced reproductive solutions, ethical practices, and compassionate support.',
        'We envision a future where infertility is no longer a barrier, and every aspiring parent has access to safe, effective, and affordable fertility treatments.',
      ],
    },
    {
      type: 'list',
      heading: 'Our Mission',
      intro:
        'At Wonder IVF, our mission is to deliver patient-centered fertility care that combines medical excellence with emotional understanding — setting new standards in IVF care in India.',
      items: [
        'To provide advanced and evidence-based fertility treatments using the latest technology',
        'To offer personalized care tailored to each patient\'s unique journey',
        'To maintain transparency, ethics, and trust in every interaction',
        'To create a supportive environment that respects the emotional and physical aspects of fertility treatment',
        'To make high-quality fertility care accessible and affordable',
      ],
    },
  ],
};
