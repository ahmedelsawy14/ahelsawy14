import { useEffect, useRef } from "react";
import "../styles/particleBackground.css";

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let width = 0;
    let height = 0;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const calculateParticleCount = (w, h) => {
      if (w < 768) {
        return 15; // Drastically reduced for mobile
      } else if (w < 1200) {
        return 35;
      } else {
        return 60;
      }
    };

    const initParticles = () => {
      const count = calculateParticleCount(width, height);
      particles = [];

      for (let i = 0; i < count; i++) {
        // Size distribution: mostly 0.9-1.2px, occasionally 1.5-1.7px, rarely 2.0-2.2px
        const rand = Math.random();
        let radius = 1.0;
        if (rand > 0.92) {
          radius = 2.0;
        } else if (rand > 0.72) {
          radius = 1.5;
        } else {
          radius = 0.8 + Math.random() * 0.4;
        }

        // Color opacities: rgba(255,255,255, 0.14 - 0.48)
        const baseAlpha = 0.12 + Math.random() * 0.36;
        const pulseSpeed = 0.003 + Math.random() * 0.009;

        // Extremely slow drift speed
        const vx = (Math.random() - 0.5) * 0.14;
        const vy = (Math.random() - 0.5) * 0.14 - 0.04; // Gentle upward cosmic drift

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          baseAlpha,
          currentAlpha: baseAlpha,
          pulseSpeed,
          pulsePhase: Math.random() * Math.PI * 2,
          vx,
          vy,
        });
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      if (prefersReducedMotion) {
        drawStatic();
      }
    });
    resizeObserver.observe(container);

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.globalAlpha = p.baseAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;
    };

    let isScrolling = false;
    let scrollTimeout = null;
    let lastRenderTime = 0;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = (timestamp) => {
      // Throttle to ~15fps while scrolling to preserve CPU for scroll compositing
      if (isScrolling) {
        if (timestamp - lastRenderTime < 66) {
          animationFrameId = requestAnimationFrame(render);
          return;
        }
      }
      lastRenderTime = timestamp;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Subtle drifting movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders seamlessly
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;

        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Subtle breathing / twinkle
        p.pulsePhase += p.pulseSpeed;
        const alphaDelta = Math.sin(p.pulsePhase) * 0.08;
        const alpha = Math.max(0.05, Math.min(0.42, p.baseAlpha + alphaDelta));

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    if (prefersReducedMotion || width < 768) {
      drawStatic();
    } else {
      render();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      } else {
        if (!prefersReducedMotion && width >= 768 && !animationFrameId && isVisible) {
          render();
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          if (!prefersReducedMotion && width >= 768 && !animationFrameId && !document.hidden) {
            render();
          }
        } else {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        }
      });
    }, { threshold: 0 });
    
    if (container) {
      intersectionObserver.observe(container);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="particle-background-layer"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="particle-canvas" />
    </div>
  );
}
