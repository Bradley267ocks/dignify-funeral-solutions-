export interface PolicyPricing {
  ageRange: '18-64' | '65-74' | '75-84';
  individual: number;
  memberAndChildren: number;
  memberAndSpouse: number;
  family: number;
  memberPlus5: number;
  memberPlus7: number;
  memberPlus9: number;
}

export interface FuneralPlan {
  id: string;
  name: string;
  coverAmount: number;
  description: string;
  pricing: PolicyPricing[];
}

export interface Testimonial {
  id: string;
  name: string;
  relationship: string;
  text: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteRequestInput {
  fullName: string;
  email: string;
  phone: string;
  selectedPlan: string;
  selectedAgeRange: string;
  selectedCategory: string;
  additionalNotes: string;
}

export interface PolicyImage {
  title: string;
  url: string;
}
