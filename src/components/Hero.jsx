import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaArrowRight,
  FaDownload,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { profile } from "../data/profile";
import RotatingRole from "./RotatingRole";

const SKILLS = [
  "React",
  "Node.js",
  "Python",
  "Supabase",
  "APIs REST",
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
];

const heroButtonBase =
  "group relative inline-flex min-h-14 w-full max-w-[17rem] items-center justify-center gap-3 overflow-hidden rounded-2xl px-5 py-3.5 text-sm font-black leading-none transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] active:scale-[0.98] sm:w-auto sm:max-w-none sm:px-7 sm:text-base";

const heroButtonPrimary = `${heroButtonBase} bg-cyan-300 text-[#020617] shadow-[0_0_34px_rgba(34,211,238,0.32)] hover:bg-cyan-200`;

const heroButtonSecondary = `${heroButtonBase} border border-cyan-300/25 bg-white/10 text-white shadow-[0_0_18px_rgba(255,255,255,0.08)] backdrop-blur-xl hover:border-cyan-300/60 hover:bg-cyan-300/10`;

const socialLinkClass =
  "group inline-flex min-h-12 w-full max-w-[17rem] items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm font-bold text-cyan-50/85 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-300/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] sm:w-auto sm:max-w-none";

export default function Hero() {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const skillBadges = [...SKILLS, t("hero.aiIntegration")];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const canvasStyles = window.getComputedStyle(canvas);
    const canvasIsHidden =
      canvasStyles.display === "none" ||
      canvasStyles.visibility === "hidden" ||
      canvas.offsetWidth === 0 ||
      canvas.offsetHeight === 0;

    if (canvasIsHidden) return;

    let raf;
    let mouse = { x: -9999, y: -9999 };
    let isVisible = !document.hidden;
    let reduceMotion = shouldReduceMotion;

    const isMobile = window.innerWidth < 768;

    const particles = Array.from({ length: isMobile ? 80 : 140 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 2 + 1.6,
      vx: (Math.random() - 0.5) * 0.00065,
      vy: (Math.random() - 0.5) * 0.00065,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const move = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !raf) draw();
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = () => {
      reduceMotion = motionQuery.matches;
      cancelAnimationFrame(raf);
      raf = undefined;
      draw();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionPreference);

    const draw = () => {
      if (!isVisible) {
        raf = undefined;
        return;
      }

      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = "rgba(2, 6, 23, 0.3)";
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p, i) => {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
        }

        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        let x = p.x * w;
        let y = p.y * h;

        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (!reduceMotion && dist < 170) {
          const force = (170 - dist) / 170;
          x -= dx * force * 0.22;
          y -= dy * force * 0.22;
        }

        const glow = ctx.createRadialGradient(x, y, 0, x, y, p.r * 5.5);
        glow.addColorStop(0, "rgba(34,211,238,0.68)");
        glow.addColorStop(0.45, "rgba(59,130,246,0.28)");
        glow.addColorStop(1, "rgba(168,85,247,0)");

        ctx.beginPath();
        ctx.arc(x, y, p.r * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const qx = q.x * w;
          const qy = q.y * h;
          const d = Math.hypot(x - qx, y - qy);

          if (d < 105) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(qx, qy);
            ctx.strokeStyle = `rgba(168,85,247,${0.18 - d / 700})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      raf = reduceMotion ? undefined : requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionPreference);
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6 py-28 text-white"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      {/* Aurora viva */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(120deg,#020617,#0f172a,#312e81,#0891b2,#7c3aed,#020617)] bg-[length:500%_500%] opacity-30"
      />

      {/* Luces profundas */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.28),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.3),transparent_34%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.24),transparent_30%)]"
      />

      {/* Grid vivo */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : { backgroundPosition: ["0px 0px", "130px 130px"] }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:130px_130px]"
      />

      {/* Anillos orbitales */}
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute h-[900px] w-[900px] rounded-full border border-cyan-300/8"
      />

      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 68, repeat: Infinity, ease: "linear" }}
        className="absolute h-[620px] w-[620px] rounded-full border border-purple-300/8"
      />

      {/* Barrido de luz */}
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { x: ["-140%", "140%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/6 to-transparent blur-xl"
      />

     <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#020617]/35 to-[#020617]/86" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl min-w-0 items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
        {/* Texto */}
        <div className="mx-auto w-full max-w-[calc(100vw-3rem)] min-w-0 text-center sm:max-w-none lg:mx-0 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
      
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 75, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mx-auto max-w-full text-5xl font-black leading-[1.04] tracking-[-0.02em] sm:text-5xl md:text-8xl md:tracking-[-0.08em] lg:mx-0 xl:text-7xl"
            aria-label="Full Stack Developer"
          >
          <RotatingRole shouldReduceMotion={shouldReduceMotion} />

            <br />
            <span className="relative inline-block bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_70px_rgba(34,211,238,0.65)] pb-2">
          DEVELOPER
              <motion.span
                animate={{
                  scaleX: [0.15, 1, 0.15],
                  opacity: [0.25, 1, 0.25],
                }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="absolute -bottom-0 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 "
              />
            </span>
          </motion.h1>

       <motion.p
  initial={{ opacity: 0, y: 45 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
  className="mx-auto mt-8 max-w-2xl text-base font-light leading-7 text-cyan-50/80 sm:text-lg md:mt-11 md:text-2xl lg:mx-0"
>
  {t("hero.description")}
</motion.p>

         

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-8 flex max-w-full flex-wrap justify-center gap-3 lg:justify-start"
          >
            {skillBadges.map((skill, index) => (
              <motion.span
                key={skill}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-cyan-50/85 backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10 sm:px-5 md:text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Botones ultra */}
         <motion.div
  initial={{ opacity: 0, y: 45 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.35, ease: "easeOut" }}
  className="mt-12 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
>
  <Link
    to="/projects"
    className={heroButtonPrimary}
  >
    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition group-hover:opacity-100" />
    <span className="relative">{t("hero.viewProjects")}</span>
    <FaArrowRight className="relative h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
  </Link>

  <Link
    to="/contact"
    className={heroButtonSecondary}
  >
    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-cyan-300/20 to-white/0 opacity-0 transition group-hover:opacity-100" />
    <span className="relative">{t("hero.contact")}</span>
    <FaArrowRight className="relative h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
  </Link>

  <a
    href={profile.cvPath}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={t("hero.openCv")}
    className={heroButtonSecondary}
  >
    <span className="relative">{t("hero.viewCv")}</span>
    <FaDownload className="relative h-4 w-4 transition group-hover:translate-y-0.5" aria-hidden="true" />
  </a>
</motion.div>

          <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("navbar.openSocial", { label: link.label })}
                className={socialLinkClass}
              >
                <link.icon className="h-5 w-5" aria-hidden="true" />
                <span>{link.label}</span>
                <FaExternalLinkAlt
                  className="h-3 w-3 text-cyan-100/50 transition group-hover:text-cyan-100"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Recuadro código */}
        <motion.div
          initial={{ opacity: 0, scale: 0.86, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -22, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/10 p-5 shadow-[0_35px_130px_rgba(34,211,238,0.18)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-purple-500/10" />

            <div className="relative mb-5 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-cyan-100/60">alexis.dev</span>
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-[#020617]/80 p-6 text-left font-mono text-sm">
              <p className="text-purple-300">const developer = {"{"}</p>
              <p className="ml-5 text-cyan-200">name: "Alexis",</p>
              <p className="ml-5 text-blue-200">
                role: "Full Stack Developer",
              </p>
              <p className="ml-5 text-emerald-200">
                stack: "React + Node.js + Python + Supabase",
              </p>
              <p className="ml-5 text-pink-200">
                focus: "{t("hero.codeFocus")}",
              </p>
              <p className="text-purple-300">{"}"}</p>
            </div>

            <div className="relative mt-5 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-black text-cyan-200 text-center">Web</p>
                <p className="text-xs text-cyan-100/60 text-center">Frontend</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-black text-cyan-200 text-center">FS</p>
                <p className="text-xs text-cyan-100/60 text-center">Backend</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 pt-4 ">
                <p className="text-2xl font-black text-cyan-200 text-center">Data</p>
                <p className="text-xs text-cyan-100/60 text-center">Supabase</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
