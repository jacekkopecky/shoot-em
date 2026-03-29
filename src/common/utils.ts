import seedrandom from 'seedrandom';
import * as THREE from 'three';

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

export function fillOrHide(
  el: Element,
  value: number,
  formatFn: (v: any) => string = formatNumber,
) {
  el.querySelector('.value')!.textContent = typeof value === 'string' ? value : formatFn(value);
  el.classList.toggle('hidden', !value);
}

export function randomItem<T>(arr: readonly T[]): T {
  if (arr.length === 0) {
    throw new Error('cannot pick a random item from an empty array');
  }

  return arr[Math.floor(random() * arr.length)]!;
}

export function* range(n: number) {
  for (let i = 0; i < n; i += 1) {
    yield i;
  }
}

const defaultSeed = '0';

export // intentionally on its line for ease of commenting out
let random = seedrandom(defaultSeed);

export function resetRandom(seed = defaultSeed) {
  random = seedrandom(seed);
  // randomCount += 1;
}

// let randomCount = 0;
// function rnd() {
//   randomCount += 1;
//   return random();
// }
// export function getRandomCount() {
//   return randomCount;
// }
// export { rnd as random };

export function getByName<T extends THREE.Object3D>(objects: T[], name: string) {
  const retval = objects.find((obj) => obj.name === name);
  if (!retval) {
    throw new Error(`cannot find object with name "${name}"`);
  }
  return retval;
}

export function indexByName<T extends THREE.Object3D>(objects: T[], name: string) {
  const retval = objects.findIndex((obj) => obj.name === name);
  if (retval < 0) {
    throw new Error(`cannot find object with name "${name}"`);
  }
  return retval;
}
