import seedrandom from 'seedrandom';

import { range } from './arrays';

const defaultSeed = '2';

export function createRandom(seed = defaultSeed) {
  return seedrandom(seed);
}

export // intentionally on its line for ease of commenting out
let random: () => number = seedrandom(defaultSeed);

export function resetRandom(seed = defaultSeed) {
  random = createRandom(seed);
  // randomCount = 0;
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

export function randomItem<T>(arr: readonly T[], prng = random): T {
  if (arr.length === 0) {
    throw new Error('cannot pick a random item from an empty array');
  }

  return arr[Math.floor(prng() * arr.length)]!;
}

export function removeRandomItem<T>(arr: T[], prng = random): T {
  if (arr.length === 0) {
    throw new Error('cannot remove a random item from an empty array');
  }

  const i = Math.floor(prng() * arr.length);
  const item = arr[i]!;
  arr.splice(i, 1);
  return item;
}

export function randomItemInRange<T>(
  arr: readonly T[],
  min: number,
  max: number,
  prng = random,
): T {
  if (arr.length < max || max < min || min < 0) {
    throw new Error(`bad parameters: min ${min}, max ${max}, length ${arr.length}`);
  }
  console.log(`parameters: min ${min}, max ${max}, length ${arr.length}`);

  return arr[Math.floor(prng() * (max - min + 1)) + min]!;
}

export function spacedRandomItems<T>(arr: readonly T[], n: number, prng = random): T[] {
  if (arr.length <= n) return [...arr];

  const len = arr.length;
  return range(n)
    .map((i) =>
      randomItemInRange(arr, Math.floor((len * i) / n), Math.floor((len * (i + 1)) / n) - 1, prng),
    )
    .toArray();
}

export function spacedRandomIndexes(arr: readonly unknown[], n: number, prng = random): number[] {
  if (arr.length <= n) return range(arr.length).toArray();

  const len = arr.length;
  return range(n)
    .map((i) => {
      const min = Math.floor((len * i) / n);
      const max = Math.floor((len * (i + 1)) / n) - 1;
      return Math.floor(prng() * (max - min + 1)) + min;
    })
    .toArray();
}

export function randomXNotTooClose(
  minX: number,
  maxX: number,
  lastX: number,
  yDist: number,
  minDist: number,
): number {
  const minXDist = Math.sqrt(Math.max(0, minDist ** 2 - yDist ** 2));
  const width = maxX - minX;
  const availableLeft = Math.min(width, Math.max(0, lastX - minX - minXDist));
  const availableRight = Math.min(width, Math.max(0, maxX - lastX - minXDist));
  const available = availableLeft + availableRight;

  const posWithinAvailable = random() * available;
  if (posWithinAvailable <= availableLeft) {
    return posWithinAvailable + minX;
  } else {
    return maxX - (available - posWithinAvailable);
  }
}

// {
//   const treeWidth = 40;
//   let lastX = Infinity;
//   const dist = treeWidth / 3;
//   const N = 50000;
//   for (let i = 0; i <= N; i++) {
//     const x = randomXNotTooClose(0, 100, lastX, dist, treeWidth);
//     // const x = random() * usableWidth - usableWidth / 2;
//     lastX = x;
//     console.log(x);
//   }
// }

export function pickWeightedItem<T extends string>(
  items: readonly T[],
  weightMap: Record<T, number>,
  prng = random,
): T {
  if (items.length < 1) {
    throw new Error('cannot pick an item from an empty array');
  }

  if (items.length === 1) {
    return items[0]!;
  }

  const sum = items
    .values()
    .map((item) => weightMap[item])
    .reduce((a, b) => a + b);
  const x = prng() * sum;
  let soFar = 0;
  for (const item of items) {
    soFar += weightMap[item];
    if (x < soFar) return item;
  }
  return items.at(-1)!;
}
