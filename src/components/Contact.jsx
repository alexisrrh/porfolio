export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-black">
      <div className="max-w-4xl mx-auto text-center border border-white/10 rounded-2xl p-10 bg-zinc-900">

        <p className="text-red-400 uppercase text-sm tracking-widest">
          Contacto
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          ¿Quieres una web así?
        </h2>

        <p className="text-gray-400 mt-4">
          Escríbeme y te ayudo a crear una página profesional para tu negocio o proyecto.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

          <a
            href="https://wa.me/+34674516605"
            target="_blank"
            className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-semibold"
          >
            WhatsApp
          </a>

          <a
            href="mailto:alexisrrh123@gmail.com"
            className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl"
          >
            Email
          </a>

        </div>

      </div>
    </section>
  );
}