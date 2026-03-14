import type { CurrencyType } from './types';

export class Wallet {
  private wallet: Partial<Record<CurrencyType, number>> = {};

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
