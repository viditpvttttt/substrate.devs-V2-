import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  lat: number;
  lon: number;
  isLand: boolean;
  size: number;
  color: string;
}

// Generate latitude and longitude for realistic continent density
function isLandCoordinate(lat: number, lon: number): boolean {
  // Rough mathematical representation of world continents in spherical coordinates
  // North America
  if (lat > 15 && lat < 70 && lon > -165 && lon < -50) return true;
  // South America
  if (lat > -55 && lat < 12 && lon > -82 && lon < -35) return true;
  // Europe
  if (lat > 35 && lat < 70 && lon > -10 && lon < 40) return true;
  // Africa
  if (lat > -35 && lat < 37 && lon > -18 && lon < 52) return true;
  // Asia
  if (lat > 5 && lat < 75 && lon > 40 && lon < 150) return true;
  // Australia
  if (lat > -42 && lat < -11 && lon > 112 && lon < 154) return true;
  // Greenland / Arctic
  if (lat > 60 && lat < 83 && lon > -70 && lon < -10) return true;
  // Antarctica
  if (lat < -65) return true;

  return false;
}

export function ParticleGlobe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const radius = Math.min(width, height) * 0.38;

    // Build particle points
    const particles: Particle[] = [];
    const totalPoints = 2200;

    for (let i = 0; i < totalPoints; i++) {
      // Golden ratio Fibonacci sphere distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / totalPoints);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      const lat = (90 - (phi * 180) / Math.PI);
      const lon = (((theta * 180) / Math.PI) % 360) - 180;

      const isLand = isLandCoordinate(lat, lon);

      // Higher density for land, sparse for ocean/atmosphere
      if (!isLand && Math.random() > 0.18) continue;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      // Spectral colors matching Image 1: Sky Blue -> Purple -> Magenta -> Coral Orange
      let color = "#a855f7"; // purple fallback
      const normLon = (lon + 180) / 360; // 0 to 1

      if (normLon < 0.25) {
        color = "#3b82f6"; // Sky blue
      } else if (normLon < 0.5) {
        color = "#8b5cf6"; // Violet / Purple
      } else if (normLon < 0.75) {
        color = "#ec4899"; // Magenta / Pink
      } else {
        color = "#f97316"; // Bright Coral / Orange
      }

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        lat,
        lon,
        isLand,
        size: isLand ? (Math.random() > 0.7 ? 2.2 : 1.5) : 0.9,
        color,
      });
    }

    // Add extra outer orbital ring particles
    for (let i = 0; i < 150; i++) {
      const angle = Math.random() * Math.PI * 2;
      const ringRadius = radius * (1.05 + Math.random() * 0.18);
      const x = ringRadius * Math.cos(angle);
      const y = (Math.random() - 0.5) * radius * 0.4;
      const z = ringRadius * Math.sin(angle);

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        lat: 0,
        lon: 0,
        isLand: false,
        size: 0.8 + Math.random() * 0.8,
        color: Math.random() > 0.5 ? "#60a5fa" : "#fb923c",
      });
    }

    let rotationY = 0;
    let rotationX = 0.2; // slight downward tilt
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      rotationY += deltaX * 0.005;
      rotationX += deltaY * 0.005;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Auto rotation when not dragging
      if (!isDragging) {
        rotationY += 0.004;
      }

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      const cx = width / 2;
      const cy = height / 2;

      // Project particles to 2D
      const projected = particles.map((p) => {
        // Rotate around Y
        let rx = p.baseX * cosY - p.baseZ * sinY;
        let rz = p.baseX * sinY + p.baseZ * cosY;

        // Rotate around X
        let ry = p.baseY * cosX - rz * sinX;
        rz = p.baseY * sinX + rz * cosX;

        // Perspective scale
        const scale = 550 / (550 - rz);
        const px = rx * scale + cx;
        const py = ry * scale + cy;

        return {
          ...p,
          px,
          py,
          rz,
          scale,
        };
      });

      // Sort by Z depth for proper alpha blending
      projected.sort((a, b) => a.rz - b.rz);

      // Draw subtle connecting web lines between nearby land particles facing front
      ctx.lineWidth = 0.4;
      for (let i = 0; i < projected.length; i += 4) {
        const p1 = projected[i];
        if (p1.rz < 0) continue; // front hemisphere only

        for (let j = i + 1; j < Math.min(i + 15, projected.length); j++) {
          const p2 = projected[j];
          if (p2.rz < 0) continue;

          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 28) {
            const alpha = (1 - dist / 28) * 0.15 * (p1.scale * 0.8);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Render dots
      projected.forEach((p) => {
        // Alpha based on depth
        const depthAlpha = Math.max(0.12, (p.rz + radius) / (radius * 2));
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.isLand ? depthAlpha : depthAlpha * 0.6;

        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size * p.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background radial atmosphere glow matching Image 1 */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-radial from-violet-200/40 via-pink-100/20 to-transparent blur-3xl opacity-70" />
      <canvas
        ref={canvasRef}
        className="cursor-grab active:cursor-grabbing max-w-full touch-none relative z-10"
        style={{ width: "100%", height: "100%", minHeight: "360px" }}
      />
    </div>
  );
}
