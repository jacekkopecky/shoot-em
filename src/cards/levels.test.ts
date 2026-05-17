import { describe, it, expect } from 'vitest';

import type { Wallet, CardType } from '#types';

import { _test, getCardLevel, getCardsToLevel, lookupLevelByNumberOfCards } from './levels';

describe('getCardsToLevel', () => {
  it('should work', () => {
    expect(getCardsToLevel(5)).toEqual(11);
    expect(_test.cardsToLevel.slice(0, 6)).toEqual([0, 1, 3, 5, 8, 11]);
  });
});

describe('lookupLevelByNumberOfCards', () => {
  it('should work', () => {
    expect(lookupLevelByNumberOfCards(100)).toBe(22);
    expect(_test.cardsToLevel.slice(0, 24)).toEqual([
      0, 1, 3, 5, 8, 11, 14, 18, 22, 26, 30, 35, 40, 45, 50, 55, 61, 67, 73, 79, 85, 91, 98, 105,
    ]);
  });
});

describe('getCardLevel', () => {
  it('should work', () => {
    expect(getCardLevel('_test', mockWallet(10), undefined)).toEqual({
      level: 4,
      nextLevelCards: 3,
      nextLevelCardsHave: 2,
    });

    expect(getCardLevel('_test', mockWallet(11), undefined)).toEqual({
      level: 5,
      nextLevelCards: 3,
      nextLevelCardsHave: 0,
    });

    expect(getCardLevel('_test', mockWallet(12), undefined)).toEqual({
      level: 5,
      nextLevelCards: 3,
      nextLevelCardsHave: 1,
    });
  });

  it("should clamp at _test card's limit of 40 cards (level 12)", () => {
    expect(getCardLevel('_test', mockWallet(39), 40)).toEqual({
      level: 11,
      nextLevelCards: 5,
      nextLevelCardsHave: 4,
    });

    expect(getCardLevel('_test', mockWallet(40), 40)).toEqual({
      level: 12,
      nextLevelCards: 0,
      nextLevelCardsHave: 0,
    });

    expect(getCardLevel('_test', mockWallet(41), 40)).toEqual({
      level: 12,
      nextLevelCards: 0,
      nextLevelCardsHave: 0,
    });

    expect(getCardLevel('_test', mockWallet(100), 40)).toEqual({
      level: 22,
      nextLevelCards: 0,
      nextLevelCardsHave: 0,
    });

    expect(getCardLevel('_test', mockWallet(101), 40)).toEqual({
      level: 22,
      nextLevelCards: 0,
      nextLevelCardsHave: 0,
    });
  });
});

function mockWallet(n: number) {
  return {
    read: () => n,
  } as unknown as Wallet<CardType>;
}
