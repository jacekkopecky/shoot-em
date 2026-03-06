export class TouchHandler {
  private lastTouchPercent: number | null = null;
  private currentX: number;
  private marginX: number;

  constructor(
    private el: HTMLElement,
    private opts: {
      initialX?: number;
      marginX?: number;
      onMove?(currX: number): void;
    },
  ) {
    el.addEventListener('touchstart', this.handleTouchStart);
    el.addEventListener('touchend', this.handleTouchEnd);
    el.addEventListener('touchmove', this.handleTouchMove);
    this.currentX = opts.initialX || 50;
    this.marginX = opts.marginX || 0;
  }

  handleTouchStart = (e: TouchEvent) => {
    this.lastTouchPercent = this.getTouchPercent(e);
  };

  handleTouchEnd = (e: TouchEvent) => {
    this.lastTouchPercent = this.getTouchPercent(e);
  };

  handleTouchMove = (e: TouchEvent) => {
    const touchPercent = this.getTouchPercent(e);
    if (touchPercent != null && this.lastTouchPercent != null) {
      this.currentX += touchPercent - this.lastTouchPercent;
      this.lastTouchPercent = touchPercent;
      if (this.currentX < this.marginX) this.currentX = this.marginX;
      if (this.currentX > 100 - this.marginX) this.currentX = 100 - this.marginX;

      this.opts.onMove?.(this.currentX);
    }
  };

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
