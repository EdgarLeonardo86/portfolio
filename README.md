# Portafolio · Edgar Quintana Pérez

Web personal hecha con Next.js 15, React, TypeScript y Tailwind CSS 4.

## Arrancar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Dónde se cambia cada cosa

| Quieres cambiar… | Archivo |
| --- | --- |
| Textos, proyectos, experiencia, tecnologías, enlaces | `src/data/site.ts` |
| Portada (titular y gráfico) | `src/components/Hero.tsx` |
| Menú superior | `src/components/Header.tsx` |
| Resto de secciones | `src/components/Sections.tsx` |
| Página de detalle de cada proyecto | `src/app/proyectos/[slug]/page.tsx` |
| Colores y tipografías | `src/app/globals.css` |

## Pendiente antes de publicar

1. **CV:** copia tu CV general en PDF a `public/cv-edgar-quintana.pdf`. Usa una versión neutra, no la adaptada a una oferta concreta.
2. **Enlaces de proyectos:** en `src/data/site.ts`, cada proyecto tiene `links: []`. Añade la demo o el GitHub solo cuando quieras que sean públicos, por ejemplo:
   `links: [{ label: "Ver demo", href: "https://..." }]`
3. **Capturas:** cuando tengas imágenes de los proyectos personales (sin fuentes ni datos sensibles), se pueden añadir a las tarjetas.

## Publicar en Vercel (gratis)

1. Sube el proyecto a un repositorio de GitHub.
2. Entra en https://vercel.com, inicia sesión con GitHub e importa el repositorio.
3. Pulsa **Deploy**. Cada vez que hagas `git push`, la web se actualiza sola.
4. Opcional: conecta un dominio propio desde la configuración del proyecto en Vercel.
