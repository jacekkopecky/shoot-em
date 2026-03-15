import { CURRENCIES, type CurrencyType } from './types';

export type ReadonlyWallet = Pick<Wallet, 'read' | 'readAll'>;

export class Wallet {
  private wallet: Partial<Record<CurrencyType, number>> = {};

  constructor(jsonData?: unknown) {
    if (jsonData) {
      if (
        typeof jsonData !== 'object' ||
        !('wallet' in jsonData) ||
        !jsonData.wallet ||
        typeof jsonData.wallet !== 'object'
      ) {
        throw new TypeError('unknown wallet data', jsonData);
      }

      const walletData = jsonData.wallet as Record<string, unknown>;

      for (const currency of CURRENCIES) {
        const value = walletData[currency];
        if (typeof value === 'number') {
          this.wallet[currency] = value;
        } else if (value) {
          throw new TypeError(`wallet value for type ${currency} is not a number`, value);
        }
      }
    }
  }

  add = (type: CurrencyType, amount: number) => {
    this.wallet[type] = (this.wallet[type] ?? 0) + amount;
  };

  read = (type: CurrencyType): number => {
    return this.wallet[type] ?? 0;
  };

  reset = () => {
    this.wallet = {};
  };

  readAll = (): Readonly<typeof this.wallet> => {
    return this.wallet;
  };

  addAll = (otherWallet: Wallet) => {
    const other = otherWallet.readAll();
    for (const [type, amount] of Object.entries(other)) {
      this.add(type as CurrencyType, amount);
    }
  };
}
