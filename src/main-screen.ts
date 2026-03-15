import { initUpgrades, updateUpgrades } from './main-screen-upgrades';
import { init as initRunScreen, prepareRun, startRun } from './run';
import { clearNextRunUpgrades, initState, readState, resetState } from './state';
import { init as initThree } from './three';
import { formatNumber } from './utils';

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webglCanvas')!,
  topButtons: document.querySelector<HTMLElement>('#topBar')!,
  exitBtn: document.querySelector<HTMLButtonElement>('#exitBtn')!,
  settingsBtn: document.querySelector<HTMLButtonElement>('#settingsBtn')!,
  endRunScreenOK: document.querySelector('#endRunScreen button.ok')!,
  wallet: {
    gem: document.querySelector('#mainScreenWallet .value.gem')!,
    coin: document.querySelector('#mainScreenWallet .value.coin')!,
  },
  upgradeButtons: document.querySelector<HTMLElement>('#upgradeButtons')!,
};

export function init() {
  initState();
  initThree(el.main);
  initRunScreen();
  initUpgrades();
  el.canvas.addEventListener('touchstart', startPlaying);
  el.endRunScreenOK.addEventListener('click', showMainScreen);
  el.settingsBtn.addEventListener('click', showSettings);

  // touching near or between the buttons shouldn't start a run
  el.topButtons.addEventListener('touchdown', (e) => e.stopPropagation());
  el.upgradeButtons.addEventListener('touchdown', (e) => e.stopPropagation());

  showMainScreen();
}

export function startPlaying() {
  if (!el.main.classList.contains('run')) {
    el.main.classList.add('run');
    startRun();
    clearNextRunUpgrades();
  }
}

export function showMainScreen() {
  el.main.classList.remove('run');
  el.exitBtn.disabled = false;
  prepareRun();

  updateMainScreen();
}

export function updateMainScreen() {
  const state = readState();

  const coins = state.wallet.read('coin');
  el.wallet.coin.textContent = formatNumber(coins);

  const gems = state.wallet.read('gem');
  el.wallet.gem.textContent = formatNumber(gems);

  updateUpgrades(state);
}

function showSettings() {
  if (window.confirm('reset all data?')) {
    resetState();
    updateMainScreen();
  }
}
