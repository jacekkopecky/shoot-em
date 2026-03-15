export function formatNumber(n: number): string {
  switch (true) {
    case n >= 100000: {
      // 100k, 101k…
      return `${Math.floor(n / 1000)}k`;
    }
    case n >= 10000: {
      // 10k, 10.1k… 99.9k
      // remove .0
      const fixed = (Math.floor(n / 100) / 10).toFixed(1);
      return `${fixed.replace('.0', '')}k`;
    }
    case n >= 10: {
      // 10…9999
      return String(Math.round(n));
    }
    default: {
      // 0…9.9
      const fixed = n.toFixed(1);
      return fixed.replace('.0', '');
    }
  }
}

// for (const x of [
//   0, 1.5, 7, 9.9, 9.99, 10, 10.2, 999, 1234, 9999, 10000, 10001, 10099, 10100, 23456, 98999, 99000,
//   99900, 99990, 99999, 100000, 100001, 100010, 100100, 100900, 100999, 101000,
// ]) {
//   console.log(String(x).padStart(10, ' '), formatCurrencyNumber(x));
// }
