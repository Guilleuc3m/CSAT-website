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
      "contact.form.required_prefix": "Please complete the required fields:",
      "contact.form.invalid_email": "Please enter a valid email address.",
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
      "ipfi.ai.h": "Contexto y motivación",
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

      /* ---- ST3LLARsat: program overview ---- */
      "st.eyebrow": "Programa CSAT",
      "st.tagline": "El programa CubeSat estudiantil de la UC3M",
      "st.role.director": "Director",
      "st.role.codirector": "Codirector",
      "st.role.phd": "Doctorando",
      "st.fact.duration": "Duración",
      "st.duration": "Iniciado en septiembre de 2022 — en curso",
      "st.fact.webpages": "Páginas web externas",

      "st.metrics.h": "El programa en cifras",
      "st.metrics.asof": "a julio de 2026",
      "st.metric1.label": "Estudiantes participantes",
      "st.metric2.label": "Créditos ECTS obtenidos por los estudiantes",
      "st.metric2.note": "= 18.300 horas (1 ECTS = 25 horas)",
      "st.metric3.label": "Trabajos de fin de estudios defendidos",
      "st.metric3.note": "4 de grado, 12 de máster (+ 3 en curso)",
      "st.metric4.label": "Resultados de divulgación",
      "st.metric4.note": "12 pósteres, 4 presentaciones, 5 artículos de congreso",
      "st.metric5.label": "Estudiantes admitidos en cursos de formación de la ESA",
      "st.metric6.label": "Horas de formación recibidas en cursos de la ESA",

      "st.jump.cubesats": "CubeSats",
      "st.jump.mise": "Integración docente",
      "st.jump.esa": "ESA FYS! Design Booster",
      "st.jump.ack": "Agradecimientos",
      "st.jump.team": "Equipo",

      "st.intro.p1": "<strong>ST3LLARsat</strong> es el programa CubeSat estudiantil de la <a href=\"https://www.uc3m.es/\" target=\"_blank\" rel=\"noopener\">Universidad Carlos III de Madrid</a> (UC3M), una universidad pública española fundada en 1989. El programa está integrado en el <strong>Máster en Ingeniería Espacial</strong> (<strong><a href=\"https://www.uc3m.es/master/space-engineering\" target=\"_blank\" rel=\"noopener\">MISE</a></strong>) de la UC3M y, aunque se propuso a principios de 2021, comenzó oficialmente en septiembre de 2022 con el inicio de <strong>su primera misión, ST3LLARsat1 «Boira»</strong>.",
      "st.intro.p2": "Su objetivo es proporcionar a los estudiantes de ingeniería de la UC3M formación práctica en un proyecto espacial real, así como competencias no académicas como la dinámica de equipos y el liderazgo, los compromisos de ingeniería (considerando no solo el rendimiento, sino también restricciones prácticas como el coste y la complejidad) y el conocimiento y uso de los estándares espaciales.",
      "st.intro.p3": "El nombre del programa procede de la fuente de financiación que permitió poner en marcha la 1.ª misión: la <strong>cátedra aeroespacial UC3M-SENER <a href=\"https://st3llar.uc3m.es/\" target=\"_blank\" rel=\"noopener\">ST3LLAR</a></strong>. Esta cátedra universidad-empresa estuvo activa desde 2018 hasta 2024 y se creó para reforzar la colaboración docente e investigadora en tecnología espacial entre 6 grupos de investigación de la UC3M (de 4 departamentos) y la división aeroespacial de <a href=\"https://www.group.sener/mercados/espacio/\" target=\"_blank\" rel=\"noopener\">SENER</a>, una de las mayores empresas tecnológicas españolas.",
      "st.intro.p4": "Desde que comenzó el programa ST3LLARsat, más de 170 estudiantes han participado como voluntarios o recibiendo créditos ECTS por su trabajo, se han defendido 16 trabajos de grado y máster y se han producido 21 resultados de divulgación. Del mismo modo, el equipo de supervisión ha crecido de 2 a 9 profesores, más 7 expertos que prestan apoyo puntual o participaron en años anteriores.",

      "st.cubesats.h": "Breve introducción a los CubeSats",
      "st.cubesats.p1": "La idea de los CubeSats surgió en 1999 de la mano de los profesores Bob Twiggs (Space Systems Development Lab, Universidad de Stanford) y Jordi Puig-Suari (California Polytechnic State University, CalPoly). Su objetivo era enseñar ingeniería espacial a los estudiantes mediante un proyecto práctico cuya meta era diseñar, integrar, verificar, lanzar y operar un satélite del tamaño de un cubo de 10 cm.",
      "st.cubesats.p2": "En general, los CubeSats se definen como un satélite estandarizado caracterizado por:",
      "st.cubesats.i1": "Un <strong>tamaño modular</strong> de un cubo de 10x10x10 cm (conocido como formato «1U»)",
      "st.cubesats.i2": "Un <strong>peso por cubo</strong> de entre 1,33 y 2 kg (según la agencia: ESA, NASA)",
      "st.cubesats.i3": "Todas las <strong>funcionalidades y subsistemas</strong> de un satélite estándar: estructura, potencia, ordenador y software de a bordo, telecomunicaciones, control/estimación, térmico, carga útil…",
      "st.cubesats.i4": "<strong>Escalabilidad:</strong> desde 1U hasta un máximo de 27U (de 1 a 50 kg de peso), véase la Figura 1.",
      "st.fig1.cap": "<strong>Figura 1.</strong> Rango de tamaños de los CubeSats. Fuente: <a href=\"https://www.nasa.gov/what-are-smallsats-and-cubesats/\" target=\"_blank\" rel=\"noopener\">NASA — What are SmallSats and CubeSats?</a>",
      "st.cubesats.p3": "De las aproximadamente 29.000 universidades que se estima que existen en el mundo, solo unas 200 han lanzado con éxito un satélite. La mayoría utilizó para su primera misión una plataforma CubeSat 1U por su «facilidad» y bajo coste, sobre todo teniendo en cuenta que la tasa de éxito de una primera misión universitaria ronda el 50 %, y que aumenta hasta el 75-80 % en el segundo intento. Esto demuestra que se trata de una experiencia de aprendizaje y que es sensato llevar a cabo una primera misión de bajo coste y bajo riesgo (como 1U-2U) y después acometer misiones más complejas (desde el punto de vista del tamaño o de la carga útil científico-técnica).",
      "st.cubesats.p4": "Su éxito reside en que, pese a su tamaño, se ha demostrado que pueden llevar a cabo todo tipo de misiones:",
      "st.cubesats.t1": "Educativas",
      "st.cubesats.t2": "Científicas — observación de la Tierra (clima/atmósfera/…) y del espacio (rayos X/Sol/…)",
      "st.cubesats.t3": "Comerciales — telecomunicaciones, internet de las cosas, navegación, seguridad…",
      "st.cubesats.t4": "Demostración tecnológica en órbita (IOD)",

      "st.mise.h": "Integración docente de ST3LLARsat en el Máster en Ingeniería Espacial (MISE)",
      "st.mise.p1": "Como programa educativo, un proyecto de desarrollo de un CubeSat es uno de los más completos y exigentes que pueden encontrarse en el ámbito universitario, especialmente la primera vez que se realiza. Son multidisciplinares y polifacéticos, y requieren experiencia y conocimientos de teoría y práctica, de software y hardware, de conocimiento académico y aplicación ingenieril, de contratación y aspectos legales y, por supuesto, de todas las ramas de la ingeniería: espacial, mecánica, electrónica, informática, matemáticas y telecomunicaciones, entre otras.",
      "st.mise.p2": "Para que funcione, pero sobre todo para garantizar la continuidad del programa más allá de una primera misión, el mejor enfoque es integrarlo formalmente en el plan de estudios de una titulación, de modo que al menos parte del tiempo del profesorado quede formalmente cubierto por sus obligaciones docentes y de supervisión, y parte del tiempo de los estudiantes quede cubierto por trabajo reconocido con créditos.",
      "st.mise.p3": "<strong>ST3LLARsat está integrado, véase la Figura 2, en el <a href=\"https://www.uc3m.es/master/space-engineering\" target=\"_blank\" rel=\"noopener\">Máster en Ingeniería Espacial de la UC3M</a> (MISE)</strong>, una titulación de 1,5 años (90 ECTS) en la que participan 8 departamentos de la UC3M y que lidera el departamento de ingeniería aeroespacial (DAE). El MISE se creó en 2018/19 con el objetivo de proporcionar la formación integral y especializada que requiere la industria espacial. Se imparte en inglés y consta de un 1.er año de asignaturas formativas troncales y un 2.º año formado por una combinación de asignaturas optativas y opciones de trabajo fin de máster y proyectos.",
      "st.mise.p4": "Desde 2022 se ha adaptado para incluir formalmente el programa CubeSat estudiantil en su plan de estudios, realizando un estudio de viabilidad de un CubeSat durante la asignatura troncal de 1.er año «Spacecraft Pre-Design (SPD)» y desarrollando después la misión ST3LLARsat# en curso mediante trabajos fin de máster (TFM) de 2.º año o la asignatura optativa «Integral Project (IP)». En esta última, los estudiantes de 2.º año matriculados asumen el papel de responsables de subsistema y cuentan con el apoyo de voluntarios de 1.er año del MISE. La asignatura MISE-IP de 2.º año concluye hacia diciembre, mientras que la asignatura MISE-SPD de 1.er año empieza en enero y se prolonga hasta finales de mayo, por lo que el relevo y la transferencia de conocimiento entre estudiantes de las distintas promociones puede encadenarse sin sobresaltos, salvo en verano (donde el trabajo de TFM y las prácticas sirven de puente entre cursos académicos).",
      "st.fig2.cap": "<strong>Figura 2.</strong> Integración del programa ST3LLARsat en el MISE.",
      "st.mise.p5": "Un programa CubeSat se beneficia de estar integrado en una titulación oficial, pero el beneficio es mutuo, ya que tanto la documentación desarrollada en el primero como las herramientas de software y hardware pueden incorporarse al plan de estudios de la segunda, lo que se traduce en una experiencia de aprendizaje más práctica y realista para todos los estudiantes. En el caso de ST3LLARsat y el MISE de la UC3M, el beneficio del segundo respecto al primero pudo cuantificarse, ya que <a href=\"https://buscadordetitulos.madrimasd.org/es/info-titulo/44845\" target=\"_blank\" rel=\"noopener\">la primera acreditación del MISE</a> (el proceso oficial en España por el que las autoridades educativas evalúan la calidad de una titulación) se realizó a principios de 2024 (5 años después del inicio del MISE y 1,5 después del inicio de ST3LLARsat) y obtuvo 2 «A» de 6, lo que situó al MISE como uno de los 5 únicos másteres de ingeniería de la Comunidad de Madrid con ese resultado máximo (de un total de 192 másteres en aquel momento). El equipo de acreditación destacó explícitamente el programa CubeSat como un aspecto clave para este resultado.",
      "st.mise.p6": "Un ejemplo, desde la perspectiva del plan de estudios, de esta interacción simbiótica es la evolución que ha experimentado la asignatura MISE-SPD desde 2021/22, cuando se reorientó para centrarse en misiones CubeSat. Especialmente desde 2024/25, tercer año de ST3LLARsat1, la asignatura se ha adaptado siguiendo los estándares ECSS y CubeSat-CalPoly, los procedimientos de ESA Academy (adquiridos a raíz de nuestra participación en el programa Fly-Your-Satellite! Design Booster de la ESA, véase más adelante) e incorporando laboratorios de software y hardware basados en los ensayos realizados para ST3LLARsat1.",
      "st.mise.p7": "Los laboratorios de SW incluyen el uso de software especializado como: <a href=\"https://ai-solutions.com/\" target=\"_blank\" rel=\"noopener\">FreeFlyer</a> de a.i. solutions (para estimar la vida orbital y realizar análisis de cobertura), <a href=\"https://sdup.esoc.esa.int/\" target=\"_blank\" rel=\"noopener\">DRAMA</a> de la ESA (para calcular tiempos de desorbitado y probabilidades de riesgo por basura espacial) y simuladores de detumbling del ADCS (para calcular el rendimiento de los equipos de control elegidos por los equipos de estudiantes y mostrarles la necesidad de estimar bien las características MCI —masa, centro de masas y momentos de inercia— de su plataforma). Los laboratorios de HW, véase la Figura 3, abarcan desde: (a) construir una estructura CubeSat 1U impresa en 3D: primero calculando tensiones y cargas máximas, y comprobando después si soporta la carga estimada cargándola físicamente con peso; (b) construir un magnetopar casero y ensayarlo en el CubeSat 1U impreso en 3D: experimentando de primera mano los problemas prácticos de cableado, calor, agotamiento de la potencia y limitaciones de espacio; (c) medir la eficiencia de paneles solares: y, de nuevo, experimentando el problema del cableado y del desajuste entre los cálculos teóricos y el rendimiento real.",
      "st.fig3.ph": "Imagen próximamente",
      "st.fig3.cap": "<strong>Figura 3.</strong> Laboratorios de HW de MISE-SPD: ADCS, estructural y paneles solares.",

      "st.esa.h": "Participación en el programa FYS! Design Booster de la ESA",
      "st.esa.p1": "La introducción del reto CubeSat en la asignatura MISE-SPD de 2021/22 y la fecha prevista de inicio del programa ST3LLARsat1 para septiembre de 2022 no fueron casualidad. Durante 2021, el director del programa (el prof. Marcos) llevaba tiempo buscando información y apoyo para establecer el programa CubeSat en la UC3M y, en diciembre de 2021, asistió a una sesión informativa de ESA Academy sobre la 4.ª edición de su programa Fly-Your-Satellite! (FYS!). En esa presentación, la ESA anunció la apertura de un programa nuevo y más compacto, el FYS! Design Booster de 1,5 años, cuya convocatoria se esperaba para la primavera de 2022 y que representaba una gran oportunidad para ST3LLARsat.",
      "st.esa.p2": "La asignatura MISE-SPD de 2021/22 concluyó a finales de mayo de 2022, y la 1.ª sesión informativa oficial sobre el programa FYS! Design Booster de la ESA se celebró en línea el 8 de junio de 2022, a cargo de la Oficina de Educación de la ESA. El plazo de presentación de propuestas se fijó para el 2 de octubre de 2022 y, por tanto, el programa FYS!-DB de la ESA encajaba muy bien con nuestra planificación. La presentación de la propuesta, realizada en la asignatura MISE-IP de 2022/23, consistió principalmente en adaptar a la dimensión 2U objetivo los análisis preliminares de una de las misiones propuestas por los estudiantes en el MISE-SPD de 2021/22. Es un testimonio del trabajo de nuestros estudiantes del MISE que en diciembre de 2022 fuéramos seleccionados por la ESA para participar en su programa FYS! Design Booster (uno de los 5 únicos equipos universitarios europeos, de entre 12 equipos preseleccionados, algunos de los cuales ya habían desarrollado y enviado CubeSats al espacio).",
      "st.esa.p3": "A partir de enero de 2023, la organización y el desarrollo de ST3LLARsat1 se reorganizaron en torno al calendario del programa FYS! Design Booster de la ESA, sustancialmente más corto que nuestra planificación interna de junio de 2022. Los objetivos de alto nivel de la ESA para la BDR (marzo de 2023) eran realizar estudios de compromiso, congelar los requisitos, seleccionar los conceptos de sistema y subsistemas y establecer el diseño de referencia del CubeSat. Y para la FDR (junio de 2024), finalizar los análisis de sistema y subsistemas, detallar la definición de las interfaces y planificar las actividades de AIVT futuras.",
      "st.esa.p4": "El equipo FYS! de la ESA asignó a ST3LLARsat1 dos puntos de contacto principales (el Dr. Loris Franchi y el Sr. David Palma), facilitó un repositorio común (para agilizar el intercambio dentro del equipo y con la ESA) y estableció videoconferencias periódicas de seguimiento con órdenes del día predefinidos, con el fin de ayudar al equipo de ST3LLARsat1 a completar la fase FDR del programa. También se celebraron periódicamente sesiones específicas con otros expertos de la ESA para debatir compromisos de diseño y selección de componentes, así como numerosas sesiones de RID tras los hitos BDR/FDR, todo lo cual se tradujo en intercambios con la ESA prácticamente cada dos semanas. Las reuniones internas de ST3LLARsat1 se intercalaban con las reuniones de la ESA para prepararlas adecuadamente.",
      "st.esa.p5": "Nuestra participación en el programa FYS! Design Booster de la ESA fue exigente, con un ritmo intenso y numerosos documentos y reuniones presenciales pero, por encima de todo, el programa fue una muy buena oportunidad de aprendizaje y nos ayudó a llevar nuestra misión desde un concepto de viabilidad hasta un punto mucho más cercano a un sistema consolidado. Así pues, la experiencia resultó muy útil y fructífera, aunque algo estresante y demandante. Queremos agradecer el apoyo de todo el equipo y los expertos del FYS! Design Booster de la ESA y, en especial, del Dr. Loris Franchi y el Sr. David Palma.",

      "st.ack.h": "Agradecimientos",
      "st.ack1": "El prof. A. Marcos agradece el <strong>premio «Beatriz Galindo Senior Distinguished»</strong> del Gobierno de España y la financiación adicional del marco VPRICIT de la Comunidad de Madrid-UC3M.",
      "st.ack2": "Por la financiación y el apoyo experto, muchas gracias a la <strong>cátedra aeroespacial UC3M-SENER ST3LLAR</strong> y a SENER.",
      "st.ack3": "A <strong>ESA Academy</strong> por su apoyo experto, su formación y por dar acceso a sus instalaciones a nuestros estudiantes.",
      "st.ack4": "Por ceder gratuitamente su <strong>software de modelado térmico</strong>.",
      "st.ack5": "Por ceder gratuitamente su <strong>software de análisis de misión</strong>.",
      "st.ack6": "A la sociedad estudiantil de radioaficionados certificada de la UC3M, por nuestro <strong>desarrollo conjunto de la estación de tierra</strong>.",

      "st.team.h": "Equipo de ST3LLAR y ST3LLARsat1",
      "st.team.directors": "Equipo directivo",
      "st.team.supervisory": "Equipo de supervisión de ST3LLARsat1",
      "st.team.associates": "Miembros asociados de ST3LLARsat1",
      "st.team.expertise": "Especialidad técnica",
      "st.crew.andres": "ADCS, SIL/HIL, AIVT, además de «todoterreno» en: electrónica, OBSW, térmico, GNSS, TT&C y ConOps",
      "st.crew.diego": "ADCS, TT&C, GNSS, ADCS-SIL/HIL",
      "st.crew.gabriele": "Estructuras, AIVT de vibraciones, potencia, térmico",
      "st.crew.andoni": "AIVT",
      "st.crew.antonio": "Térmico",
      "st.crew.victor": "TT&C",
      "st.crew.behrad": "GNC",
      "st.crew.juan": "Estación de tierra",
      "st.crew.ghasem": "ADCS SIL/HIL/AIVT, estación de tierra",
      "st.assoc1": "<strong>Prof. Manuel Sanjurjo</strong>, DAE.",
      "st.assoc2": "<strong>Prof. Gonzalo Sánchez-Arriaga</strong>, DAE.",
      "st.assoc3": "<strong>Sr. Jesús Zurera</strong>, SENER. Especialidad técnica: OBSW.",
      "st.assoc4": "<strong>Prof.ª Almudena Lindoso</strong>, Electrónica. Especialidad técnica: OBSW.",
      "st.assoc5": "<strong>Prof. Kun Wang</strong>, DAE. Especialidad técnica: ADCS HIL, GNC.",
      "st.assoc6": "<strong>Prof. Luis Entrena</strong>, Electrónica. Especialidad técnica: PCB-ADCS, radiación.",
      "st.assoc7": "<strong>Prof. Miguel Ángel Gómez</strong>, DAE/INTA. Especialidad técnica: GNSS/PNT, AIVT.",

      /* Date pills — abbreviated so they still fit the badge in Spanish */
      "st.since.1": "2021",
      "st.since.2": "jun. 2023",
      "st.since.3": "sept. 2023",
      "st.since.4": "sept. 2022",
      "st.since.5": "sept. 2023",
      "st.since.6": "sept. 2024",
      "st.since.7": "abr. 2024",
      "st.since.8": "ene. 2022",
      "st.since.9": "nov. 2022",
      "st.adate.1": "nov. 2022",
      "st.adate.2": "nov. 2022",
      "st.adate.3": "sept. 2023 – jun. 2024",
      "st.adate.4": "sept. 2023 – jun. 2024",
      "st.adate.5": "sept. 2025",
      "st.adate.6": "sept. 2025 – jun. 2026",
      "st.adate.7": "may. 2026",

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
      "contact.form.required_prefix": "Faltan campos por completar:",
      "contact.form.invalid_email": "Introduce una dirección de correo válida.",
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
