import type { ReadonlyState } from '#types';
import { formatNumber } from '#utils';

import * as dim from '#dimensions';

import { showSection } from '../sections';
import { getUpgradablePermanentParameters, isFeatureAllowed, readState } from '../state';

const el = {
  goToCardsSectionButton: document.querySelector('#mainScreen .sectionButtons .cards')!,
  closeCardsSectionButton: document.querySelector('#cards button.close')!,
  buyOne: document.querySelector('#cards button.buyOne')!,
  buyBulk: document.querySelector('#cards button.buyBulk')!,
};

export function init() {
  el.goToCardsSectionButton.addEventListener('click', () => showSection('cards'));
  el.closeCardsSectionButton.addEventListener('click', () => showSection('mainScreen'));
}

export function showCardsScreen() {
  const state = readState();
  const params = getUpgradablePermanentParameters();

  updateButtonPriceAndAmount(el.buyOne, dim.cardPriceGems, 1, state);
  updateButtonPriceAndAmount(
    el.buyBulk,
    dim.cardPriceGems * dim.cardBulkCount * params.cardsBulkBuyingRate,
    dim.cardBulkCount,
    state,
  );
  el.buyBulk.classList.toggle('hidden', !isFeatureAllowed('bulkCards', state));

  // todo update shown cards from state
}

function updateButtonPriceAndAmount(
  buttonEl: Element,
  price: number,
  amount: number,
  state: ReadonlyState,
) {
  const canAfford = state.wallet.read('gem') >= price;

  buttonEl.classList.toggle('disabled', !canAfford);
  buttonEl.classList.toggle('unaffordable', !canAfford);

  const costEl = buttonEl.querySelector<HTMLElement>('.cost')!;
  costEl.textContent = formatNumber(price);

  const amountEl = buttonEl.querySelector<HTMLElement>('.amount')!;
  amountEl.textContent = formatNumber(amount);
}
