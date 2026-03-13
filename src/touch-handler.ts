export class TouchHandler {
  private lastTouchFraction: number | null = null;
  private currentX: number;
  private speedUp: number;
  private enabled = true;

  constructor(
    private el: HTMLElement,

    private opts: {
      initialX?: number;
      speedUp?: number;
      onMove?(currX: number): void;
    },
  ) {
    el.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    el.addEventListener('touchend', this.handleTouchEnd, { passive: true });
    el.addEventListener('touchmove', this.handleTouchMove, { passive: true });
    this.currentX = opts.initialX ?? 50;
    this.speedUp = opts.speedUp ?? 1;
  }

  handleTouchStart = (e: TouchEvent) => {
    this.lastTouchFraction = this.getTouchFraction(e);
  };

  handleTouchEnd = (e: TouchEvent) => {
    this.lastTouchFraction = this.getTouchFraction(e);
  };

  handleTouchMove = (e: TouchEvent) => {
    if (!this.enabled) return;
    const touchFraction = this.getTouchFraction(e);
    if (touchFraction != null && this.lastTouchFraction != null) {
      const oldX = this.currentX;
      this.currentX += (touchFraction - this.lastTouchFraction) * this.speedUp;
      if (this.currentX < 0) this.currentX = 0;
      if (this.currentX > 1) this.currentX = 1;

      if (oldX !== this.currentX && this.opts.onMove) {
        this.opts.onMove(this.currentX);
      }

      this.lastTouchFraction = touchFraction;
    }
  };

  toggle(value?: boolean) {
    this.enabled = value ?? !this.enabled;
  }

  setCurrentX(value: number) {
    this.currentX = value;
  }

  shutdown() {
    this.el.removeEventListener('touchstart', this.handleTouchStart);
    this.el.removeEventListener('touchend', this.handleTouchEnd);
    this.el.removeEventListener('touchmove', this.handleTouchMove);
  }

  private getTouchFraction(e: TouchEvent) {
    const t = e.touches[0];
    return t ? t.clientX / this.el.clientWidth : null;
  }
}
