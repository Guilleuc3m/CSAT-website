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

      "footer.tagline": "Centro de Tecnología Espacial y nano/micro SATélites",
      "footer.explore": "Explorar",
      "footer.contact": "Contacto",
      "footer.address": "Universidad Carlos III de Madrid · Leganés, España",
      "footer.copyright": "© 2026 Universidad Carlos III de Madrid — CSAT. Todos los derechos reservados.",
      "footer.banner": "Rumbo a la órbita",

      "soon.eyebrow": "Próximamente",
      "soon.body": "Esta sección se está preparando y estará disponible en breve. Mientras tanto, explora el resto de la web o ponte en contacto con nosotros.",
      "soon.home": "Volver al inicio",
      "soon.contact": "Contáctanos",

      "home.hero.cta_primary": "Explora nuestras instalaciones",
      "home.hero.cta_secondary": "Conoce al equipo",
      "home.hero.scroll": "Desplázate para descubrir",

      "team.hero.title": "Nuestro equipo",
      "team.faculty": "Profesorado",
      "team.staff": "Personal",
      "team.linkedin": "Perfil de LinkedIn",
      "team.email": "Enviar correo",

      "contact.form.send": "Enviar mensaje",
      "contact.form.name": "Nombre",
      "contact.form.email": "Correo electrónico",
      "contact.form.subject": "Asunto",
      "contact.form.message": "Mensaje"
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
