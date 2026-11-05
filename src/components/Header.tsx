import Link from "next/link";
import { Icon } from "./Icon";
import { profile } from "@/data/site";

const nav = [
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#tecnologias", label: "Tecnologías" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-teal-400/60 text-teal-300">
            <Icon name="code" size={18} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold sm:text-base">{profile.name}</span>
            <span className="block text-xs text-slate-300">{profile.tagline}</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 text-sm text-slate-200 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-teal-300">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-10 w-10 place-items-center rounded-lg text-slate-200 transition hover:bg-white/10 hover:text-white sm:grid"
          >
            <Icon name="github" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden h-10 w-10 place-items-center rounded-lg text-slate-200 transition hover:bg-white/10 hover:text-white sm:grid"
          >
            <Icon name="linkedin" />
          </a>
          <a
            href="/#contacto"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-teal-500 px-4 text-sm font-semibold text-navy-950 transition hover:bg-teal-400"
          >
            <Icon name="send" size={16} />
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
}
