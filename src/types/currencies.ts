export const CURRENCIES = ['coin', 'gem'] as const;
export type CurrencyType = (typeof CURRENCIES)[number];

export interface Currency {
  type: CurrencyType;
  amount: number;
}
