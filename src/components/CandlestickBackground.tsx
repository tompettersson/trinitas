"use client";

import { useEffect, useRef } from "react";

interface Candle {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  targetOpen: number;
  targetClose: number;
  targetHigh: number;
  targetLow: number;
  color: "green" | "red";
  animationSpeed: number;
}

export default function CandlestickBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const candlesRef = useRef<Candle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initCandles(rect.width, rect.height);
    };

    const initCandles = (width: number, height: number) => {
      const candleCount = Math.floor(width / 50); // One candle every ~50px
      const candles: Candle[] = [];

      // Create baseline for wave-like movement
      const baseY = height * 0.5;
      const amplitude = height * 0.2;

      for (let i = 0; i < candleCount; i++) {
        const x = (i / candleCount) * width + 25;
        const waveOffset = Math.sin((i / candleCount) * Math.PI * 2) * amplitude;
        const centerY = baseY + waveOffset;

        const isGreen = Math.random() > 0.45; // Slightly more green for positive vibe
        const bodyHeight = 20 + Math.random() * 60;
        const wickExtension = 10 + Math.random() * 30;

        const open = isGreen ? centerY + bodyHeight / 2 : centerY - bodyHeight / 2;
        const close = isGreen ? centerY - bodyHeight / 2 : centerY + bodyHeight / 2;

        candles.push({
          x,
          open,
          close,
          high: Math.min(open, close) - wickExtension,
          low: Math.max(open, close) + wickExtension,
          targetOpen: open,
          targetClose: close,
          targetHigh: Math.min(open, close) - wickExtension,
          targetLow: Math.max(open, close) + wickExtension,
          color: isGreen ? "green" : "red",
          animationSpeed: 0.02 + Math.random() * 0.03,
        });
      }

      candlesRef.current = candles;
    };

    const updateTargets = () => {
      const height = canvas.getBoundingClientRect().height;
      const baseY = height * 0.5;
      const amplitude = height * 0.15;

      candlesRef.current.forEach((candle, i) => {
        // Random chance to update each candle
        if (Math.random() > 0.995) {
          const time = Date.now() / 3000;
          const waveOffset = Math.sin((i / candlesRef.current.length) * Math.PI * 2 + time) * amplitude;
          const centerY = baseY + waveOffset + (Math.random() - 0.5) * 40;

          const isGreen = Math.random() > 0.45;
          const bodyHeight = 20 + Math.random() * 60;
          const wickExtension = 10 + Math.random() * 30;

          candle.targetOpen = isGreen ? centerY + bodyHeight / 2 : centerY - bodyHeight / 2;
          candle.targetClose = isGreen ? centerY - bodyHeight / 2 : centerY + bodyHeight / 2;
          candle.targetHigh = Math.min(candle.targetOpen, candle.targetClose) - wickExtension;
          candle.targetLow = Math.max(candle.targetOpen, candle.targetClose) + wickExtension;
          candle.color = isGreen ? "green" : "red";
        }
      });
    };

    const lerp = (current: number, target: number, speed: number) => {
      return current + (target - current) * speed;
    };

    const drawCandle = (candle: Candle, width: number) => {
      const candleWidth = Math.min(20, width / candlesRef.current.length * 0.6);

      // Smooth animation
      candle.open = lerp(candle.open, candle.targetOpen, candle.animationSpeed);
      candle.close = lerp(candle.close, candle.targetClose, candle.animationSpeed);
      candle.high = lerp(candle.high, candle.targetHigh, candle.animationSpeed);
      candle.low = lerp(candle.low, candle.targetLow, candle.animationSpeed);

      const isGreen = candle.close < candle.open;
      const bodyTop = Math.min(candle.open, candle.close);
      const bodyBottom = Math.max(candle.open, candle.close);
      const bodyHeight = bodyBottom - bodyTop;

      // Colors with low opacity for subtle effect
      const wickColor = isGreen ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.12)";
      const bodyColor = isGreen ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.15)";
      const glowColor = isGreen ? "rgba(34, 197, 94, 0.08)" : "rgba(239, 68, 68, 0.05)";

      // Draw glow
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 20;

      // Draw wick (vertical line)
      ctx.beginPath();
      ctx.strokeStyle = wickColor;
      ctx.lineWidth = 1.5;
      ctx.moveTo(candle.x, candle.high);
      ctx.lineTo(candle.x, candle.low);
      ctx.stroke();

      // Draw body (rectangle)
      ctx.fillStyle = bodyColor;
      ctx.fillRect(candle.x - candleWidth / 2, bodyTop, candleWidth, Math.max(bodyHeight, 2));

      // Reset shadow
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      updateTargets();

      candlesRef.current.forEach((candle) => {
        drawCandle(candle, rect.width);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
