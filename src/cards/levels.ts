import type { CardType, Wallet } from '#types';

// cache the cards-for-a-level computations
const cardsToLevel: number[] = [0];
const cardLevels: number[] = [0];
let nextLevelCards = generateCardsForLevel();

function* generateCardsForLevel() {
  let n = 1;
  while (true) {
    for (let i = 0; i < n; i++) {
      yield n;
    }
    n += 1;
  }
}

function addLevel() {
  const levelCards = nextLevelCards.next().value!;
  cardsToLevel.push(cardsToLevel.at(-1)! + levelCards);
  const lastLevel = cardLevels.at(-1)!;
  for (let i = 0; i < levelCards - 1; i += 1) {
    cardLevels.push(lastLevel);
  }
  cardLevels.push(lastLevel + 1);
}

export function getCardsToLevel(level: number): number {
  // make sure there are enough numbers in the array
  while (level >= cardsToLevel.length) {
    addLevel();
  }

  return cardsToLevel[level]!;
}

export function getCardsToLevelAndNext(level: number): [number, number] {
  const toNext = getCardsToLevel(level + 1);
  return [cardsToLevel[level]!, toNext];
}

export function lookupLevelByNumberOfCards(n: number): number {
  while (cardLevels.length < n + 1) {
    addLevel();
  }

  return cardLevels[n]!;
}

export const _test = {
  cardsToLevel,
  cardLevels,
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
