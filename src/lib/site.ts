import { siteUrl } from './urls';

export const site = {
  name: 'Wonder IVF',
  legalName: 'Wonder IVF and Childcare Private Limited',
  tagline: 'Advanced Fertility Care with a Human Touch',
  url: siteUrl,
  description:
    'Wonder IVF is an advanced fertility and IVF care provider in India, offering personalised fertility treatment, diagnostics, assisted reproduction and fertility preservation across Mumbai and Kolhapur.',
  phone: '+91-70734-31122',
  phoneHref: '+917073431122',
  email: 'info@wonderivf.com',
  grievanceEmail: 'grievance@wonderivf.com',
  whatsapp: 'https://api.whatsapp.com/send?phone=+917073431122',
  experience: '15+',
  copyright: 'Copyright © Wonder IVF. All rights reserved.',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/WonderIVFIndia/' },
    { label: 'Instagram', href: 'https://www.instagram.com/wonder.ivf/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/wonderivf/' },
  ],
} as const;

export const locations = [
  {
    slug: 'andheri',
    name: 'Mumbai — Andheri West',
    short: 'Andheri Centre',
    legalName: 'Wonder IVF and Childcare Private Limited',
    address: [
      'Unit 203-205, 2nd Floor, Lotus Link Square',
      'DN Nagar Link Road, Andheri West',
      'Mumbai, Maharashtra 400053',
    ],
    phone: '+91-9216073621',
    phoneHref: '+919216073621',
    mapUrl: 'https://maps.app.goo.gl/Tc3TpiRj6pxmVkRTA',
    path: '/ivf-centre-in-andheri/',
    image: '/images/facility/wonder-ivf-mumbai.webp',
    imageAlt: 'Wonder IVF fertility centre in Andheri West, Mumbai',
  },
  {
    slug: 'kolhapur',
    name: 'Kolhapur',
    short: 'Kolhapur Centre',
    legalName: 'Wonder IVF and Childcare Private Limited',
    address: [
      'Office No. 503, 505–508, Royal 09',
      'Tourist Hub Station Road',
      'Kolhapur, Maharashtra 416001',
    ],
    phone: '+91-8208710244',
    phoneHref: '+918208710244',
    mapUrl: 'https://maps.app.goo.gl/U9qZabY5KXmKo9Mw6',
    path: '/ivf-centre-in-kolhapur/',
    image: '/images/facility/ivf-hospital-in-mumbai.webp',
    imageAlt: 'Wonder IVF fertility centre in Kolhapur, Maharashtra',
  },
  {
    slug: 'corporate',
    name: 'Corporate Office',
    short: 'Udaipur',
    legalName: 'Wonder IVF and Childcare Private Limited',
    address: ['Plot No. 1, C Block, Meera Nagar', 'Udaipur, Rajasthan 313001'],
    phone: '+91-7073431122',
    phoneHref: '+917073431122',
    path: '/locations/',
  },
] as const;

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about-us/',
    children: [
      { label: 'About Us', href: '/about-us/' },
      { label: 'Vision & Mission', href: '/vision-and-mission/' },
      { label: 'Leadership', href: '/leadership/' },
      { label: 'Our Doctors', href: '/our-doctors/' },
      { label: 'Partner With Us', href: '/partner-with-us/' },
    ],
  },
  {
    label: 'Treatments',
    href: '/treatments/',
    children: [
      { label: 'All Treatments', href: '/treatments/' },
      { label: 'In Vitro Fertilization (IVF)', href: '/in-vitro-fertilization-ivf/' },
      { label: 'ICSI Treatment', href: '/icsi-treatment/' },
      { label: 'Intrauterine Insemination (IUI)', href: '/intrauterine-insemination-iui/' },
      { label: 'Ovulation Induction', href: '/ovulation-induction/' },
      { label: 'Frozen Embryo Transfer', href: '/frozen-embryo-transfer/' },
      { label: 'Preimplantation Genetic Testing', href: '/preimplantation-genetic-testing/' },
      { label: 'TESA / TESE', href: '/tesa-and-tese/' },
      { label: 'Laser Assisted Hatching', href: '/laser-assisted-hatching/' },
      { label: 'Microfluidic Sperm Sorting', href: '/microfluidic-sperm-sorting/' },
      { label: 'Embryo Freezing', href: '/embryo-freezing/' },
      { label: 'Egg Freezing', href: '/egg-freezing/' },
      { label: 'Donor IVF', href: '/donor-ivf/' },
      { label: 'Donor IUI', href: '/donor-iui/' },
      { label: 'Genetic Counselling', href: '/genetic-counselling-in-ivf/' },
    ],
  },
  {
    label: 'Infertility',
    href: '/infertility-problems/',
    children: [
      { label: 'Understanding Infertility', href: '/infertility-problems/' },
      { label: 'Male Factor Infertility', href: '/male-factor-infertility/' },
      { label: 'Female Factor Infertility', href: '/female-factor-infertility/' },
      { label: 'Unexplained Infertility', href: '/unexplained-infertility/' },
      { label: 'Low Ovarian Reserve', href: '/low-ovarian-reserve/' },
      { label: 'PCOS / PCOD', href: '/pcos-pmos/' },
      { label: 'Endometriosis', href: '/endometriosis/' },
      { label: 'Adenomyosis', href: '/adenomyosis/' },
      { label: 'Blocked Fallopian Tubes', href: '/blocked-fallopian-tubes/' },
      { label: 'Uterine Fibroids', href: '/uterine-fibroids/' },
      { label: 'Premature Ovarian Failure', href: '/premature-ovarian-failure/' },
      { label: 'Recurrent IVF Failure', href: '/recurrent-ivf-failure/' },
    ],
  },
  {
    label: 'Diagnostics',
    href: '/diagnosis/',
    children: [
      { label: 'Fertility Diagnosis', href: '/diagnosis/' },
      { label: 'Ultrasound & Sonography', href: '/ultrasound-sonography/' },
      { label: 'Hysteroscopy', href: '/hysteroscopy-in-fertility-treatment/' },
      { label: 'Laparoscopy', href: '/laparoscopy-in-fertility-treatment/' },
      { label: 'Hormonal Screening', href: '/hormonal-screening-in-fertility-care/' },
    ],
  },
  { label: 'Doctors', href: '/our-doctors/' },
  { label: 'Locations', href: '/locations/' },
  { label: 'Technology', href: '/technology-and-infrastructure/' },
  { label: 'Blog', href: '/blog/' },
] as const;

export const footerLinks = [
  {
    title: 'Wonder IVF',
    links: [
      { label: 'About Us', href: '/about-us/' },
      { label: 'Vision & Mission', href: '/vision-and-mission/' },
      { label: 'Leadership', href: '/leadership/' },
      { label: 'Our Doctors', href: '/our-doctors/' },
      { label: 'Technology & Infrastructure', href: '/technology-and-infrastructure/' },
      { label: 'Partner With Us', href: '/partner-with-us/' },
      { label: 'Patient Support', href: '/patient-support-services/' },
    ],
  },
  {
    title: 'Care',
    links: [
      { label: 'All Treatments', href: '/treatments/' },
      { label: 'IVF', href: '/in-vitro-fertilization-ivf/' },
      { label: 'ICSI', href: '/icsi-treatment/' },
      { label: 'IUI', href: '/intrauterine-insemination-iui/' },
      { label: 'Fertility Diagnosis', href: '/diagnosis/' },
      { label: 'Understanding Infertility', href: '/infertility-problems/' },
      { label: 'FAQs', href: '/faqs/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Locations', href: '/locations/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Contact Us', href: '/contact-us/' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms & Conditions', href: '/terms-conditions/' },
      { label: 'Disclaimer', href: '/disclaimer/' },
    ],
  },
] as const;

export const treatmentCategories = [
  { key: 'fertility-treatments', label: 'Fertility Treatments' },
  { key: 'diagnostics', label: 'Diagnostics' },
  { key: 'fertility-preservation', label: 'Fertility Preservation' },
  { key: 'male-fertility', label: 'Male Fertility' },
  { key: 'advanced-ivf', label: 'Advanced IVF' },
] as const;
