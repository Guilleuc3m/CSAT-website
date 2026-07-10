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
      "nav.projects": "Proyectos",
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

      "proj.eyebrow": "Proyecto CSAT",
      "proj.website": "Web del proyecto",
      "proj.fact.funding": "Financiación",
      "proj.fact.duration": "Duración",
      "proj.fact.reference": "Referencia",
      "proj.fact.agency": "Entidad financiadora",
      "proj.fact.partners": "Socios",

      "mlplus.fullname": "MLPLUS-CM — Consolidación de una plataforma de microsatélite y tecnologías para la investigación científica espacial avanzada",
      "mlplus.role.coordinator": "Coordinador del proyecto",
      "mlplus.role.manager": "Gestor del proyecto",
      "mlplus.funding": "1.026.000 €",
      "mlplus.duration": "4 años · 2025–2028",
      "mlplus.agency": "Comunidad de Madrid — Convocatoria TECNOLOGÍAS 2024",
      "mlplus.partners": "UC3M (GI, EP2, GOTL), UPM (IDR, DIEMAG) y UCM (AEGORA) — con los socios asociados INTA y GEOSIGN.",
      "mlplus.summary": "MLPLUS-CM representa la fase de consolidación de una misión espacial para la demostración en órbita de un microsatélite equipado con tecnologías avanzadas de observación científica, comunicación cuántica, control y propulsión eléctrica.",
      "mlplus.mission.h": "La misión MARTINLARA",
      "mlplus.mission.p1": "La misión de Demostración en Órbita (IOD) MARTINLARA (ML) surgió de la necesidad de abordar algunos de los principales retos de nuestra sociedad —desde la acción climática hasta el desarrollo económico sostenible, ambos objetivos fijados por las Naciones Unidas y prioridades para la Unión Europea—. Su estudio de viabilidad y su definición preliminar se lograron con éxito en el proyecto precursor MARTINLARA-CM, que además demostró la capacidad de llevar tecnologías novedosas del concepto a la preparación para el vuelo y de transferir ese conocimiento a otras misiones espaciales universitarias de Madrid.",
      "mlplus.mission.p2": "La misión desarrolla una plataforma de nano/microsatélite con cargas útiles de radioastronomía, observación de la Tierra, fotónica espacial y micropropulsión por plasma. Estas tecnologías tienen un impacto directo en problemas sociales como el cambio climático y en el acceso sostenible al espacio —posibilitando constelaciones de observación de nano/microsatélites que cumplan las normas de desechos presentes y futuras—. El proyecto entrelaza ingeniería aeroespacial, telecomunicaciones, astronomía, geodesia y geofísica. A corto plazo, ML genera nuevas capacidades y un núcleo colaborativo de tecnología espacial en la Comunidad de Madrid; a medio y largo plazo, busca facilitar la participación en proyectos internacionales de radioastronomía, ciencias de la Tierra y propulsión, y en última instancia lanzar ML.",
      "mlplus.precursor.h": "De MARTINLARA-CM a MLPLUS",
      "mlplus.precursor.p": "El proyecto precursor MARTINLARA-CM aprovechó el conocimiento y la experiencia disponibles en la Comunidad de Madrid para afrontar estos retos mediante la innovación en tecnología y ciencia espacial. Entre sus resultados destacan:",
      "mlplus.result1": "<strong>Colaboración entre 6 grupos</strong> para desarrollar un radiómetro avanzado desde la fase de concepto hasta su integración en UPMSat-3, el tercer satélite de la Universidad Politécnica de Madrid, listo para su lanzamiento en 2024/2025.",
      "mlplus.result2": "<strong>Colaboración entre 3 grupos</strong> para el desarrollo, integración y ensayos de verificación del FlatSat de MARTINLARA.",
      "mlplus.result3": "<strong>Colaboración entre 4 grupos</strong> para evaluar y definir los requisitos de ingeniería necesarios para integrar un método de adquisición y procesamiento de datos científicos de los radiómetros para la observación de la atmósfera terrestre.",
      "mlplus.result4": "<strong>Colaboración entre 3 grupos</strong> para la misión y la plataforma de MARTINLARA. Este trabajo se transfirió más allá del proyecto, beneficiando a UPMSat-3 y al primer CubeSat estudiantil de la UC3M, ST3LLARsat1 «Boira» —una transferencia que fue clave para que la UC3M se convirtiera en la primera universidad de la Comunidad de Madrid elegida por la ESA para su programa Fly-Your-Satellite! Design Booster—.",
      "mlplus.precursor.p2": "MLPLUS-CM consolida el objetivo a corto plazo de MARTINLARA-CM al dar continuidad al núcleo colaborativo establecido, y apoya sus metas a medio y largo plazo al madurar los desarrollos de ML hacia la preparación para el lanzamiento. En concreto, hace evolucionar el diseño de la misión de un nivel de definición «preliminar» a uno «detallado» —de la fase B a la fase C en la terminología de la Agencia Espacial Europea—.",
      "mlplus.lines.h": "Tres líneas de desarrollo",
      "mlplus.lines.sub": "MLPLUS-CM se articula en torno a tres líneas principales de trabajo.",
      "mlplus.line1.h": "Misión y plataforma",
      "mlplus.line1.p": "Consolidación de la misión IOD y de la plataforma de nano/microsatélite.",
      "mlplus.line2.h": "Tecnologías y métodos",
      "mlplus.line2.p": "Consolidación de las tecnologías espaciales y los métodos científicos, en concreto:",
      "mlplus.line2.i1": "Un motor de micropropulsión por plasma nuevo, robusto y potente.",
      "mlplus.line2.i2": "Un sistema de control para requisitos científicos exigentes.",
      "mlplus.line2.i3": "Un novedoso generador de fotones entrelazados para aplicaciones cuánticas.",
      "mlplus.line2.i4": "Software científico para la observación del campo magnético terrestre.",
      "mlplus.line3.h": "Verificación y validación",
      "mlplus.line3.p": "Verificación y validación de la plataforma, las tecnologías y los métodos.",

      "ipfi.fullname": "Métodos inteligentes de identificación de parámetros y fallos para sistemas aeroespaciales",
      "ipfi.role.pi": "Investigador principal",
      "ipfi.funding": "56.250 €",
      "ipfi.duration": "3 años · 2025–2028",
      "ipfi.agency": "Agencia Estatal de Investigación — Convocatoria 2024 «Proyectos de Generación de Conocimiento»",
      "ipfi.summary": "IPFI busca avanzar en el uso de métodos y herramientas inteligentes para la identificación de parámetros y fallos en estructuras aeroespaciales de tipo esbelto —como lanzadores, paneles solares de satélites y alas flexibles de aeronaves—.",
      "ipfi.p1": "Estos métodos mejoran la robustez, el rendimiento y la huella ecológica de los sistemas. Los principales retos surgen del objetivo de operación a bordo, que impone restricciones tecnológicas a los aspectos computacionales y de fiabilidad de los métodos, y del aspecto de identificación de sistemas, que plantea cuestiones matemáticas como la correcta definición de las entradas, la persistencia de excitación de las señales (estrechamente ligada a la convergencia y robustez de los algoritmos), los niveles de filtrado de ruido/frecuencia y la definición de la estructura del modelo de identificación, entre otras.",
      "ipfi.ai.h": "Por qué la IA, y por qué ahora",
      "ipfi.ai.p": "El reciente resurgir de las tecnologías de IA ha generado ingentes cantidades de datos y un cambio de paradigma para la sociedad y la economía digital, posibilitado por el escalado de los sistemas informáticos y de software hasta convertirse en granjas de almacenamiento accesibles por internet y en modelos generativos ya muy conocidos como ChatGPT, Copilot o DeepSeek. Esto ha impulsado a otros ámbitos, incluido el aeroespacial, a explorar el uso de la IA a una escala y alcance sin precedentes —con acrónimos como IA, ML, DL y RL convertidos en nombres de uso cotidiano—.",
      "ipfi.approach.h": "Nuestro enfoque",
      "ipfi.approach.p": "IPFI se centra en métodos de aprendizaje automático (ML) —en concreto, enfoques supervisados basados en regresión dispersa y métodos basados en redes neuronales como el aprendizaje profundo y por refuerzo (DL/RL)—. El despliegue de estas soluciones de IA/ML en sistemas aeroespaciales plantea tres retos clave:",
      "ipfi.tag1": "Sistemas críticos para la seguridad",
      "ipfi.tag2": "Implementación a bordo compacta y en tiempo real",
      "ipfi.tag3": "Certificación transparente y basada en la física",
      "ipfi.problems.h": "Problemas abordados",
      "ipfi.problems.sub": "IPFI aborda tres problemas específicos.",
      "ipfi.problem1.h": "Estimación y control para lanzadores",
      "ipfi.problem1.p": "Integración de esquemas de estimación mediante ML y de control para lanzadores.",
      "ipfi.problem2.h": "Modelado de orden reducido",
      "ipfi.problem2.p": "Modelado de orden reducido y basado en la física de estructuras aeroespaciales.",
      "ipfi.problem3.h": "Análisis modal a bordo",
      "ipfi.problem3.p": "Análisis modal a bordo y detección de daños.",

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
