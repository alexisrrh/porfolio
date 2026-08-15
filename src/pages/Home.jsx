import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Hero from "../components/Hero";
import InteractiveEnergyCanvas from "../components/InteractiveEnergyCanvas";
import Seo from "../components/Seo";
import { FeaturedProjects } from "../components/Projects";
import { useTranslation } from "react-i18next";

const randomDirection = () => (Math.random() > 0.5 ? 1 : -1);

const getUniverseProfile = (width) => {
  if (width < 768) {
    return {
      density: 0.000016,
      minCount: 38,
      maxCount: 90,
      connectionDistance: 78,
      maxConnections: 2,
      dpr: 1.25,
      glowScale: 4.7,
      glowAlpha: 0.72,
      lineAlpha: 0.045,
    };
  }

  if (width < 1024) {
    return {
      density: 0.000034,
      minCount: 58,
      maxCount: 150,
      connectionDistance: 92,
      maxConnections: 3,
      dpr: 1.5,
      glowScale: 5.4,
      glowAlpha: 0.85,
      lineAlpha: 0.06,
    };
  }

  return {
    density: 0.000052,
    minCount: 70,
    maxCount: 220,
    connectionDistance: 112,
    maxConnections: 999,
    dpr: 2,
    glowScale: 6.3,
    glowAlpha: 1,
    lineAlpha: 0.08,
  };
};

function HomeUniverseCanvas({ containerRef, shouldReduceMotion = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef?.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !container || !ctx) return undefined;

    let raf;
    let mounted = true;
    let pageVisible = !document.hidden;
    let inViewport = true;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let profile = getUniverseProfile(window.innerWidth || 1024);
    let lastTime = performance.now();
    let stars = [];

    const makeStars = () => {
      const count = Math.min(
        profile.maxCount,
        Math.max(profile.minCount, Math.floor(width * height * profile.density)),
      );
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() > 0.82 ? Math.random() * 1.6 + 1.4 : Math.random() * 1 + 0.65,
        alpha: Math.random() * 0.28 + 0.54,
        phase: Math.random() * Math.PI * 2,
        vx: randomDirection() * (Math.random() * 4 + 5),
        vy: randomDirection() * (Math.random() * 3 + 3),
      }));
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      profile = getUniverseProfile(width);
      dpr = Math.min(window.devicePixelRatio || 1, profile.dpr);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastTime = performance.now();
      makeStars();
    };

    const canDraw = () => mounted && pageVisible && inViewport;

    const pause = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = undefined;
      }
    };

    const start = () => {
      if (!canDraw() || raf) return;
      lastTime = performance.now();
      raf = requestAnimationFrame(draw);
    };

    const draw = (now = performance.now()) => {
      raf = undefined;

      if (!canDraw()) return;

      const dt = Math.min((now - lastTime) / 1000, 0.04);
      lastTime = now;
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star, index) => {
        if (!shouldReduceMotion) {
          star.x += star.vx * dt;
          star.y += star.vy * dt;
          if (star.x < -12) star.x = width + 12;
          else if (star.x > width + 12) star.x = -12;
          if (star.y < -12) star.y = height + 12;
          else if (star.y > height + 12) star.y = -12;
        }

        const pulse = 0.92 + Math.sin(now * 0.0007 + star.phase) * 0.08;
        const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r * profile.glowScale * pulse);
        glow.addColorStop(0, `rgba(34,211,238,${0.42 * profile.glowAlpha * star.alpha * pulse})`);
        glow.addColorStop(0.45, `rgba(59,130,246,${0.18 * profile.glowAlpha * star.alpha * pulse})`);
        glow.addColorStop(1, "rgba(168,85,247,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * 2.4, 0, Math.PI * 2);
        ctx.fill();

        let connections = 0;
        for (let j = index + 1; j < stars.length; j += 1) {
          const other = stars[j];
          const distance = Math.hypot(star.x - other.x, star.y - other.y);
          if (distance < profile.connectionDistance) {
            ctx.strokeStyle = `rgba(125,211,252,${profile.lineAlpha - distance / 1800})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            connections += 1;
            if (connections >= profile.maxConnections) break;
          }
        }
      });

      if (!shouldReduceMotion) start();
    };

    resize();
    start();

    const scheduleResize = () => {
      resize();
      start();
    };

    const handleVisibility = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start();
      else pause();
    };

    const resizeObserver = window.ResizeObserver ? new ResizeObserver(scheduleResize) : null;
    const intersectionObserver = window.IntersectionObserver
      ? new IntersectionObserver(([entry]) => {
          inViewport = entry.isIntersecting;
          if (inViewport) start();
          else pause();
        })
      : null;
    resizeObserver?.observe(container);
    intersectionObserver?.observe(container);
    window.addEventListener("resize", scheduleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      mounted = false;
      pause();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener("resize", scheduleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      stars = [];
    };
  }, [containerRef, shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}

function CapabilitiesIntro() {
  const { t } = useTranslation();
  const capabilities = t("home.capabilities", { returnObjects: true });

  return (
    <section className="relative overflow-hidden bg-[#020617] px-6 py-24 text-white">
      <div className="home-section-backdrop absolute inset-x-0 bottom-0 -top-px bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.14),transparent_32%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            {t("home.capabilitiesEyebrow")}
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            {t("home.capabilitiesTitle")}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((item) => (
            <div
              key={item}
              data-energy-safe-zone="true"
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center text-[15px] font-bold leading-6 text-cyan-50/80 backdrop-blur md:text-base"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const homeRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Seo
        title={t("seo.home.title")}
        description={t("seo.home.description")}
      />
      <div ref={homeRef} className="home-continuous-surface relative bg-[#020617]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,#020617_0%,#07112a_24%,#020617_52%,#081129_76%,#020617_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_48%_12%,rgba(34,211,238,0.23),transparent_28%),radial-gradient(circle_at_18%_34%,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_84%_46%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_26%_76%,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_78%_88%,rgba(168,85,247,0.16),transparent_34%)]"
        />
        <HomeUniverseCanvas
          containerRef={homeRef}
          shouldReduceMotion={shouldReduceMotion}
        />
        <InteractiveEnergyCanvas
          containerRef={homeRef}
          shouldReduceMotion={shouldReduceMotion}
        />
        <Hero />
        <FeaturedProjects compact />
        <CapabilitiesIntro />
      </div>
    </>
  );
}
