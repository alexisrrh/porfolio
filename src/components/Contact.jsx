function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-5 w-5 fill-current"
    >
      <path d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.14.18 1.9 2.9 4.61 4.07.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.28.23-.64.23-1.18.16-1.28-.07-.11-.25-.18-.52-.32z" />
      <path d="M16.03 3.2C8.95 3.2 3.2 8.94 3.2 16.03c0 2.27.6 4.49 1.74 6.44L3 29l6.73-1.77a12.77 12.77 0 0 0 6.3 1.62h.01c7.08 0 12.83-5.75 12.83-12.83C28.86 8.95 23.11 3.2 16.03 3.2zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.99 1.05 1.06-3.89-.26-.4a10.56 10.56 0 0 1-1.62-5.58c0-5.84 4.76-10.6 10.61-10.6 2.83 0 5.48 1.1 7.48 3.1a10.5 10.5 0 0 1 3.11 7.49c0 5.85-4.76 10.61-10.59 10.61z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 6.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8zm0 1.8A3.4 3.4 0 1 0 15.4 12 3.4 3.4 0 0 0 12 8.6z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.22 1.83 1.22 1.08 1.82 2.82 1.29 3.5.98.11-.76.42-1.29.76-1.59-2.67-.3-5.47-1.32-5.47-5.86 0-1.29.47-2.35 1.22-3.18-.12-.3-.53-1.5.12-3.12 0 0 1-.31 3.3 1.21a11.6 11.6 0 0 1 6 0c2.29-1.52 3.29-1.21 3.29-1.21.66 1.62.25 2.82.13 3.12.76.83 1.22 1.89 1.22 3.18 0 4.55-2.8 5.56-5.48 5.85.43.37.81 1.09.81 2.21v3.28c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-zinc-900 p-10 text-center">
        <p className="text-sm uppercase tracking-widest text-red-400">
          Contacto
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          ¿Necesitas una web profesional para tu negocio?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Escríbeme y te ayudo a crear una página moderna, profesional y adaptada
          a tu negocio o proyecto.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
            href="https://wa.me/+34674516605"
            target="_blank"
            rel="noreferrer"
           className="flex items-center gap-2 rounded-xl bg-green-600/90 backdrop-blur px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>

          <a
            href="mailto:alexisrrh123@gmail.com"
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-white transition hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <MailIcon />
            <span>Email</span>
          </a>

          <a
            href="https://instagram.com/alexisrrh"
            target="_blank"
            rel="noreferrer"
           className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:opacity-90 hover:shadow-[0_0_20px_rgba(255,0,100,0.6)]"
            ><InstagramIcon />
            <span>Instagram</span>
          </a>

          <a
            href="https://github.com/alexisrrh"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-white transition hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            ><GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}