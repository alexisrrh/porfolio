import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SKILLS = ["React", "JavaScript", "Tailwind", "APIs", "Supabase", "Git"];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf;
    let mouse = { x: -9999, y: -9999 };

    const particles = Array.from({ length: 200 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 3 + 2.5,
      vx: (Math.random() - 0.5) * 0.001,
      vy: (Math.random() - 0.5) * 0.001,
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

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = "rgba(2, 6, 23, 0.22)";
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        let x = p.x * w;
        let y = p.y * h;

        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 210) {
          const force = (210 - dist) / 210;
          x -= dx * force * 0.34;
          y -= dy * force * 0.34;
        }

        const glow = ctx.createRadialGradient(x, y, 0, x, y, p.r * 7);
        glow.addColorStop(0, "rgba(34,211,238,1)");
        glow.addColorStop(0.45, "rgba(59,130,246,0.5)");
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

          if (d < 125) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(qx, qy);
            ctx.strokeStyle = `rgba(168,85,247,${0.32 - d / 430})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6 py-28 text-white"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Aurora viva */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(120deg,#020617,#0f172a,#312e81,#0891b2,#7c3aed,#020617)] bg-[length:500%_500%] opacity-90"
      />

      {/* Luces profundas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.42),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.45),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.35),transparent_28%)]" />

      {/* Grid vivo */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "130px 130px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-35 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:130px_130px]"
      />

      {/* Anillos orbitales */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute h-[900px] w-[900px] rounded-full border border-cyan-300/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
        className="absolute h-[620px] w-[620px] rounded-full border border-purple-300/10"
      />

      {/* Barrido de luz */}
      <motion.div
        animate={{ x: ["-140%", "140%"] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#020617]/45 to-[#020617]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
        {/* Texto */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.35)] backdrop-blur md:text-xs">
              Frontend Developer · React · Available
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 75, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.95 }}
            className="text-5xl font-black leading-[1] tracking-[-0.08em] md:text-8xl xl:text-7xl"
          >
          DESARROLLADOR

            <br />
            <span className="relative inline-block bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_70px_rgba(34,211,238,0.65)]">
          FRONTEND
              <motion.span
                animate={{
                  scaleX: [0.15, 1, 0.15],
                  opacity: [0.25, 1, 0.25],
                }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="absolute -bottom-3 left-0 h-2 w-full origin-left rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400"
              />
            </span>
            <br />
          CON REACT
          </motion.h1>

       <motion.p
  initial={{ opacity: 0, y: 45 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.38, duration: 0.85 }}
  className="mx-auto mt-11 max-w-2xl text-lg font-light leading-8 text-cyan-50/80 md:text-2xl lg:mx-0"
>
  Desarrollo interfaces modernas con{" "}
  <span className="font-semibold text-white">React</span>,{" "}
  <span className="font-semibold text-white">Tailwind</span> y consumo de{" "}
  <span className="font-semibold text-cyan-200">APIs reales</span>. Me enfoco
  en crear experiencias rápidas, limpias y funcionales que puedan usarse en
  proyectos reales.
</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            {SKILLS.map((skill, index) => (
              <motion.span
                key={skill}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold text-cyan-50/85 backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10 md:text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Botones ultra */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.8 }}
            className="mt-14 flex flex-col justify-center gap-6 sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-[2rem] p-[2px] transition hover:-translate-y-2 hover:scale-[1.04] active:scale-95"
            >
              <span className="absolute inset-0 rounded-[2rem] bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#3b82f6,#a855f7,#22d3ee)] opacity-90 blur-md transition group-hover:blur-lg" />

              <span className="relative flex items-center justify-center gap-4 rounded-[2rem] bg-[#020617] px-11 py-5 text-lg font-black text-white shadow-[0_0_80px_rgba(34,211,238,0.45)] transition group-hover:bg-slate-950">
                Ver proyectos
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-200 text-[#020617] transition group-hover:translate-x-1">
                  →
                </span>
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
            </a>

            <a
              href="#contact"
              className="group relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/10 px-11 py-5 text-lg font-black text-white shadow-[0_0_40px_rgba(168,85,247,0.18)] backdrop-blur-xl transition hover:-translate-y-2 hover:scale-[1.04] hover:border-cyan-300/70 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-cyan-300/20 to-white/0 opacity-0 transition group-hover:opacity-100" />

              <span className="relative flex items-center justify-center gap-4">
                Contactarme
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 transition group-hover:rotate-45 group-hover:border-cyan-200">
                  ↗
                </span>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Recuadro código */}
        <motion.div
          initial={{ opacity: 0, scale: 0.86, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
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
                role: "Frontend Developer",
              </p>
              <p className="ml-5 text-emerald-200">stack: "React + Tailwind",</p>
              <p className="ml-5 text-pink-200">
                focus: "clean UI & real apps",
              </p>
              <p className="text-purple-300">{"}"}</p>
            </div>

            <div className="relative mt-5 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-black text-cyan-200 text-center">4+</p>
                <p className="text-xs text-cyan-100/60 text-center">Projects</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-black text-cyan-200 text-center">UI</p>
                <p className="text-xs text-cyan-100/60 text-center">Premium</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 pt-4 ">
                <p className="text-2xl font-black text-cyan-200 text-center">OPEN</p>
                <p className="text-xs text-cyan-100/60 text-center">To work</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}