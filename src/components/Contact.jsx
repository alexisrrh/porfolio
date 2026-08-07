import { profile } from "../data/profile";
import { useTranslation } from "react-i18next";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current">
      <path d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.14.18 1.9 2.9 4.61 4.07.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.28.23-.64.23-1.18.16-1.28-.07-.11-.25-.18-.52-.32z" />
      <path d="M16.03 3.2C8.95 3.2 3.2 8.94 3.2 16.03c0 2.27.6 4.49 1.74 6.44L3 29l6.73-1.77a12.77 12.77 0 0 0 6.3 1.62h.01c7.08 0 12.83-5.75 12.83-12.83C28.86 8.95 23.11 3.2 16.03 3.2zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.99 1.05 1.06-3.89-.26-.4a10.56 10.56 0 0 1-1.62-5.58c0-5.84 4.76-10.6 10.61-10.6 2.83 0 5.48 1.1 7.48 3.1a10.5 10.5 0 0 1 3.11 7.49c0 5.85-4.76 10.61-10.59 10.61z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.03c-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222v3.293c0 .319.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.778-.773 1.778-1.729V1.73C24 .774 23.206 0 22.222 0h.003z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useTranslation();
  const actions = [
    {
      label: "Email",
      text: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon />,
      className:
        "border border-cyan-300/20 bg-cyan-300/10 hover:border-cyan-300/60 hover:bg-cyan-300/15 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]",
    },
    {
      label: "LinkedIn",
      text: t("contact.professionalProfile"),
      href: profile.linkedin,
      icon: <LinkedinIcon />,
      className:
        "border border-blue-300/20 bg-blue-400/15 hover:border-blue-300/60 hover:bg-blue-400/20 hover:shadow-[0_0_35px_rgba(96,165,250,0.35)]",
    },
    {
      label: "GitHub",
      text: t("contact.viewCode"),
      href: profile.github,
      icon: <GitHubIcon />,
      className:
        "border border-white/15 bg-white/10 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]",
    },
    {
      label: "CV",
      text: t("contact.updatedPdf"),
      href: profile.cvPath,
      icon: <DocumentIcon />,
      className:
        "border border-purple-300/20 bg-purple-400/15 hover:border-purple-300/60 hover:bg-purple-400/20 hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]",
    },
    {
      label: "WhatsApp",
      text: t("contact.directContact"),
      href: profile.whatsapp,
      icon: <WhatsAppIcon />,
      className:
        "bg-green-600/90 hover:bg-green-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.55)]",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.16),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="text-2xl  font-black uppercase tracking-[0.4em] text-cyan-300">
          {t("contact.eyebrow")}
        </p>

        <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
          {t("contact.titleLine1")}
          <br />
          <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t("contact.titleHighlight")}
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-cyan-50/70">
          {t("contact.description")}
        </p>
<div className="mt-12 flex flex-wrap justify-center gap-4">
  {actions.map((item) => (
    <a
      key={item.label}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={`${item.label}: ${item.text}`}
      className={`group flex h-14 w-14 items-center justify-center rounded-2xl transition hover:-translate-y-1 hover:scale-[1.06] sm:h-auto sm:w-auto sm:justify-start sm:gap-3 sm:px-5 sm:py-3 ${item.className}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/20 text-white backdrop-blur sm:h-9 sm:w-9">
        {item.icon}
      </span>

      <div className="hidden text-left sm:block">
        <p className="font-bold text-white">{item.label}</p>
        <p className="text-xs text-white/60">{item.text}</p>
      </div>

      <span className="ml-2 hidden text-white/50 transition group-hover:translate-x-1 sm:block">
        →
      </span>
    </a>
  ))}
</div>

      </div>
    </section>
  );
}
