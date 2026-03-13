import { type Currency } from '../types.js';
import { formatCurrencyNumber } from '../utils.js';
import { Wallet } from '../wallet.js';

const el = {
  endRunScreen: document.querySelector('#endRunScreen')!,
  endRunScreenCoins: document.querySelector('#endRunScreen .value.coin')!,
  endRunScreenGems: document.querySelector('#endRunScreen .value.gem')!,
};

let wallet = new Wallet();

export function setupAwards() {
  wallet.reset();
  toggleEndRunScreen(false);
}

export function giveAward(what: Currency) {
  wallet.add(what);
}

export function toggleEndRunScreen(value?: boolean) {
  el.endRunScreen.classList.toggle('visible', value);
}

export function updateEndRunScreen() {
  el.endRunScreenCoins.textContent = formatCurrencyNumber(wallet.read('coin'));
  el.endRunScreenGems.textContent = formatCurrencyNumber(wallet.read('gem'));
}
