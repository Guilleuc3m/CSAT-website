/* =========================================================================
   CSAT — Internationalisation (EN / ES)
   Pure-JS dictionary. Markup uses:
     data-i18n="key"              -> sets textContent
     data-i18n-html="key"         -> sets innerHTML (for strings with markup)
     data-i18n-attr="placeholder:key, aria-label:key2"  -> sets attributes
   English is fully populated. Spanish holds the UI strings now; any key not
   present in `es` falls back to `en`, so adding Spanish later = filling gaps.
   ========================================================================= */
(function () {
  const I18N = {
    en: {
      /* --- nav / common UI --- */
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.team": "Team",
      "nav.location": "Location",
      "nav.facilities": "Facilities",
      "nav.fac_leganes": "CSAT — Leganés",
      "nav.fac_ptl": "CSAT — PTL",
      "nav.fac_colmenarejo": "CSAT — Colmenarejo",
      "nav.contact": "Contact",
      "nav.blog": "News",
      "lang.toggle": "ES",
      "lang.label": "Switch language",
      "theme.label": "Toggle dark mode",
      "menu.label": "Open menu",

      /* --- footer --- */
      "footer.tagline": "Center for Space Technology & nano/micro SATellites",
      "footer.explore": "Explore",
      "footer.contact": "Contact",
      "footer.address": "Universidad Carlos III de Madrid · Leganés, Spain",
      "footer.copyright": "© 2026 Universidad Carlos III de Madrid — CSAT. All rights reserved.",
      "footer.banner": "Reaching for orbit",

      /* --- "coming soon" stub pages --- */
      "soon.eyebrow": "Coming soon",
      "soon.body": "This section is being prepared and will be available shortly. In the meantime, feel free to explore the rest of the site or get in touch.",
      "soon.home": "Back to home",
      "soon.contact": "Contact us",

      /* --- home --- */
      "home.hero.eyebrow": "UC3M · Space Technology Lab",
      "home.hero.title": "UC3M — CSAT",
      "home.hero.subtitle": "Center for Space Technology & nano/micro SATellites",
      "home.hero.cta_primary": "Explore our facilities",
      "home.hero.cta_secondary": "Meet the team",
      "home.hero.scroll": "Scroll to discover",

      "home.about.eyebrow": "Who we are",
      "home.about.title": "Advancing small-satellite technology",
      "home.about.body": "CSAT is the Center for Space Technology and nano/micro SATellites at Universidad Carlos III de Madrid. We design, build and test small satellite platforms and subsystems, bridging rigorous academic research with hands-on engineering across our laboratories in the Madrid region.",
      "home.about.stat1": "Campuses",
      "home.about.stat2": "Research areas",
      "home.about.stat3": "Founded",

      "home.explore.eyebrow": "Navigate",
      "home.explore.title": "Discover CSAT",
      "home.explore.facilities.title": "Facilities",
      "home.explore.facilities.body": "Three laboratories equipped for satellite design, assembly and testing.",
      "home.explore.team.title": "Team",
      "home.explore.team.body": "Meet the faculty and staff driving our research forward.",
      "home.explore.contact.title": "Contact",
      "home.explore.contact.body": "Get in touch about collaborations, visits and opportunities.",
      "home.explore.more": "Learn more",

      "home.news.eyebrow": "Latest",
      "home.news.title": "News & updates",
      "home.news.all": "View all news",
      "home.news.placeholder.title": "Coming soon",
      "home.news.placeholder.body": "Our news feed will appear here. Add your first entry from the blog section.",

      /* --- team --- */
      "team.hero.eyebrow": "About Us",
      "team.hero.title": "Our Team",
      "team.hero.subtitle": "The faculty and staff behind CSAT's research and operations.",
      "team.faculty": "Faculty",
      "team.staff": "Staff",
      "team.role.faculty": "Faculty Member",
      "team.role.director": "Director",
      "team.role.staff": "Laboratory Staff",
      "team.linkedin": "LinkedIn profile",
      "team.email": "Send email",
      "team.note": "Some contact links are still being added.",

      /* --- contact --- */
      "contact.hero.eyebrow": "Get in touch",
      "contact.hero.title": "Contact CSAT",
      "contact.hero.subtitle": "Questions, collaborations or visits — we'd love to hear from you.",
      "contact.form.title": "Send us a message",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.subject": "Subject",
      "contact.form.message": "Message",
      "contact.form.name_ph": "Your name",
      "contact.form.email_ph": "you@example.com",
      "contact.form.subject_ph": "What is this about?",
      "contact.form.message_ph": "Write your message…",
      "contact.form.send": "Send message",
      "contact.form.sending": "Sending…",
      "contact.form.success": "Thanks! Your message has been sent.",
      "contact.form.error": "Something went wrong. Please try again or email us directly.",
      "contact.info.title": "Reach us directly",
      "contact.info.email_label": "Email",
      "contact.info.address_label": "Address",
      "contact.info.address": "Universidad Carlos III de Madrid, Avda. de la Universidad 30, 28911 Leganés, Madrid, Spain"
    },

    es: {
      /* UI strings translated now; page body falls back to EN until filled */
      "nav.home": "Inicio",
      "nav.about": "Sobre nosotros",
      "nav.team": "Equipo",
      "nav.location": "Ubicación",
      "nav.facilities": "Instalaciones",
      "nav.fac_leganes": "CSAT — Leganés",
      "nav.fac_ptl": "CSAT — PTL",
      "nav.fac_colmenarejo": "CSAT — Colmenarejo",
      "nav.contact": "Contacto",
      "nav.blog": "Noticias",
      "nav.stellarsat_overview": "Descripción del programa",
      "nav.stellarsat_site": "Sitio web del proyecto",
      "lang.toggle": "EN",
      "lang.label": "Cambiar idioma",
      "theme.label": "Alternar modo oscuro",
      "menu.label": "Abrir menú",

      "footer.tagline": "Centro de tecnología espacial y nano/micro SATélites",
      "footer.explore": "Explorar",
      "footer.contact": "Contacto",
      "footer.address": "Universidad Carlos III de Madrid · Leganés, España",
      "footer.copyright": "© 2026 Universidad Carlos III de Madrid — CSAT. Todos los derechos reservados.",
      "footer.banner": "Rumbo a la órbita",

      "soon.eyebrow": "Próximamente",
      "soon.body": "Esta sección se está preparando y estará disponible en breve. Mientras tanto, explora el resto de la web o ponte en contacto con nosotros.",
      "soon.home": "Volver al inicio",
      "soon.contact": "Contáctanos",

      "location.eyebrow": "Sobre nosotros",
      "location.title": "Dónde encontrarnos",
      "location.intro": "CSAT opera en tres sedes de la UC3M en la Comunidad de Madrid: el campus de Leganés, el Parque Científico (PTL) y Colmenarejo. Nuestra instalación principal se encuentra en el campus de Leganés.",
      "location.directions": "Cómo llegar",
      "location.desc_leganes": "Nuestra instalación principal, situada en el campus de Leganés de la UC3M, al sur de Madrid. Alberga nuestra sala limpia, los laboratorios de integración y el centro de control de misiones.",
      "location.desc_ptl": "Situada en el Parque Científico de Leganés, esta instalación acoge nuestro laboratorio de fotónica, dedicado al desarrollo de cargas útiles avanzadas de comunicaciones ópticas.",
      "location.desc_colmenarejo": "Situada en el campus de Colmenarejo de la UC3M, al oeste de Madrid. Esta instalación alberga nuestros equipos avanzados de radiometría para medidas electromagnéticas y ensayo de cargas útiles de satélites.",

      "fac.director": "Director:",

      "fac.leg.h2": "Nuestra instalación principal",
      "fac.leg.intro": "El centro CSAT-Leganés es la instalación central de CSAT. Está ubicado en el <a href=\"location.html#leganes\">campus de Leganés de la UC3M</a> y es donde se realizan las principales actividades de Investigación y Desarrollo (I+D), así como de Ensamblaje, Integración, Verificación y Ensayo (AIVT) para tecnología espacial y nano/microsatélites. Está compuesto por:",
      "fac.leg.li1": "Un área central de AIV de 70 m²",
      "fac.leg.li2": "Una sala limpia ISO-8 de 70 m²",
      "fac.leg.li3": "Un Centro de Operaciones de CubeSats (CSOC)",
      "fac.leg.li4": "Un laboratorio Software/Hardware-In-The-Loop (SIL/HIL-lab)",
      "fac.leg.li5": "Un laboratorio de ensayo del sistema de determinación y control de actitud (ADCS-lab)",
      "fac.leg.spaces_eyebrow": "Dentro de Leganés",
      "fac.leg.spaces_title": "Nuestros espacios",
      "fac.leg.aiv.title": "Área central de AIV",
      "fac.leg.aiv.text": "La sala principal de AIV es el espacio de trabajo central de CSAT-Leganés, donde se llevan a cabo las principales actividades de ensamblaje e integración. Cuenta con una zona central de alta funcionalidad con mesas de trabajo protegidas frente a descargas electrostáticas (ESD), capaces de soportar estructuras de satélite pesadas, y equipada con un conjunto completo de instrumentos electrónicos de ensayo y medida —incluyendo fuentes de alimentación, osciloscopios, analizadores de espectro, generadores de señal, multímetros y un microscopio digital—. La sala dispone además de herramientas mecánicas de precisión y equipos de calibración. Este espacio está diseñado para dar soporte a todo el trabajo de desarrollo e integración que no requiere condiciones de sala limpia, sirviendo como el espacio de trabajo cotidiano de la instalación.",
      "fac.leg.clean.title": "Sala limpia",
      "fac.leg.clean.text": "La sala limpia ISO-8 es el entorno de mayor grado dentro de CSAT-Leganés, diseñada para las etapas más sensibles del ensamblaje e integración de satélites. Con niveles controlados de polvo y contaminación, garantiza que los componentes y cargas útiles más delicados se manipulen en condiciones que cumplen los estándares de cualificación espacial. La sala limpia está equipada con las mismas capacidades electrónicas de ensayo y medida que la sala principal de AIV, lo que permite continuar el trabajo de integración sin interrupciones en un entorno limpio. Es el último paso en la preparación en tierra de un satélite antes de estar listo para el lanzamiento.",
      "fac.leg.csoc.title": "CSOC",
      "fac.leg.csoc.text": "El Centro de Operaciones de CubeSats (CSOC) es el centro de control de misiones de CSAT-Leganés. Desde aquí, el equipo gestiona las comunicaciones con los satélites a través de una antena UHF/VHF instalada en el campus de Leganés, encargándose de la recepción de telemetría y la transmisión de comandos a los satélites activos en órbita. El CSOC está operado por UC3-BASE, la asociación de radioaficionados de estudiantes y profesorado de la UC3M, lo que lo convierte también en un espacio de formación práctica para la próxima generación de operadores de satélites.",
      "fac.leg.sil.title": "Laboratorio SIL/HIL",
      "fac.leg.sil.text": "El laboratorio SIL/HIL es donde se realiza la validación de software y hardware antes de integrar cualquier componente en el satélite. Está equipado con un simulador GNSS de alta fidelidad capaz de reproducir condiciones orbitales reales, así como con instrumentos avanzados de generación y análisis de señal que cubren un amplio rango de frecuencias. Esto permite a los ingenieros ensayar rigurosamente los sistemas de a bordo en un entorno espacial simulado sin salir de tierra. El laboratorio alberga también la estación de soldadura de la instalación, mantenida separada de las áreas principales de integración para garantizar un entorno de trabajo limpio y controlado.",
      "fac.leg.adcs.title": "Laboratorio ADCS",
      "fac.leg.adcs.text": "El laboratorio ADCS está dedicado a la validación de los sistemas de determinación y control de actitud —la tecnología responsable de orientar y estabilizar un satélite en órbita—. Cuenta con una plataforma de baja fricción que permite a los satélites girar libremente, simulando las condiciones casi sin fricción del espacio, junto con una jaula de Helmholtz que genera un entorno de campo magnético controlado para replicar el campo magnético terrestre en cualquier órbita. Un simulador solar completa el conjunto, permitiendo ensayos realistas de los sistemas de seguimiento solar y generación de energía. En conjunto, estas capacidades permiten una validación completa de extremo a extremo del comportamiento del control de actitud de un satélite, para plataformas que van desde pequeños CubeSats hasta microsatélites de hasta 200 kg.",

      "fac.ptl.h2": "Laboratorio de fotónica en el Parque Científico",
      "fac.ptl.intro": "CSAT-PTL es nuestra instalación centrada en fotónica, ubicada en el <a href=\"location.html#ptl\">Parque Científico de Leganés</a>. Está especializada en el ensamblaje y encapsulado de chips fotónicos, lo que permite el desarrollo de cargas útiles de satélite con capacidades avanzadas de comunicación óptica — un servicio actualmente único en España.",
      "fac.ptl.visit": "Visitar la web de PTL ↗",

      "fac.col.h2": "Instalación de radiometría en Colmenarejo",
      "fac.col.intro": "CSAT-Colmenarejo es nuestra instalación de radiometría, ubicada en el <a href=\"location.html#colmenarejo\">campus de Colmenarejo de la UC3M</a>. Ofrece capacidades avanzadas de medida y calibración electromagnética, dando soporte al desarrollo y ensayo de cargas útiles de comunicación por satélite y tecnologías de antenas de nueva generación.",
      "fac.col.visit": "Visitar la web de Colmenarejo ↗",

      "home.hero.eyebrow": "UC3M · Laboratorio de Tecnología Espacial",
      "home.hero.subtitle": "<span class=\"cap\">C</span>entro de Tecnología Espacial y nano/micro <span class=\"cap\">SAT</span>élites",
      "home.hero.cta_primary": "Explora nuestras instalaciones",
      "home.hero.cta_secondary": "Conoce al equipo",

      "home.about.eyebrow": "Quiénes somos",
      "home.about.title": "Avanzando en la tecnología de pequeños satélites",
      "home.about.body": "CSAT es una instalación puntera de investigación y ensayo en la Universidad Carlos III de Madrid, especializada en el desarrollo y la validación de tecnologías de nano y microsatélites. Ofrece a investigadores, universidades y socios industriales acceso a una infraestructura avanzada de ensamblaje, integración, verificación y ensayo (AIVT), tendiendo un puente entre los pequeños satélites educativos y las misiones comerciales a gran escala.",

      "home.explore.eyebrow": "Explora",
      "home.explore.title": "Descubre CSAT",
      "home.explore.facilities.title": "Instalaciones",
      "home.explore.facilities.body": "Tres sedes equipadas para el diseño, ensamblaje y ensayo de satélites.",
      "home.explore.team.title": "Equipo",
      "home.explore.team.body": "Conoce al profesorado y al personal que impulsan nuestra investigación.",
      "home.explore.contact.title": "Contacto",
      "home.explore.contact.body": "Ponte en contacto para colaboraciones, visitas y oportunidades.",
      "home.explore.more": "Saber más →",

      "home.news.eyebrow": "Novedades",
      "home.news.title": "Noticias y novedades",
      "home.news.all": "Ver todas las noticias",
      "home.news.placeholder.title": "Próximamente",
      "home.news.placeholder.body": "Aquí aparecerán nuestras noticias.",

      "team.hero.eyebrow": "Sobre nosotros",
      "team.hero.title": "Nuestro equipo en Leganés",
      "team.hero.subtitle": "El profesorado y el personal tras la investigación y las operaciones de CSAT en la instalación de Leganés.",
      "team.faculty": "Profesorado",
      "team.staff": "Personal",
      "team.role.director": "Director",
      "team.role.faculty": "Miembro del profesorado",
      "team.role.staff": "Investigador y personal de laboratorio",
      "team.linkedin": "Perfil de LinkedIn",
      "team.email": "Enviar correo",

      "contact.hero.eyebrow": "Ponte en contacto",
      "contact.hero.title": "Contacta con CSAT",
      "contact.hero.subtitle": "Preguntas, colaboraciones o visitas: nos encantaría saber de ti.",
      "contact.form.title": "Envíanos un mensaje",
      "contact.form.name": "Nombre",
      "contact.form.email": "Correo electrónico",
      "contact.form.subject": "Asunto",
      "contact.form.message": "Mensaje",
      "contact.form.name_ph": "Tu nombre",
      "contact.form.email_ph": "tucorreo@ejemplo.com",
      "contact.form.subject_ph": "¿Sobre qué quieres escribirnos?",
      "contact.form.message_ph": "Escribe tu mensaje…",
      "contact.form.send": "Enviar mensaje",
      "contact.form.sending": "Enviando…",
      "contact.form.success": "¡Gracias! Tu mensaje se ha enviado.",
      "contact.form.error": "Algo ha ido mal. Inténtalo de nuevo o escríbenos directamente por correo.",
      "contact.info.email_label": "Correo electrónico",
      "contact.info.address_label": "Dirección",
      "contact.info.address": "Universidad Carlos III de Madrid, Avda. de la Universidad 30, 28911 Leganés, Madrid, España"
    }
  };

  const DEFAULT_LANG = "en";
  const ES = I18N.es;   // Spanish translations
  const EN = I18N.en;   // English strings used programmatically from JS (e.g. form status)

  /* English is authored directly in the HTML (source of truth). We capture it
     from the DOM once, before any translation is applied, so you can edit the
     English text right in the .html files and it just shows. Spanish lives in
     the `es` dictionary above; any missing ES key falls back to the English. */
  let captured = false;
  function captureEnglish() {
    if (captured) return; captured = true;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.__enText = el.textContent; });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.__enHtml = el.innerHTML; });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.__enAttr = {};
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        const a = pair.split(":")[0].trim();
        if (a) el.__enAttr[a] = el.getAttribute(a);
      });
    });
  }

  // For JS-injected strings (not present in the DOM), e.g. contact form status.
  function t(key, lang) {
    if (lang === "es" && ES[key] != null) return ES[key];
    return EN[key] != null ? EN[key] : key;
  }

  function applyLang(lang) {
    captureEnglish();
    const es = lang === "es";
    document.documentElement.setAttribute("lang", es ? "es" : "en");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const k = el.getAttribute("data-i18n");
      el.textContent = (es && ES[k] != null) ? ES[k] : el.__enText;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const k = el.getAttribute("data-i18n-html");
      el.innerHTML = (es && ES[k] != null) ? ES[k] : el.__enHtml;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        const parts = pair.split(":");
        if (parts.length !== 2) return;
        const attr = parts[0].trim(), key = parts[1].trim();
        const val = (es && ES[key] != null) ? ES[key] : (el.__enAttr ? el.__enAttr[attr] : null);
        if (val != null) el.setAttribute(attr, val);
      });
    });
  }

  window.CSAT_I18N = { dict: I18N, apply: applyLang, t: t, DEFAULT_LANG: DEFAULT_LANG };
})();
