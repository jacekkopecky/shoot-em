import type { CardType, Wallet } from '#types';

// cache the cards-for-a-level computations
const cardsToLevel: number[] = [0];
let nextValue = generateCardsToLevel();

function* generateCardsToLevel() {
  let upToNow = 0;
  let n = 1;
  while (true) {
    for (let i = 0; i < n; i++) {
      upToNow += n;
      yield upToNow;
    }
    n += 1;
  }
}

export function getCardsToLevel(level: number): number {
  // make sure there are enough numbers in the array
  while (level >= cardsToLevel.length) {
    cardsToLevel.push(nextValue.next().value!);
  }

  return cardsToLevel[level]!;
}

export function getCardsToLevelAndNext(level: number): [number, number] {
  const toNext = getCardsToLevel(level + 1);
  return [cardsToLevel[level]!, toNext];
}

export function lookupLevelByNumberOfCards(n: number): number {
  while (cardsToLevel.at(-1)! < n) {
    cardsToLevel.push(nextValue.next().value!);
  }

  return cardsToLevel.findLastIndex((cards) => cards <= n);
}

export const _test = {
  cardsToLevel,
};

export function getCardLevel(
  type: CardType,
  wallet: Wallet<CardType>,
  cardsToGive: number | undefined,
): {
  level: number;
  nextLevelCards: number;
  nextLevelCardsHave: number | undefined;
} {
  const amount = wallet.read(type);
  if (!amount) {
    return {
      level: 0,
      nextLevelCards: 1,
      nextLevelCardsHave: 1,
    };
  }

  const level = lookupLevelByNumberOfCards(amount);

  if (cardsToGive && amount >= cardsToGive) {
    return {
      level,
      nextLevelCards: 0,
      nextLevelCardsHave: 0,
    };
  }

  const [cardsToCurrentLevel, cardsToNextLevel] = getCardsToLevelAndNext(level);

  return {
    level,
    nextLevelCards: cardsToNextLevel - cardsToCurrentLevel,
    nextLevelCardsHave: amount - cardsToCurrentLevel,
  };
}
