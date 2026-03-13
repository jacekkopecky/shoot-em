import type { Currency, CurrencyType } from './types.js';

export class Wallet {
  private wallet: Partial<Record<CurrencyType, number>> = {};

  add(what: Currency) {
    this.wallet[what.type] = (this.wallet[what.type] ?? 0) + what.amount;
  }

  read(type: CurrencyType): number {
    return this.wallet[type] ?? 0;
  }

  reset() {
    this.wallet = {};
  }

  readAll(): Readonly<typeof this.wallet> {
    return this.wallet;
  }

  addAll(otherWallet: Wallet) {
    const other = otherWallet.readAll();
    for (const [type, amount] of Object.entries(other)) {
      this.add({ type: type as CurrencyType, amount });
    }
  }
}
