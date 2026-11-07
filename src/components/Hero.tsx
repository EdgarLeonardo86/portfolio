import { Icon } from "./Icon";
import { profile } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Fondo: degradado + rejilla suave */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,179,161,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(38,64,106,0.8),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">{profile.name}</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl">
            Desarrollo de software
            <br />y <span className="text-teal-300">análisis de datos</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Creo aplicaciones y herramientas de datos que convierten la información en decisiones, con foco en
            energía renovable, operación y mejora de procesos.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-teal-500 px-6 font-semibold text-navy-950 transition hover:bg-teal-400"
            >
              Ver proyectos
              <Icon name="arrowRight" size={18} />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/40 px-6 font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              <Icon name="download" size={18} />
              Descargar CV
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

const DATA_URL =
  "https://raw.githubusercontent.com/EdgarLeonardo86/energia-canarias/main/data/prediccion_hoy.json";
const REPO_URL = "https://github.com/EdgarLeonardo86/energia-canarias";

type Prediccion = {
  fecha: string;
  prediccion_eolica_pct: number | null;
  real_ayer_pct: number | null;
  error_ayer_pp: number | null;
  renovable_ayer_pct: number | null;
  mae_30d: number | null;
  n_dias_mae?: number | null;
};

// Lee la predicción del día del repositorio energia-canarias. Se refresca cada 30 minutos.
async function getPrediccion(): Promise<Prediccion | null> {
  try {
    const res = await fetch(DATA_URL, { next: { revalidate: 1800 } });
    if (!res.ok) return null;
    return (await res.json()) as Prediccion;
  } catch {
    return null;
  }
}

const pct = (v: number | null | undefined, unit = "%") =>
  v === null || v === undefined
    ? "—"
    : `${v.toLocaleString("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} ${unit}`;

const fechaLarga = (iso: string) => {
  const f = new Date(`${iso}T12:00:00`).toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return f.charAt(0).toUpperCase() + f.slice(1);
};

// Panel con la predicción real de cada día; si no hay datos, muestra una versión sin cifras.
async function HeroVisual() {
  const p = await getPrediccion();

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Predicción eólica · Canarias</p>
            <p className="mt-1 font-display text-lg font-semibold">
              {p ? fechaLarga(p.fecha) : "Actualizada cada día"}
            </p>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-400/15 text-teal-300">
            <Icon name="wind" size={22} />
          </span>
        </div>

        {p && p.prediccion_eolica_pct !== null ? (
          <div className="mt-6">
            <p className="font-display text-6xl font-bold text-teal-300 tabular-nums">{pct(p.prediccion_eolica_pct)}</p>
            <p className="mt-2 text-sm text-slate-300">
              de la electricidad de las islas será eólica hoy, según mi modelo.
            </p>
          </div>
        ) : (
          <p className="mt-6 text-sm text-slate-300">
            Un modelo propio predice cada mañana qué parte de la electricidad de Canarias será eólica.
          </p>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            { k: "Eólica real ayer", v: pct(p?.real_ayer_pct) },
            { k: "Error ayer", v: pct(p?.error_ayer_pp, "p.p.") },
            {
              k: p?.n_dias_mae ? `Error medio (${p.n_dias_mae} d)` : "Error medio",
              v: pct(p?.mae_30d, "p.p."),
            },
            { k: "Renovable ayer", v: pct(p?.renovable_ayer_pct) },
          ].map((s) => (
            <div key={s.k} className="rounded-lg bg-white/[0.06] px-3 py-2">
              <p className="text-[11px] text-slate-400">{s.k}</p>
              <p className="text-sm font-semibold tabular-nums">{s.v}</p>
            </div>
          ))}
        </div>

        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-teal-300"
        >
          Datos de REE y Open-Meteo · ver el proyecto
          <Icon name="arrowRight" size={14} />
        </a>
      </div>

    </div>
  );
}
