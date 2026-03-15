import { init as initRunScreen, prepareRun, startRun } from './run';
import { initState, readState, resetState } from './state';
import { init as initThree } from './three';
import { formatCurrencyNumber } from './utils';

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webglCanvas')!,
  exitBtn: document.querySelector<HTMLButtonElement>('#exitBtn')!,
  settingsBtn: document.querySelector<HTMLButtonElement>('#settingsBtn')!,
  endRunScreenOK: document.querySelector('#endRunScreen button.ok')!,
  wallet: {
    gem: document.querySelector('#mainScreenWallet .value.gem')!,
    coin: document.querySelector('#mainScreenWallet .value.coin')!,
  },
};

export function init() {
  initState();
  initThree(el.main);
  initRunScreen();
  el.canvas.addEventListener('touchstart', startPlaying);
  el.endRunScreenOK.addEventListener('click', showMainScreen);
  el.settingsBtn.addEventListener('click', showSettings);

  showMainScreen();
}

export function startPlaying() {
  if (!el.main.classList.contains('run')) {
    el.main.classList.add('run');
    startRun();
  }
}

export function showMainScreen() {
  el.main.classList.remove('run');
  el.exitBtn.disabled = false;
  prepareRun();

  updateMainScreen();
}

function updateMainScreen() {
  const state = readState();

  el.wallet.coin.textContent = formatCurrencyNumber(state.wallet.read('coin'));
  el.wallet.gem.textContent = formatCurrencyNumber(state.wallet.read('gem'));
}

function showSettings() {
  if (window.confirm('reset all data?')) {
    resetState();
    updateMainScreen();
  }
}
