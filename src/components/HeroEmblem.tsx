"use client";

import { useEffect, useRef } from "react";

const TICKS = 10;
const RISE_MS = 8000;
const HOLD_MS = 600;
const RESET_MS = 700;

type Phase = "rising" | "hold" | "reset";

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function cssVar(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || fallback;
}

export function HeroEmblem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ink = cssVar("--ink", "#1c1917");
    const accent = cssVar("--accent", "#8b4513");
    const grid = cssVar("--stone-200", "#e7e5e4");
    const faint = cssVar("--stone-400", "#a8a29e");
    const serif = cssVar("--font-fraunces", "serif");
    const mono = cssVar("--font-dm-mono", "monospace");

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };

    // Animation state
    let phase: Phase = "rising";
    let phaseStart = 0;
    let iteration = 1;
    let mouseX = 0;
    let mouseY = 0;
    let parX = 0;
    let parY = 0;
    let rafId = 0;
    let running = false;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onPointerLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    // visualLevel: fractional 0..TICKS used for drawing
    const draw = (visualLevel: number, now: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // gentle parallax
      parX += (mouseX * 7 - parX) * 0.06;
      parY += (mouseY * 7 - parY) * 0.06;
      ctx.translate(parX, parY);

      const pad = Math.round(width * 0.1);
      const innerTop = pad;
      const innerBottom = height - pad;
      const innerLeft = pad;
      const innerRight = width - pad;
      const innerH = innerBottom - innerTop;

      // drafting grid
      const cell = Math.max(22, Math.round(width / 16));
      ctx.strokeStyle = grid;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.55;
      ctx.beginPath();
      for (let x = ((width / 2) % cell) - cell; x <= width; x += cell) {
        ctx.moveTo(x + 0.5, -10);
        ctx.lineTo(x + 0.5, height + 10);
      }
      for (let y = ((height / 2) % cell) - cell; y <= height; y += cell) {
        ctx.moveTo(-10, y + 0.5);
        ctx.lineTo(width + 10, y + 0.5);
      }
      ctx.stroke();
      ctx.globalAlpha = 1;

      const barY = innerBottom - (visualLevel / TICKS) * innerH;

      // monogram
      const fontSize = Math.round(height * 0.46);
      ctx.font = `500 ${fontSize}px ${serif}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const cx = width / 2;
      const cy = height / 2 + fontSize * 0.04;

      // outline (the aspiration)
      ctx.strokeStyle = faint;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.8;
      ctx.strokeText("HS", cx, cy);
      ctx.globalAlpha = 1;

      // solid fill below the bar (what's been earned)
      ctx.save();
      ctx.beginPath();
      ctx.rect(-20, barY, width + 40, height - barY + 20);
      ctx.clip();
      ctx.fillStyle = ink;
      ctx.fillText("HS", cx, cy);
      ctx.restore();

      // left ruler ticks
      ctx.lineWidth = 1;
      for (let i = 0; i <= TICKS; i++) {
        const y = innerBottom - (i / TICKS) * innerH;
        const passed = i <= visualLevel + 0.001;
        ctx.strokeStyle = passed ? accent : faint;
        ctx.globalAlpha = passed ? 0.9 : 0.45;
        ctx.beginPath();
        ctx.moveTo(innerLeft - 14, y + 0.5);
        ctx.lineTo(innerLeft - (i % 5 === 0 ? 0 : 6), y + 0.5);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // the bar
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(innerLeft, barY);
      ctx.lineTo(innerRight, barY);
      ctx.stroke();

      // crosshair endpoints
      ctx.lineWidth = 1;
      for (const ex of [innerLeft, innerRight]) {
        ctx.beginPath();
        ctx.moveTo(ex, barY - 5);
        ctx.lineTo(ex, barY + 5);
        ctx.stroke();
      }

      // pulsing carat above the bar during hold (full marks)
      const pct = Math.round((visualLevel / TICKS) * 100);
      ctx.font = `400 ${Math.max(10, Math.round(width * 0.028))}px ${mono}`;
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      ctx.fillStyle = accent;
      ctx.fillText(`${String(pct).padStart(3, "0")}%`, innerRight, barY - 6);

      // caption
      ctx.textAlign = "left";
      ctx.fillStyle = faint;
      const caption =
        phase === "hold"
          ? "STANDARD MET — RAISE IT AGAIN"
          : `RAISING THE BAR · PASS ${String(iteration).padStart(2, "0")}`;
      ctx.fillText(caption, innerLeft, height - pad * 0.25);

      // subtle blink on the percentage during hold
      if (phase === "hold") {
        const blink = (Math.sin(now / 220) + 1) / 2;
        ctx.globalAlpha = 0.25 + blink * 0.5;
        ctx.strokeStyle = accent;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(innerLeft, barY);
        ctx.lineTo(innerRight, barY);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    };

    const tick = (now: number) => {
      if (!phaseStart) phaseStart = now;
      const elapsed = now - phaseStart;
      let visual = 0;

      switch (phase) {
        case "rising": {
          const p = Math.min(elapsed / RISE_MS, 1);
          visual = p * TICKS;
          if (p >= 1) {
            visual = TICKS;
            phase = "hold";
            phaseStart = now;
          }
          break;
        }
        case "hold":
          visual = TICKS;
          if (elapsed >= HOLD_MS) {
            phase = "reset";
            phaseStart = now;
          }
          break;
        case "reset": {
          const p = Math.min(elapsed / RESET_MS, 1);
          visual = TICKS * (1 - easeInOutCubic(p));
          if (p >= 1) {
            visual = 0;
            iteration += 1;
            phase = "rising";
            phaseStart = now;
          }
          break;
        }
      }

      draw(visual, now);
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      phaseStart = 0;
      rafId = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (reducedMotion) return;
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.1 }
    );

    const ro = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw(TICKS * 0.7, 0);
    });

    resize();
    document.fonts.ready.then(() => {
      if (reducedMotion) {
        draw(TICKS * 0.7, 0);
      } else {
        observer.observe(container);
      }
    });

    ro.observe(container);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    return () => {
      stop();
      observer.disconnect();
      ro.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full"
      role="img"
      aria-label="Animated Higher Standards monogram: a bar rises steadily, filling in the HS mark as the standard is raised"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
