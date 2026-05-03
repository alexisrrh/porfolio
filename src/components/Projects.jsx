function ProjectShowcase({ project, index }) {
  const [currentImage, setCurrentImage] = useState(0);
  const isReverse = index % 2 !== 0;

  useEffect(() => {
    if (!project.images?.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 2600);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <article className="group relative overflow-hidden rounded-[2.5rem] border border-cyan-300/15 bg-white/[0.07] p-4 shadow-[0_0_90px_rgba(34,211,238,0.09)] backdrop-blur-2xl">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.18),transparent_30%)] opacity-70" />

      <motion.div
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
      />

      <div
        className={`relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] ${
          isReverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Mockup */}
        <motion.div
          whileHover={{ rotate: isReverse ? -1.5 : 1.5, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-purple-500/20 blur-2xl opacity-80 transition group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#020617]/80 p-3 shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
            
            <div className="mb-3 flex items-center justify-between px-2">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs font-bold text-cyan-100/50">
                live-preview
              </span>
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] md:h-[430px]">
              <img
                src={project.images[currentImage]}
                alt={project.title}
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200">
                    Proyecto 0{index + 1}
                  </p>
                  <p className="mt-1 text-2xl font-black text-white">
                    {project.title}
                  </p>
                </div>

                <div className="hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-black backdrop-blur md:block">
                  Responsive
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {project.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => setCurrentImage(imgIndex)}
                  className={`h-2 rounded-full transition-all ${
                    currentImage === imgIndex
                      ? "w-12 bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <div className="relative p-2 lg:p-8">
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
            {project.label}
          </div>

          <h3 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">
            {project.title}
          </h3>

          <p className="mt-6 text-lg leading-8 text-cyan-50/75">
            {project.description}
          </p>

          <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-[#020617]/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-purple-300">
              Resultado
            </p>
            <p className="mt-3 text-base leading-7 text-cyan-50/80">
              {project.result}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-black text-cyan-50/80 backdrop-blur transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="group/btn relative overflow-hidden rounded-[1.6rem] p-[2px] transition hover:-translate-y-1 hover:scale-[1.03]"
            >
              <span className="absolute inset-0 rounded-[1.6rem] bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#3b82f6,#a855f7,#22d3ee)] blur-md" />

              <span className="relative flex items-center justify-center gap-3 rounded-[1.6rem] bg-[#020617] px-7 py-4 font-black text-white">
                Ver demo
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-200 text-[#020617] transition group-hover/btn:translate-x-1">
                  →
                </span>
              </span>
            </a>

            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="group/btn relative overflow-hidden rounded-[1.6rem] p-[2px] transition hover:-translate-y-1 hover:scale-[1.03]"
            >
              <span className="absolute inset-0 rounded-[1.6rem] bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#3b82f6,#a855f7,#22d3ee)] blur-md" />

              <span className="relative flex items-center justify-center gap-3 rounded-[1.6rem] bg-[#020617] px-7 py-4 font-black text-white">
                Ver código
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-200 text-[#020617] transition group-hover/btn:translate-x-1">
                  →
                </span>
              </span>
            </a>

          </div>
        </div>
      </div>
    </article>
  );
}