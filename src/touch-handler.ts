export class TouchHandler {
  private lastTouchPercent: number | null = null;
  private currentX: number;
  private enabled = true;

  constructor(
    private el: HTMLElement,

    private opts: {
      initialX?: number;
      onMove?(currX: number): void;
    },
  ) {
    el.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    el.addEventListener('touchend', this.handleTouchEnd, { passive: true });
    el.addEventListener('touchmove', this.handleTouchMove, { passive: true });
    this.currentX = opts.initialX ?? 50;
  }

  handleTouchStart = (e: TouchEvent) => {
    if (!this.enabled) return;
    this.lastTouchPercent = this.getTouchPercent(e);
  };

  handleTouchEnd = (e: TouchEvent) => {
    if (!this.enabled) return;
    this.lastTouchPercent = this.getTouchPercent(e);
  };

  handleTouchMove = (e: TouchEvent) => {
    if (!this.enabled) return;
    const touchPercent = this.getTouchPercent(e);
    if (touchPercent != null && this.lastTouchPercent != null) {
      const oldX = this.currentX;
      this.currentX += touchPercent - this.lastTouchPercent;
      this.lastTouchPercent = touchPercent;
      if (this.currentX < 0) this.currentX = 0;
      if (this.currentX > 100) this.currentX = 100;

      if (oldX !== this.currentX && this.opts.onMove) {
        this.opts.onMove(this.currentX);
      }
    }
  };

  toggle(value?: boolean) {
    this.enabled = value ?? !this.enabled;
  }

  shutdown() {
    this.el.removeEventListener('touchstart', this.handleTouchStart);
    this.el.removeEventListener('touchend', this.handleTouchEnd);
    this.el.removeEventListener('touchmove', this.handleTouchMove);
  }

  private getTouchPercent(e: TouchEvent) {
    const t = e.touches[0];
    return t ? (t.clientX / this.el.clientWidth) * 100 : null;
  }
}
