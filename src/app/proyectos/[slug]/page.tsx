import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";
import { Icon } from "@/components/Icon";
import { profile, projects } from "@/data/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} · ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="bg-navy-950 text-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-teal-300"
            >
              <Icon name="arrowLeft" size={16} /> Volver a proyectos
            </Link>
            <div className="mt-8 flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-teal-400/15 text-teal-300">
                <Icon name={project.icon} size={28} />
              </span>
              <div>
                <h1 className="font-display text-3xl font-bold sm:text-4xl">{project.title}</h1>
                {project.status && <p className="mt-1 text-sm text-teal-300">{project.status}</p>}
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{project.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="rounded-md bg-white/10 px-2.5 py-1 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">El problema</h2>
              <p className="mt-3 leading-relaxed text-slate-700">{project.problem}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">La solución</h2>
              <p className="mt-3 leading-relaxed text-slate-700">{project.solution}</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">Qué incluye</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-xl border border-slate-200 p-4 text-slate-700">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-teal-600" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">Lo que aprendí</h2>
            <ul className="mt-4 space-y-3">
              {project.learnings.map((l) => (
                <li key={l} className="border-l-4 border-teal-500 bg-mist px-5 py-3 leading-relaxed text-slate-700">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {project.note && <p className="text-sm italic text-slate-500">{project.note}</p>}

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-navy-900 px-5 font-semibold text-white transition hover:bg-navy-700"
                >
                  {l.label} <Icon name="external" size={16} />
                </a>
              ))}
            </div>
          )}

          <div className="rounded-2xl bg-navy-950 p-8 text-center text-white">
            <p className="font-display text-xl font-semibold">¿Necesitas algo parecido para tu empresa?</p>
            <a
              href="/#contacto"
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-teal-500 px-5 font-semibold text-navy-950 transition hover:bg-teal-400"
            >
              <Icon name="send" size={16} /> Contactar
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
