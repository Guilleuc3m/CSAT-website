/* Outreach page — Spanish translations.
   Loaded after i18n.js, on outreach.html only. English is authored in the HTML
   itself; only the strings that JavaScript needs at run time are repeated for
   English below.

   Conventions: «guillemets» for quotation marks inside Spanish text; the titles
   of the materials and the names of events stay as originally written. */
(function () {
  var d = window.CSAT_I18N && window.CSAT_I18N.dict;
  if (!d) return;

  Object.assign(d.en, {
    "out.count": "Showing {n} of {t}"
  });

  Object.assign(d.es, {

    /* ---------------------------------------------------------- on-this-page */
    "toc.out.offer": "Visitas y charlas",
    "toc.out.formats": "Formatos",
    "toc.out.mat": "Materiales",
    "toc.out.act": "Actividades",
    "toc.out.links": "Más recursos",

    /* ------------------------------------------------------------------ hero */
    "out.eyebrow": "Acercando el espacio a la sociedad",
    "out.lead": "Además de nuestras responsabilidades habituales como personal académico (docencia, tutorización de estudiantes e investigación y desarrollo), el equipo docente del CSAT quiere acercar su trabajo al público general mediante presentaciones, talleres, visitas (al CSAT o a los centros educativos) y actividades «Hazlo tú mismo» (DIY, por sus siglas en inglés).",
    "out.cta.materials": "Material educativo",
    "out.cta.visit": "Visitas y charlas",
    "out.intro": "En esta página encontrarás material educativo (de uso libre si se cita correctamente la fuente) que hemos creado, además de una lista de las actividades en las que hemos participado en los últimos años. Estas actividades abarcan todo lo que no es una presentación técnica en un congreso o seminario y que iba dirigido a un público no especializado (desde el público general y estudiantes universitarios ajenos a la ingeniería hasta partes interesadas, incluidos miembros de organizaciones científicas y/o de formulación de políticas).",

    /* ---------------------------------------------------------------- numbers */
    "out.stat.act": "actividades desde 2021",
    "out.stat.people": "participantes alcanzados",
    "out.stat.mat": "materiales educativos gratuitos",
    "out.stat.note": "Los participantes se suman a partir de las cifras comunicadas en cada actividad; las actividades sin cifra no se incluyen.",

    /* ---------------------------------------------------- visit us / invite us */
    "out.offer.h": "Visitas y charlas",
    "out.offer.lead": "Si eres un centro educativo, una universidad o una organización pública o privada y te interesa visitar el CSAT o que nosotros te visitemos para realizar una actividad de divulgación, no dudes en escribirnos a:<br><a href=\"mailto:csat@uc3m.es\">csat@uc3m.es</a>",
    "out.offer.visit.t": "Visita el CSAT",
    "out.offer.visit.p": "Ven a nuestros laboratorios del campus de Leganés de la UC3M: una breve presentación, un recorrido por el CSAT y una actividad práctica DIY.",
    "out.offer.visit.b": "Solicitar una visita",
    "out.offer.talk.t": "Charlas y talleres en tu centro",
    "out.offer.talk.p": "Podemos acudir a tu colegio, universidad u organización para dar una charla, participar en una mesa redonda o dirigir un taller DIY.",
    "out.offer.talk.b": "Solicitar una charla",

    "out.fmt.h": "Formatos que hemos realizado",
    "out.fmt.sub": "A partir de nuestras actividades anteriores. Se pueden acordar otros formatos: consúltanos.",
    "out.where.you": "En tu centro",
    "out.where.csat": "En el CSAT, Leganés",
    "out.fmt.short": "Charla breve",
    "out.fmt.short.ex": "«Lanzadores de satélites» para el público general en la I Feria del Espacio de Madrid 2026. Materiales <a href=\"#mat-1\">#1</a> y <a href=\"#mat-4\">#4</a>.",
    "out.fmt.pres": "Presentación",
    "out.fmt.pres.ex": "Presentaciones ya preparadas, en inglés: <a href=\"#mat-2\">#2</a> «The CubeSat Revolution» y <a href=\"#mat-3\">#3</a> «ST3LLARsat1 ‘Boira’».",
    "out.fmt.lect": "Conferencia no técnica",
    "out.fmt.lect.d": "2 horas",
    "out.fmt.lect.ex": "Cursos de introducción a la exploración espacial de la Universidad Complutense de Madrid (2024, 2025 y 2026): entre 15 y 38 estudiantes de grado por edición.",
    "out.fmt.visit": "Visita + charla + DIY",
    "out.fmt.visit.d": "De 30 min a 1,5 h por grupo",
    "out.fmt.visit.ex": "Semana de la Ciencia e Innovación 2025 y 2026: una presentación, un recorrido por los laboratorios y la actividad DIY «Cómo fabricar un magnetopar».",
    "out.fmt.rt": "Mesa redonda",
    "out.fmt.rt.d": "Según el evento",
    "out.fmt.rt.ex": "Workshop HRS4R (UC3M), Escuela de Verano de la UCM y foro FITEA.",

    /* ------------------------------------------------------ educational material */
    "out.mat.h": "Material educativo",
    "out.lic.url": "https://creativecommons.org/licenses/by/4.0/deed.es",
    "out.lic.main": "<strong>De uso libre siempre que se cite la fuente.</strong> Puedes copiar, compartir y adaptar este material gratis (en clase, en tus propias actividades o donde quieras) siempre que cites al CSAT (UC3M) como fuente e indiques si has hecho cambios.",
    "out.lic.sub": "Formalmente, nuestro contenido se publica bajo la <a href=\"https://creativecommons.org/licenses/by/4.0/deed.es\" target=\"_blank\" rel=\"noopener\">licencia Creative Commons Atribución 4.0 Internacional (CC BY 4.0)</a>. Los logotipos y las imágenes de terceros conservan sus propios derechos. Cita sugerida: «CSAT — Universidad Carlos III de Madrid (csat.uc3m.es)».",
    "out.k.pres": "Presentación",
    "out.k.pamph": "Folleto",
    "out.k.slides": "diapositivas",
    "out.k.diy": "+ actividad DIY",
    "out.soon": "Próximamente",
    "out.dl": "Descargar",
    "out.mat.author": "Autor",
    "out.mat.funder": "Financiación",
    "out.funder.text": "Esta página de divulgación y los materiales educativos #4 a #6 se han creado con financiación del CITT-Espacio («Clúster de Innovación Tecnológica y Talento en tecnologías del Espacio») de la Comunidad de Madrid (CAM).",

    /* ------------------------------------------------------------- activities */
    "out.act.h": "Actividades",
    "out.act.lead": "Contáctanos si quieres visitar el CSAT o que visitemos tu centro: consulta <a href=\"#offer\">Visitas y charlas</a>.",
    "out.f.type": "Tipo",
    "out.f.year": "Año",
    "out.f.none": "Ninguna actividad coincide con estos filtros.",
    "out.count": "Mostrando {n} de {t}",
    "out.type.rt": "Mesa redonda",
    "out.type.pres": "Presentación",
    "out.type.visit": "Visita al CSAT + presentación + actividad DIY",
    "out.type.visit.s": "Visita + DIY",
    "out.f.title": "Título",
    "out.f.speaker": "Ponente",
    "out.f.staff": "Equipo",
    "out.f.part": "Participantes",
    "out.organizer": "organizador",
    "out.spain": "España",
    "out.r.2024": "11–29 de noviembre de 2024",
    "out.r.2025": "17 de noviembre – 5 de diciembre de 2025",
    "out.r.2026": "16–27 de noviembre de 2026",
    "out.p.feria": "más de 400 personas del público general (familias)",
    "out.p.c24": "15 estudiantes de grado de Humanidades y Ciencias",
    "out.p.c25": "27 estudiantes de grado de Humanidades y Ciencias",
    "out.p.c26": "38 estudiantes de grado de Humanidades y Ciencias",
    "out.p.sc26": "más de 20 personas",
    "out.p.sc25": "39 personas, aproximadamente el 50 % de entre 7 y 16 años",
    "out.d.feria": "Charla de 15 minutos para el público general sobre qué son los lanzadores y cómo se controlan.",
    "out.d.course": "Conferencia no técnica de 2 horas sobre los CubeSats y sobre ST3LLARsat1 «Boira», el CubeSat de la UC3M desarrollado por estudiantes y dirigido por profesores.",
    "out.d.sc25": "19 niños y niñas + 20 madres y padres divididos en 3 grupos × 30 minutos: presentación de 10 minutos sobre «La Tierra y la magnetosfera, magnetismo y electricidad, y los CubeSats» + visita de 10 minutos al CSAT + actividad DIY de 10 minutos «Cómo fabricar un magnetopar».",
    "out.d.sc26": "Dos grupos × 1,5 horas: presentación de 20 minutos sobre «La Tierra y la magnetosfera, magnetismo y electricidad, y los CubeSats» + visita de 30 minutos al CSAT + actividad DIY de 30 minutos «Cómo fabricar un magnetopar».",

    "out.d.delft": "Presentación de temas de Observación de la Tierra del Máster en Ingeniería Espacial (MISE) a 28 estudiantes de la asociación de estudiantes de Ciencias de la Tierra Aplicadas (grado, máster y doctorado).",
    "out.t.delft1": "La voz de la industria de la observación de la Tierra",
    "out.t.delft2": ", viaje de estudios de orientación al máster de la asociación de estudiantes de la TU Delft",
    "out.i.01": "Resumen del seminario HRS4R «Internacionalizar la carrera investigadora: apostando por el futuro», 16 de noviembre de 2021.",
    "out.i.02": "A. Marcos moderando la mesa redonda, captura de la videollamada.",
    "out.i.03": "Portada del programa de la sesión plenaria de la Red de Políticas de I+D+I, 18 y 19 de abril de 2023.",
    "out.i.04": "Diapositiva del evento Madrid Flight-On-Chip (MFOC) de la Red IDI, Parque Tecnológico de Leganés, 18 de abril de 2023.",
    "out.i.05": "Página web de la Agencia Espacial Española con las presentaciones de la Jornada de Ciencia e Industria, 5 de febrero de 2025, Universidad de Alcalá.",
    "out.i.06": "Diapositiva de título con el edificio de la Escuela Politécnica Superior de la UC3M y los departamentos implicados: Ingeniería Aeroespacial, Tecnología Electrónica, Teoría de la Señal y Telemática.",
    "out.i.07": "Diapositiva de bienvenida a los estudiantes de la TU Delft al Máster en Ingeniería Espacial (MISE).",
    "out.i.08": "Página del evento «La voz de la industria de la observación de la Tierra», 3 de marzo de 2025, Parque Científico UC3M.",
    "out.i.09": "Cartel de los Cursos de Verano de la Universidad Complutense en San Lorenzo de El Escorial, julio de 2024.",
    "out.i.10": "A. Marcos impartiendo la conferencia «La revolución CubeSat y la exploración espacial».",
    "out.i.11": "Cartel del II Curso Complutense de Introducción a la Exploración Espacial y su Utilización, 11–29 de noviembre de 2024.",
    "out.i.12": "Página web del foro FITEA, IMDEA Materiales, Getafe, 29–31 de octubre de 2025.",
    "out.i.13": "Ficha de ponente de Andrés Marcos Esteban, director del Máster en Ingeniería Espacial (MISE) y del programa de CubeSats ST3LLARsat.",
    "out.i.14": "Diapositiva de título «La revolución CubeSat y la exploración espacial», 19 de noviembre de 2025.",
    "out.i.15": "Cartel del III Curso Complutense de Introducción a la Exploración Espacial y su Utilización, 17 de noviembre – 5 de diciembre de 2025.",
    "out.i.16": "Imagen de la actividad de la Semana de la Ciencia e Innovación 2025 en el CSAT, con niños y niñas participando e imágenes de cámara térmica.",
    "out.i.17": "Página web de la actividad de la Semana de la Ciencia e Innovación 2025 «Controlando CubeSats: los pequeños satélites que usan la tierra para observar la tierra».",
    "out.i.18": "Diapositiva de título «La revolución CubeSat y la exploración espacial».",
    "out.i.19": "Diapositiva «ST3LLARsat1 BOIRA: The first CubeSat program at UC3M».",
    "out.i.20": "Página web de la actividad de la Semana de la Ciencia e Innovación 2026 «Controlando CubeSats: los pequeños satélites que usan la tierra para observar la tierra».",
    "out.i.21": "Cartel de la Semana de la Ciencia y la Innovación 2026, 16–29 de noviembre de 2026.",
    "out.i.22": "Página web de la I Feria del Espacio de Madrid, Kinépolis, 29 de noviembre de 2026.",

    /* ---------------------------------------------------------- keep exploring */
    "out.links.h": "Sigue explorando",
    "out.links.lead": "Otros lugares para aprender sobre el espacio, para estudiantes y docentes.",
    "out.links.esero": "La Oficina Europea de Recursos para la Educación Espacial en España (ESA): formación para docentes, recursos para el aula y desafíos para estudiantes.",
    "out.links.cansat": "Un desafío para estudiantes: diseñar y construir un satélite del tamaño de una lata. ¿Trabajas CanSat o CubeSats con tu alumnado? Escríbenos.",
    "out.links.tc.t": "ESA Education: Teachers’ Corner",
    "out.links.tc": "Actividades y recursos didácticos sobre el espacio de la Agencia Espacial Europea para el aula (en inglés).",
    "out.links.boira": "Conoce la historia del primer CubeSat de la Universidad Carlos III de Madrid.",
    "out.links.visit": "Visitar el sitio web",
    "out.links.more": "Leer más"
  });
})();
