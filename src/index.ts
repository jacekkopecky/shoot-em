const el = {
  log: document.querySelector('#log')!,
  startBtn: document.querySelector('#startBtn')!,
  endBtn: document.querySelector('#exitBtn')!,
  player: document.querySelector<HTMLElement>('#player')!,
  main: document.querySelector('main')!,
};

document.body.addEventListener('keyup', handleTopLevelSpaceKey);
el.startBtn.addEventListener('click', goFullscreen);
el.endBtn.addEventListener('click', exitFullscreen);
el.main.addEventListener('touchstart', handleTouchStart);
el.main.addEventListener('touchend', handleTouchEnd);
el.main.addEventListener('touchmove', handleTouchMove);

function goFullscreen() {
  el.main.requestFullscreen();
}

function exitFullscreen() {
  document.exitFullscreen();
}

function handleTopLevelSpaceKey(e: KeyboardEvent): void {
  if (e.key === ' ' && !document.fullscreenElement) {
    goFullscreen();
  }
}

let lastTouchPercent: number | null = null;
const playerMargin = 10;
let playerX = 50;

function handleTouchMove(e: TouchEvent) {
  const touchPercent = getTouchPercent(e);
  if (touchPercent != null && lastTouchPercent != null) {
    playerX += touchPercent - lastTouchPercent;
    lastTouchPercent = touchPercent;
    if (playerX < playerMargin) playerX = playerMargin;
    if (playerX > 100 - playerMargin) playerX = 100 - playerMargin;
    updateView();
  }
}

function updateView() {
  el.player.style.transform = `translateX(${playerX - 50}%)`;
}

function handleTouchStart(e: TouchEvent) {
  lastTouchPercent = getTouchPercent(e);
}

function handleTouchEnd(e: TouchEvent) {
  lastTouchPercent = getTouchPercent(e);
}

function getTouchPercent(e: TouchEvent) {
  const t = e.touches[0];
  return t ? (t.clientX / el.main.clientWidth) * 100 : null;
}

function log(str: string) {
  el.log.textContent += '\n' + str;
}

log('log');
