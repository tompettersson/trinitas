"use client";

import { useEffect, useRef } from "react";
import p5 from "p5";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  orbitAngle: number;
  orbitRadius: number;
  orbitSpeed: number;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current || p5InstanceRef.current) return;

    const sketch = (p: p5) => {
      const particles: Particle[] = [];

      // Responsive values based on screen size
      const getResponsiveValues = () => {
        const minDim = Math.min(p.windowWidth, p.windowHeight);
        const isMobile = minDim < 600;
        const isTablet = minDim >= 600 && minDim < 1024;

        return {
          numParticles: isMobile ? 50 : isTablet ? 70 : 90,
          connectionDistance: isMobile ? 120 : isTablet ? 150 : 180,
          orbitRadiusMin: isMobile ? 30 : isTablet ? 45 : 60,
          orbitRadiusMax: isMobile ? 80 : isTablet ? 110 : 150,
          particleSize: isMobile ? 3 : 4,
          breatheAmount: isMobile ? 10 : isTablet ? 15 : 20,
        };
      };

      let config = getResponsiveValues();
      const mouseInfluence = 150;
      const mouseStrength = 0.025;

      // Three gravity centers (Trinity concept)
      let centers: { x: number; y: number }[] = [];
      let rotationAngle = 0;
      let breathePhase = 0;

      const calculateCenters = () => {
        const centerX = p.width / 2;
        const centerY = p.height / 2;
        const baseRadius = Math.min(p.width, p.height) * 0.22;

        // Breathing effect - radius oscillates
        const breatheAmount = Math.sin(breathePhase) * config.breatheAmount;
        const radius = baseRadius + breatheAmount;

        // Three points forming a triangle, slowly rotating
        centers = [
          {
            x: centerX + Math.cos(rotationAngle) * radius,
            y: centerY + Math.sin(rotationAngle) * radius,
          },
          {
            x: centerX + Math.cos(rotationAngle + (Math.PI * 2) / 3) * radius,
            y: centerY + Math.sin(rotationAngle + (Math.PI * 2) / 3) * radius,
          },
          {
            x: centerX + Math.cos(rotationAngle + (Math.PI * 4) / 3) * radius,
            y: centerY + Math.sin(rotationAngle + (Math.PI * 4) / 3) * radius,
          },
        ];
      };

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.style("display", "block");

        calculateCenters();

        // Initialize particles with orbital properties
        for (let i = 0; i < config.numParticles; i++) {
          const centerIndex = i % 3;
          const center = centers[centerIndex];

          // Each particle has its own orbit around its center
          const orbitAngle = p.random(p.TWO_PI);
          const orbitRadius = p.random(config.orbitRadiusMin, config.orbitRadiusMax);
          const orbitSpeed = p.random(0.003, 0.008) * (p.random() > 0.5 ? 1 : -1);

          const x = center.x + Math.cos(orbitAngle) * orbitRadius;
          const y = center.y + Math.sin(orbitAngle) * orbitRadius;

          particles.push({
            x,
            y,
            vx: 0,
            vy: 0,
            orbitAngle,
            orbitRadius,
            orbitSpeed,
          });
        }
      };

      p.draw = () => {
        p.clear();

        // Rotate the trinity centers clockwise
        rotationAngle -= 0.003;
        // Breathe in and out
        breathePhase += 0.008;
        calculateCenters();

        // Draw subtle lines between the three centers (trinity connection)
        p.stroke(255, 255, 255, 15);
        p.strokeWeight(1);
        for (let i = 0; i < 3; i++) {
          const next = (i + 1) % 3;
          p.line(centers[i].x, centers[i].y, centers[next].x, centers[next].y);
        }

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i];
          const centerIndex = i % 3;
          const targetCenter = centers[centerIndex];

          // Update orbit angle (continuous smooth movement)
          particle.orbitAngle += particle.orbitSpeed;

          // Calculate target position on orbit
          const targetX = targetCenter.x + Math.cos(particle.orbitAngle) * particle.orbitRadius;
          const targetY = targetCenter.y + Math.sin(particle.orbitAngle) * particle.orbitRadius;

          // Smooth movement toward target orbit position
          const toTargetX = targetX - particle.x;
          const toTargetY = targetY - particle.y;
          particle.vx += toTargetX * 0.02;
          particle.vy += toTargetY * 0.02;

          // Repulsion from other particles (keep minimum distance)
          const minParticleDistance = 70;
          for (let j = 0; j < particles.length; j++) {
            if (i === j) continue;
            const other = particles[j];
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const d = Math.sqrt(dx * dx + dy * dy);

            if (d < minParticleDistance && d > 0) {
              const repelForce = (minParticleDistance - d) / minParticleDistance;
              particle.vx += (dx / d) * repelForce * 0.3;
              particle.vy += (dy / d) * repelForce * 0.3;
            }
          }

          // Mouse interaction - attraction
          const dx = p.mouseX - particle.x;
          const dy = p.mouseY - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseInfluence && dist > 0) {
            const force = (mouseInfluence - dist) / mouseInfluence;
            particle.vx += (dx / dist) * force * mouseStrength;
            particle.vy += (dy / dist) * force * mouseStrength;
          }

          // Apply velocity with damping
          particle.vx *= 0.92;
          particle.vy *= 0.92;

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Soft boundary
          const margin = 50;
          if (particle.x < margin) particle.vx += 0.1;
          if (particle.x > p.width - margin) particle.vx -= 0.1;
          if (particle.y < margin) particle.vy += 0.1;
          if (particle.y > p.height - margin) particle.vy -= 0.1;

          // Draw particle
          p.noStroke();
          p.fill(255, 255, 255, 50);
          p.ellipse(particle.x, particle.y, config.particleSize, config.particleSize);

          // Draw connections to nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j];
            const d = p.dist(particle.x, particle.y, other.x, other.y);

            if (d < config.connectionDistance) {
              const alpha = p.map(d, 0, config.connectionDistance, 35, 0);
              p.stroke(255, 255, 255, alpha);
              p.strokeWeight(0.5);
              p.line(particle.x, particle.y, other.x, other.y);
            }
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        calculateCenters();
      };
    };

    p5InstanceRef.current = new p5(sketch, containerRef.current);

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
