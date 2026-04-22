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

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Escríbeme y te ayudo a crear una página moderna, profesional y adaptada a tu negocio o proyecto.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

          {/* WhatsApp */}
          <a
            href="https://wa.me/+34674516605"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-semibold text-white transition"
          >
            WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:alexisrrh123@gmail.com"
            className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl text-white transition"
          >
            Email
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/alexisrrh"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-white transition"
          >
            Instagram
          </a>

        </div>

      </div>
    </section>
  );
}