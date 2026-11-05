import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { education, experience, profile, projects, services, technologies } from "@/data/site";

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">{title}</h2>
    </div>
  );
}

export function Services() {
  return (
    <section aria-label="Servicios" className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="flex gap-4 bg-white px-6 py-8">
            <Icon name={s.icon} size={30} className="shrink-0 text-teal-600" />
            <div>
              <h3 className="font-semibold leading-snug text-navy-900">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Portafolio" title="Proyectos destacados" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/proyectos/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative grid h-32 place-items-center bg-gradient-to-br from-navy-800 to-teal-600 text-white">
                <Icon name={p.icon} size={44} />
                {p.status && (
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-navy-900">
                    {p.status}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="flex items-start justify-between gap-3 font-display text-lg font-semibold text-navy-900">
                  {p.title}
                  <Icon
                    name="arrowRight"
                    size={18}
                    className="mt-1 shrink-0 text-teal-600 transition group-hover:translate-x-1"
                  />
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[280px_1fr]">
        <Image
          src="/edgar.jpg"
          alt={`Foto de ${profile.name}`}
          width={560}
          height={700}
          className="mx-auto w-56 rounded-2xl object-cover shadow-lg md:w-full"
          priority={false}
        />
        <div>
          <SectionTitle eyebrow="Sobre mí" title="Tecnología útil para personas reales" />
          <div className="space-y-4 text-lg leading-relaxed text-slate-700">
            <p>
              Soy profesional de la informática en Gran Canaria, con más de siete años de experiencia en soporte
              técnico, mantenimiento de software y gestión de activos IT.
            </p>
            <p>
              Me apasionan dos cosas: el desarrollo de software y las energías renovables. Por eso construyo
              aplicaciones de gestión a medida y herramientas de datos que ayudan a entender cómo se comporta un
              sistema, anticipar cuándo puede fallar y tomar mejores decisiones.
            </p>
            <p>
              Lo que más me gusta es el punto donde la tecnología se encuentra con quien la usa: desarrollar,
              probar a fondo, documentar y acompañar al equipo para que la herramienta se adopte de verdad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="bg-mist py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Trayectoria" title="Experiencia" />
          <ol className="space-y-8 border-l-2 border-teal-500/40 pl-6">
            {experience.map((e) => (
              <li key={e.company} className="relative">
                <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-mist bg-teal-500" />
                <p className="text-sm font-semibold text-teal-700">{e.period}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy-900">{e.role}</h3>
                <p className="text-sm font-medium text-slate-500">{e.company}</p>
                <p className="mt-2 leading-relaxed text-slate-700">{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionTitle eyebrow="Formación" title="Estudios" />
          <ul className="space-y-4">
            {education.map((ed) => (
              <li key={ed.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-navy-900">{ed.title}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {ed.place} · {ed.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Technologies() {
  return (
    <section id="tecnologias" className="bg-navy-950 py-14 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center">
        <h2 className="shrink-0 font-display text-2xl font-semibold">Tecnologías que utilizo</h2>
        <ul className="flex flex-wrap gap-2.5 lg:justify-end lg:flex-1">
          {technologies.map((t) => (
            <li key={t} className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  const links = [
    { icon: "mail", label: profile.email, href: `mailto:${profile.email}` },
    { icon: "linkedin", label: "LinkedIn", href: profile.linkedin },
    { icon: "github", label: "GitHub", href: profile.github },
  ];
  return (
    <section id="contacto" className="py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Contacto</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Hablemos de tu proyecto</h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          ¿Tienes un proceso que se ha quedado pequeño para el Excel o datos que no estás aprovechando? Cuéntamelo.
        </p>
        <ul className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 font-medium text-navy-900 transition hover:border-teal-500 hover:text-teal-700 sm:w-auto"
              >
                <Icon name={l.icon} size={18} />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500">
          <Icon name="pin" size={16} /> {profile.location}
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
