export enum Language {
  PL = 'pl',
  EN = 'en'
}

export enum Currency {
  PLN = 'PLN',
  EUR = 'EUR'
}

export enum ICON {
  UP = 'fa-angle-up',
  DOWN = 'fa-angle-down'
}

export interface Reservation {
  id: number;
  number: string;
}

export interface LostLuggage {
  id: number;
  number: number;
  images: string[];
  delivery_price: Money;
  date_end_auction: string;
  actual_price: Money;
  buy_now_price: Money;
  description: string;
  additional_info: string;
  delivery_term: string;
}

export interface RecommendedItems {
  id: number;
  image: string;
  title: string;
  description: string;
  price: Money;
}

export interface Money {
  PLN: number;
  EUR: number;
}


