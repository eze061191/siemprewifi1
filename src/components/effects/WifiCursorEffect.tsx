import { ReactP5Wrapper } from "@p5-wrapper/react";
import type { P5CanvasInstance } from "@p5-wrapper/react";

function sketch(p5: P5CanvasInstance) {
  let signals: WifiSignal[] = [];

  class WifiSignal {
    x: number;
    y: number;
    maxRadius: number;
    speed: number;
    lifespan: number;
    currentRadius: number;
    opacity: number;
    color: any; // p5.Color

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.maxRadius = p5.random(50, 150);
      this.speed = p5.random(0.5, 1.5);
      this.lifespan = 255;
      this.currentRadius = 0;
      this.opacity = 255;
      this.color = p5.color(247, 135, 0, this.opacity); // Tu color naranja
    }

    update() {
      this.currentRadius += this.speed;
      this.lifespan -= 2;
      this.opacity = this.lifespan;
      this.color.setAlpha(this.opacity);
    }

    draw() {
      p5.noFill();
      p5.strokeWeight(2);
      p5.stroke(this.color);
      
      for (let i = 1; i <= 3; i++) {
        let radius = this.currentRadius * (i / 3);
        if (radius > 0) {
            p5.arc(this.x, this.y, radius, radius, -p5.QUARTER_PI, p5.QUARTER_PI);
        }
      }
    }

    isDead() {
      return this.lifespan < 0 || this.currentRadius > this.maxRadius;
    }
  }

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    p5.clear();
    for (let i = signals.length - 1; i >= 0; i--) {
      signals[i].update();
      signals[i].draw();
      if (signals[i].isDead()) {
        signals.splice(i, 1);
      }
    }
  };

  p5.mousePressed = () => {
    if (p5.mouseY < p5.height && p5.mouseX < p5.width && p5.mouseY > 0 && p5.mouseX > 0) {
        signals.push(new WifiSignal(p5.mouseX, p5.mouseY));
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}

export const WifiCursorEffect = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};