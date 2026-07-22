export interface Plan {
  id: string;
  name: string;
  speed: string;
  uploadSpeed: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  speedAchieved: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CoverageZone {
  id: string;
  name: string;
  status: 'Ready' | 'Expanding' | 'Upcoming';
  zipCodes: string[];
  x: number; // % coordinates on map
  y: number;
  speedAvailable: string;
}
