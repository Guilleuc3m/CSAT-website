# CSAT — Web estática (UC3M)

Web institucional del laboratorio **CSAT (Center for Space Technology & nano/micro SATellites)**.
HTML + CSS + JavaScript puro, sin build ni dependencias. Lista para GitHub Pages o el bucket GCS.

## Estado de esta versión (primera tanda — núcleo)

| Página | Archivo | Estado |
|---|---|---|
| Home | `index.html` | ✅ Completa (hero animado, about, tarjetas, noticias placeholder) |
| Team | `team.html` | ✅ Completa (Faculty + Staff con placeholders) |
| Contact | `contact.html` | ✅ Completa (formulario + info) |
| Location | `location.html` | 🕓 Stub "Coming soon" |
| CSAT – Leganés / PTL / Colmenarejo | `facilities-*.html` | 🕓 Stub "Coming soon" |
| Blog / News | `blog.html` | 🕓 Stub "Coming soon" |

Todas las páginas comparten cabecera y pie, y ya tienen navegación completa, cambio de
idioma (EN/ES), modo claro/oscuro y diseño responsive.

## Cómo verla en local

No hay build. Basta con abrir `index.html`, aunque para que el cambio de página y las
rutas funcionen bien conviene un servidor estático. Con la extensión "Live Server" de
VS Code, o el servidor incluido en este repo:

```powershell
powershell -File .claude/dev-server.ps1 -Port 5500 -Root .
# luego abre http://localhost:5500
```

## Estructura

```
Web files/
├── index.html · team.html · contact.html   (núcleo)
├── location.html · facilities-*.html · blog.html  (stubs)
├── css/
│   ├── global.css        ← tema, cabecera, pie, botones, responsive
│   └── pages/            ← home.css, team.css, contact.css
├── js/
│   ├── i18n.js           ← diccionario EN/ES + motor de traducción
│   ├── global.js         ← tema, idioma, menú móvil, scroll, animaciones
│   └── pages/            ← home.js (starfield), contact.js (formulario)
└── images/  (logo/, team/, facilities/, blog/)
```

## Tareas pendientes / cómo continuar

1. **Logo** — el PNG actual (`images/logo/csat-logo.png`) es cuadrado con fondo blanco,
   por eso se muestra dentro de un "tile" blanco redondeado. Si más adelante tienes una
   versión **horizontal y con fondo transparente**, sustituye el archivo y quita el fondo
   blanco en `.brand img` / `.footer-brand img` (`css/global.css`).
2. **Formulario de contacto** — abre `js/pages/contact.js` y reemplaza
   `YOUR_ACCESS_KEY_HERE` por tu *access key* gratuita de [Web3Forms](https://web3forms.com).
   Hasta entonces el formulario avisa de que no está configurado.
3. **Traducción al español** — la interfaz (menú, botones, footer) ya está en EN y ES.
   Para traducir el resto, rellena las claves que faltan en el objeto `es` de `js/i18n.js`
   (las que no existan usan el inglés automáticamente). Cada texto traducible lleva un
   atributo `data-i18n="clave"` en el HTML.
4. **Imágenes** — reemplaza los placeholders (`LAB IMAGE · PLACEHOLDER`, avatares con
   iniciales, thumbnails de noticias) por imágenes reales en `images/`.
5. **Segunda tanda** — desarrollar Location (con iframes de Google Maps), las 3 páginas de
   Facilities y el Blog partiendo de sus stubs, que ya traen cabecera/pie listos.

## Notas técnicas

- El tema (claro/oscuro) se guarda en `localStorage` y se aplica antes del primer pintado
  para evitar parpadeo. Respeta `prefers-color-scheme` en la primera visita.
- El idioma también se guarda en `localStorage`.
- Las animaciones respetan `prefers-reduced-motion`.
- Las fuentes (Inter) se cargan desde Google Fonts con fallback a fuentes del sistema, por
  lo que la web sigue funcionando sin conexión (con otra tipografía).
