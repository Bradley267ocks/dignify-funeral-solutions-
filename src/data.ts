import { FuneralPlan, Testimonial, FAQItem, PolicyImage } from './types';

// New generated family-oriented imagery paths
export const FAMILY_HERO_IMAGE = 'https://i.ibb.co/YThqWMYt/1781192929013.png';
export const CONSULTANT_IMAGE = 'https://i.ibb.co/JwgLsQ70/1781192926324.png';
export const PEACE_OF_MIND_IMAGE = '/src/assets/images/peace_of_mind_finance_1781191599095.jpg';

export const LOGO_PATH = 'https://i.ibb.co/JwtHchSN/1000487361-removebg-preview-logo.png';

export const POLICY_PRICING_IMAGES: PolicyImage[] = [
  {
    title: 'Member Price List',
    url: 'https://i.ibb.co/xqmGrBp1/IMG-20260611-WA0006-member-price-list.jpg'
  },
  {
    title: 'Members & Spouse',
    url: 'https://i.ibb.co/0VCd86sz/IMG-20260611-WA0001-members-and-spouse-price-list.jpg'
  },
  {
    title: 'Members + 5',
    url: 'https://i.ibb.co/DfcJnffN/IMG-20260611-WA0005-members-5-price-list.jpg'
  },
  {
    title: 'Members + 5/7',
    url: 'https://i.ibb.co/qF58BRdf/IMG-20260611-WA0004-members-5-7.jpg'
  },
  {
    title: 'M+5 Extended family',
    url: 'https://i.ibb.co/v6kFMF2f/IMG-20260611-WA0003-m-5-extended-family-price-list.jpg'
  },
  {
    title: 'Members and +9 Extended Family',
    url: 'https://i.ibb.co/pvf8LFww/IMG-20260611-WA0002-members-and-9-extended-family-price-list.jpg'
  }
];

export const FUNERAL_PLANS: FuneralPlan[] = [
  {
    id: 'after-tears',
    name: 'After Tears Plan',
    coverAmount: 10000,
    description: 'Essential support designed to handle the critical costs during the mourning period, ensuring your family can grieve with dignity.',
    pricing: [
      {
        ageRange: '18-64',
        individual: 114,
        memberAndChildren: 126,
        memberAndSpouse: 171,
        family: 198,
        memberPlus5: 394,
        memberPlus7: 438,
        memberPlus9: 487
      },
      {
        ageRange: '65-74',
        individual: 158,
        memberAndChildren: 289,
        memberAndSpouse: 529,
        family: 223,
        memberPlus5: 462,
        memberPlus7: 514,
        memberPlus9: 573
      },
      {
        ageRange: '75-84',
        individual: 171,
        memberAndChildren: 459,
        memberAndSpouse: 909,
        family: 242,
        memberPlus5: 514,
        memberPlus7: 573,
        memberPlus9: 639
      }
    ]
  },
  {
    id: 'grocery-plan',
    name: 'Grocery Plan',
    coverAmount: 10000,
    description: 'Provides immediate financial relief for household necessities and catering requirements during the funeral arrangement phase.',
    pricing: [
      {
        ageRange: '18-64',
        individual: 114,
        memberAndChildren: 126,
        memberAndSpouse: 171,
        family: 198,
        memberPlus5: 394,
        memberPlus7: 438,
        memberPlus9: 487
      },
      {
        ageRange: '65-74',
        individual: 158,
        memberAndChildren: 289,
        memberAndSpouse: 529,
        family: 223,
        memberPlus5: 462,
        memberPlus7: 514,
        memberPlus9: 573
      },
      {
        ageRange: '75-84',
        individual: 171,
        memberAndChildren: 459,
        memberAndSpouse: 909,
        family: 242,
        memberPlus5: 514,
        memberPlus7: 573,
        memberPlus9: 639
      }
    ]
  },
  {
    id: 'inkomo-plan',
    name: 'Inkomo Plan',
    coverAmount: 20000,
    description: 'Our most comprehensive premium plan, offering higher cover amounts to assist with traditional livestock and major funeral expenses.',
    pricing: [
      {
        ageRange: '18-64',
        individual: 157,
        memberAndChildren: 185,
        memberAndSpouse: 251,
        family: 291,
        memberPlus5: 577,
        memberPlus7: 643,
        memberPlus9: 703
      },
      {
        ageRange: '65-74',
        individual: 221,
        memberAndChildren: 441,
        memberAndSpouse: 788,
        family: 322,
        memberPlus5: 718,
        memberPlus7: 760,
        memberPlus9: 849
      },
      {
        ageRange: '75-84',
        individual: 240,
        memberAndChildren: 683,
        memberAndSpouse: 1358,
        family: 350,
        memberPlus5: 760,
        memberPlus7: 849,
        memberPlus9: 948
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Nomalanga Sibanda',
    relationship: 'Individual Policy Holder',
    text: 'Dignify Funeral Solutions has given me such peace of mind. Knowing my family is protected with their affordable monthly premiums takes a huge weight off my shoulders. The claims process is as fast and reliable as they promise.',
    rating: 5,
    date: 'April 2026'
  },
  {
    id: 't-2',
    name: 'Bradley van Wyk',
    relationship: 'Family Plan Member',
    text: 'We recently had to claim for our elderly father, and the support we received was exceptional. They handled the paperwork quickly, and the payout was made without any delays. I highly recommend their Inkomo Plan for full family protection.',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 't-3',
    name: 'Zolani Mtirara',
    relationship: 'Community Leader',
    text: 'In our community, trust is everything. Dignify has proven themselves as a reliable partner for many families here. Their consultants are compassionate and really take the time to explain the different waiting periods and benefits.',
    rating: 5,
    date: 'May 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do funeral policies work?',
    answer: 'A funeral policy provides a lump-sum payout upon the death of a covered member. You pay a small monthly premium, and in exchange, the insurer guarantees financial support for funeral costs, helping your family avoid debt during a difficult time.'
  },
  {
    id: 'faq-2',
    question: 'How does the claims process work?',
    answer: 'Claims are processed within 24 to 48 hours once all required documentation (such as a certified death certificate and BI-1663 form) is submitted. Our team assists you throughout the submission to ensure speed and accuracy.'
  },
  {
    id: 'faq-3',
    question: 'Are there waiting periods for new policies?',
    answer: 'Yes, most plans have a standard 6-month waiting period for death due to natural causes. However, accidental death is covered immediately after the first premium is paid. Please check your specific plan details for full info.'
  },
  {
    id: 'faq-4',
    question: 'Can I cover my extended family on one plan?',
    answer: 'Absolutely. We offer Member +5, +7, and even +9 options specifically designed to include extended family members under a single, affordable monthly payment.'
  },
  {
    id: 'faq-5',
    question: 'What are the child benefits?',
    answer: 'Child cover is tiered: Stillborn to 5 months (25% of cover), 6 months to 5 years (50%), 6 to 13 years (50%), and 14 to 21 years (100% of cover).'
  },
  {
    id: 'faq-6',
    question: 'Where are you located?',
    answer: 'Our main office is in Queenstown, South Africa, but we serve families across the Eastern Cape with professional and compassionate support.'
  }
];
