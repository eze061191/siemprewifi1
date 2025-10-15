import { ReactP5Wrapper } from "@p5-wrapper/react";
import type { P5CanvasInstance } from "@p5-wrapper/react";

function sketch(p5: P5CanvasInstance) {
  let particles: Particle[] = [];
  const numParticles = 100; // Aumentamos el número de partículas para un área más grande

  class Particle {
    pos: any; // p5.Vector
    vel: any; // p5.Vector
    acc: any; // p5.Vector
    maxSpeed: number;
    color: any; // p5.Color
    radius: number;

    constructor() {
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      this.vel = p5.createVector(p5.random(-0.5, 0.5), p5.random(-0.5, 0.5));
      this.acc = p5.createVector(0, 0);
      this.maxSpeed = 1;
      this.color = p5.color(249, 115, 22, 150); // Naranja de la marca con algo de transparencia
      this.radius = p5.random(1, 3);
    }

    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }

    edges() {
      if (this.pos.x > p5.width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = p5.width;
      if (this.pos.y > p5.height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = p5.height;
    }

    show() {
      p5.noStroke();
      p5.fill(this.color);
      p5.ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
  }

  p5.setup = () => {
    // Crea un lienzo que llena la ventana gráfica; será recortado por el contenedor padre.
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }
  };

  p5.draw = () => {
    p5.clear();
    for (let particle of particles) {
      particle.update();
      particle.edges();
      particle.show();
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}

export const HeroParticleEffect = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};