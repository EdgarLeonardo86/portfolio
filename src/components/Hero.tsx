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

// Composición propia en SVG: curva de generación + panel de indicadores.
function HeroVisual() {
  const bars = [38, 52, 46, 68, 74, 61, 82, 90];
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Generación prevista</p>
            <p className="mt-1 font-display text-2xl font-semibold">Mañana · 24 h</p>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-400/15 text-teal-300">
            <Icon name="sun" size={22} />
          </span>
        </div>

        <svg viewBox="0 0 320 140" className="mt-6 w-full">
          <defs>
            <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2fd0bd" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#2fd0bd" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[35, 70, 105].map((y) => (
            <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="white" strokeOpacity="0.08" />
          ))}
          <path
            d="M0 132 C40 132 60 128 85 100 S130 22 160 20 S220 70 240 100 S290 132 320 132 L320 140 L0 140 Z"
            fill="url(#area)"
          />
          <path
            d="M0 132 C40 132 60 128 85 100 S130 22 160 20 S220 70 240 100 S290 132 320 132"
            fill="none"
            stroke="#6ee6d5"
            strokeWidth="2.5"
          />
          <path
            d="M0 134 C45 134 65 126 90 104 S135 36 160 34 S215 78 238 104 S292 134 320 134"
            fill="none"
            stroke="white"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 5"
          />
        </svg>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { k: "Precisión", v: "Validada" },
            { k: "Alertas", v: "Activas" },
            { k: "Horizonte", v: "1–6 h" },
          ].map((s) => (
            <div key={s.k} className="rounded-lg bg-white/[0.06] px-3 py-2">
              <p className="text-[11px] text-slate-400">{s.k}</p>
              <p className="text-sm font-semibold">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-8 -left-6 hidden rounded-xl border border-white/15 bg-navy-900/95 p-4 shadow-xl sm:block">
        <p className="mb-2 flex items-center gap-2 text-xs text-slate-300">
          <Icon name="wind" size={14} className="text-teal-300" /> Mix renovable
        </p>
        <div className="flex h-14 items-end gap-1.5">
          {bars.map((h, i) => (
            <span key={i} className="w-3 rounded-sm bg-teal-400/80" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
