# Contexto del Proyecto: Web del Laboratorio CSAT (UC3M)

## Resumen del Proyecto

Web institucional e informativa para el laboratorio **CSAT (Center for Space Technology & nano/micro SATellites)** de la Universidad Carlos III de Madrid (UC3M).

---

## Hosting y Tecnología

- **Fase de desarrollo:** GitHub Pages (repositorio propio, control total)
- **Fase de producción:** Bucket de Google Cloud Storage (GCS) gestionado por el SDIC de la UC3M, bajo el dominio `csat.uc3m.es`
- **Tipo de web:** Estrictamente estática — sin backend, sin base de datos, sin procesamiento en servidor
- **Tecnologías:** HTML, CSS, JavaScript puro (sin frameworks ni generadores de sitios estáticos)
- **Compatibilidad:** Diseño responsive — debe verse correctamente en escritorio, tablet y móvil

---

## Idiomas y Tema Visual

- **Idioma base:** Inglés
- **Futuro:** Versión en español (la estructura debe contemplarlo desde el principio)
- El usuario podrá cambiar entre **inglés y español** mediante un botón en la cabecera
- El usuario podrá cambiar entre **modo claro y modo oscuro** mediante un botón en la cabecera
- Ambos botones deben ser visibles y accesibles desde cualquier página

---

## Paleta de Colores y Estilo Visual

- No hay colores institucionales predefinidos — libertad total de diseño
- El estilo debe ser **visualmente atractivo, moderno y tecnológico**, no minimalista ni sobrio
- Se valoran animaciones, interactividad y elementos visuales originales
- La web debe transmitir **seriedad académica** combinada con **dinamismo tecnológico/espacial**
- Sugerencia de dirección visual: tonos oscuros (azul marino, negro espacial) con acentos brillantes (azul eléctrico, blanco), evocando el espacio y la tecnología satelital

---

## Estructura de Navegación

La cabecera contiene el logo del laboratorio y el menú de navegación. El menú tiene la siguiente estructura:

```
[Logo CSAT]   Home   About Us ▾   Facilities ▾   Contact   [EN/ES]  [☀/🌙]
                        │               │
                      Team         CSAT - Leganés
                      Location     CSAT - PTL
                                   CSAT - Colmenarejo
```

- **Home** — enlace directo a la página principal
- **About Us** — desplegable con: Team / Location
- **Facilities** — desplegable con: CSAT - Leganés / CSAT - PTL / CSAT - Colmenarejo
- **Contact** — enlace directo a la página de contacto
- Botón de cambio de idioma (EN/ES)
- Botón de cambio de tema (claro/oscuro)

---

## Páginas y Contenido

### 1. Home (index.html)

**Secciones:**

- **Cabecera/Hero:** Título grande "UC3M — CSAT" con subtítulo "Center for Space Technology & nano/micro SATellites". Puede tener imagen o vídeo de fondo (espacio, tierra, satélite). Efecto visual llamativo bienvenido.
- **Texto descriptivo del laboratorio:** Párrafo breve explicando qué es el CSAT. Puede acompañarse de una foto.
- **Secciones destacadas (sugeridas):** Tarjetas o bloques visuales que enlacen a las principales secciones (Facilities, Team, Contact) para facilitar la navegación desde la portada.
- **Noticias/Blog (sugerido):** Bloque que muestre las últimas entradas del blog (últimas 2-3), con enlace a la página completa del blog.
- **Footer (pie de página):** Imagen alargada (banner) + información de contacto básica + copyright UC3M. Aparece en todas las páginas.

---

### 2. Team (team.html)

Dos grupos de personas:

**Faculty:**
- Andrés — foto, nombre, enlace LinkedIn, enlace mailto
- Diego — foto, nombre, enlace LinkedIn, enlace mailto
- Gabriele — foto, nombre, enlace LinkedIn, enlace mailto

**Staff:**
- Guillermo — foto, nombre, enlace LinkedIn, enlace mailto

**Diseño sugerido:** Tarjetas con foto de perfil circular o cuadrada con bordes redondeados, nombre, cargo, y dos iconos (LinkedIn y email). Hover sobre la tarjeta con efecto visual.

*Nota: Las fotos reales e información de contacto se añadirán posteriormente. Usar placeholders por ahora.*

---

### 3. Location (location.html)

- Pequeño texto introductivo sobre las ubicaciones del laboratorio
- **3 zonas** con:
  - Mapa embebido de Google Maps (iframe estático, compatible con hosting estático)
  - Pequeño texto descriptivo de cada ubicación
  - Enlace independiente a Google Maps para abrir en una nueva pestaña

Las 3 ubicaciones corresponden a los 3 campus/instalaciones: Leganés, PTL y Colmenarejo.

---

### 4. CSAT - Leganés (facilities-leganes.html)

- Texto introductivo + imagen principal
- Subsecciones con título, texto e imagen cada una
- Contenido real a añadir posteriormente — usar placeholders

---

### 5. CSAT - PTL (facilities-ptl.html)

- Misma estructura que CSAT - Leganés
- Contenido real a añadir posteriormente — usar placeholders

---

### 6. CSAT - Colmenarejo (facilities-colmenarejo.html)

- Misma estructura que CSAT - Leganés
- Contenido real a añadir posteriormente — usar placeholders

---

### 7. Contact (contact.html)

- Pequeño formulario de contacto (nombre, email, asunto, mensaje, botón enviar)
  - El formulario debe integrarse con un servicio externo como **Formspree** o **Web3Forms** (procesamiento en cliente, compatible con hosting estático)
- Enlace directo de correo electrónico (mailto:)
- Opcionalmente: dirección postal o información adicional de contacto

---

### 8. Blog / News (blog.html + entradas individuales)

- Página índice del blog con listado de entradas (título, fecha, extracto, enlace a la entrada)
- Cada entrada del blog es una página HTML individual
- Las entradas se añaden manualmente — no hay sistema dinámico
- La página índice también se actualiza manualmente al añadir nuevas entradas
- Diseño de las entradas: limpio y legible, con imagen de cabecera opcional

---

## Elementos Comunes a Todas las Páginas

- **Cabecera (header):** Logo + menú de navegación + botones de idioma y tema. Fija o con efecto scroll.
- **Footer:** Banner/imagen alargada + información básica. Idéntico en todas las páginas.
- **Responsive:** Menú hamburguesa en móvil, diseño adaptado a distintos tamaños de pantalla.
- **Modo oscuro/claro:** Toggle global que afecta a toda la web mediante variables CSS.

---

## Animaciones y Efectos Sugeridos

- Efecto parallax o partículas en el hero de la Home (evocando el espacio)
- Animaciones de entrada (fade-in, slide-up) al hacer scroll en las secciones
- Hover sobre tarjetas del equipo con efecto de elevación o revelación de información
- Transición suave entre modo claro y oscuro
- Menú de navegación con efecto de subrayado animado en hover
- Cabecera que cambia de aspecto al hacer scroll (efecto sticky con sombra o cambio de opacidad)

---

## Estructura de Archivos Recomendada

```
csat-web/
├── index.html
├── team.html
├── location.html
├── facilities-leganes.html
├── facilities-ptl.html
├── facilities-colmenarejo.html
├── contact.html
├── blog.html
├── blog/
│   └── (entradas individuales del blog)
├── css/
│   ├── global.css        ← estilos comunes (cabecera, footer, colores, tipografía)
│   ├── dark-mode.css     ← variables de modo oscuro
│   └── pages/
│       ├── home.css
│       ├── team.css
│       └── ...
├── js/
│   ├── global.js         ← menú, dark mode toggle, language toggle
│   └── pages/
│       ├── home.js       ← animaciones del hero, partículas, etc.
│       └── ...
├── images/
│   ├── logo/
│   ├── team/
│   ├── facilities/
│   └── blog/
└── contexto.md           ← este archivo
```

---

## Consideraciones Técnicas

- Los iframes de Google Maps son estáticos y compatibles con hosting estático
- Los formularios de contacto usan Formspree o Web3Forms (procesamiento en cliente)
- El cambio de idioma EN/ES se implementa con JavaScript puro (sin WPML ni plugins)
- El modo oscuro/claro se implementa con variables CSS y toggle JS, guardando la preferencia en localStorage
- No usar librerías externas pesadas — si se usan, cargarlas desde CDN
- Todo el código debe ser autocontenido y funcionar offline (excepto mapas y formularios)

---

## Estado Actual

- Web actualmente en construcción en WordPress (UC3M, gestionado) con Divi + tema Divi
- Se decide migrar a web estática por mayor control, rendimiento y flexibilidad
- La web de WordPress se mantiene activa mientras se desarrolla la versión estática
- Primera versión completa se desplegará en GitHub Pages para revisión
- Versión definitiva se subirá al bucket GCS de la UC3M bajo el dominio `csat.uc3m.es`
