export type ReadonlyWallet<T extends string> = Pick<Wallet<T>, 'read' | 'readAll' | 'entries'>;

export class Wallet<T extends string = string> {
  private wallet: Partial<Record<T, number>> = {};

  constructor(currencies: readonly T[], jsonData?: unknown) {
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

      for (const currency of currencies) {
        const value = walletData[currency];
        if (typeof value === 'number') {
          this.wallet[currency] = value;
        } else if (value) {
          throw new TypeError(`wallet value for type ${currency} is not a number`, value);
        }
      }
    }
  }

  add = (type: T, amount: number) => {
    this.wallet[type] = (this.wallet[type] ?? 0) + amount;
  };

  read = (type: T): number => {
    return this.wallet[type] ?? 0;
  };

  reset = () => {
    this.wallet = {};
  };

  readAll = (): Readonly<typeof this.wallet> => {
    return this.wallet;
  };

  entries = (): [T, number][] => {
    return Object.entries(this.wallet) as [T, number][];
  };

  addAll = (otherWallet: Wallet<T>) => {
    const other = otherWallet.readAll();
    for (const [type, amount] of Object.entries(other)) {
      this.add(type as T, amount as number);
    }
  };
}
