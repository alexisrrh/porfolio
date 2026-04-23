const services = [
  {
    title: "Web para marcas y negocios",
    text: "Diseño páginas modernas para mostrar tu marca, servicios o proyecto de forma profesional.",
  },
  {
    title: "Diseño visual atractivo",
    text: "Interfaces limpias, oscuras y modernas adaptadas a móvil y con estilo profesional.",
  },
  {
    title: "Integración con redes",
    text: "Conexión con Instagram, WhatsApp, YouTube o Spotify para mostrar contenido fácilmente.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 bg-black">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <p className="text-red-400 uppercase text-md tracking-widest">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Qué puedo hacer por tu negocio
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-center">
          {services.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-red-500/30 transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}