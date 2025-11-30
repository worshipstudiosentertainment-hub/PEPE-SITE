export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface MethodStep {
  number: number;
  title: string;
  description: string;
}

export interface GeminiResponse {
  insight: string;
}