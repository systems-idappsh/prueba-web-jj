(function () {
  "use strict";

  var categories = [
    {
      id: "family-law",
      number: "01",
      slug: "derecho-familiar",
      name: "Derecho familiar",
      eyebrow: "Asuntos familiares",
      description: "Orientación jurídica para atender asuntos familiares con claridad, sensibilidad y revisión individual.",
      icon: "family",
      services: [
        { name: "Divorcios", description: "Orientación y acompañamiento jurídico en procedimientos de divorcio y sus implicaciones familiares." },
        { name: "Pensión alimenticia", description: "Asesoría sobre solicitud, cumplimiento o revisión de obligaciones alimentarias." },
        { name: "Guarda, custodia y convivencia", description: "Revisión de acuerdos o controversias sobre cuidado y convivencia familiar." },
        { name: "Régimen de visitas", description: "Orientación para establecer o revisar condiciones de visita y convivencia." },
        { name: "Modificación de órdenes", description: "Evaluación de una posible modificación de resoluciones o medidas judiciales." }
      ]
    },
    {
      id: "civil-law",
      number: "02",
      slug: "derecho-civil",
      name: "Derecho civil",
      eyebrow: "Asuntos civiles",
      description: "Asesoría en obligaciones, controversias, contratos y gestiones de cobranza sujetas a evaluación jurídica.",
      icon: "balance",
      services: [
        { name: "Contratos", description: "Revisión y orientación sobre documentos contractuales y obligaciones entre las partes." },
        { name: "Juicios civiles", description: "Atención de controversias civiles de acuerdo con la valoración del asunto." },
        { name: "Daños y perjuicios", description: "Orientación sobre afectaciones susceptibles de reclamación legal." },
        { name: "Cobranza extrajudicial", description: "Gestiones de cobro por vías de negociación dentro del marco aplicable." },
        { name: "Cobranza judicial", description: "Evaluación de adeudos que podrían requerir un procedimiento judicial." },
        { name: "Asesoría jurídica general", description: "Consulta inicial para revisar una situación jurídica y definir alternativas." }
      ]
    },
    {
      id: "migration",
      number: "03",
      slug: "tramites-migratorios",
      name: "Trámites migratorios",
      eyebrow: "Movilidad internacional",
      description: "Apoyo documental y orientación en trámites migratorios relacionados con México y Estados Unidos.",
      icon: "migration",
      services: [
        { name: "Visa americana B1/B2", description: "Preparación de información y documentación para una solicitud de visa de visitante." },
        { name: "Formulario DS-160", description: "Apoyo para completar el formulario con información proporcionada por la persona solicitante." },
        { name: "Formulario DS-260", description: "Apoyo documental para el formulario usado en procesos de visa de inmigrante cuando corresponda." },
        { name: "Perdones migratorios (waivers)", description: "Orientación inicial sobre el supuesto aplicable y la organización del expediente." },
        { name: "Asesoría migratoria", description: "Acompañamiento durante etapas administrativas del procedimiento acordado." }
      ]
    },
    {
      id: "senior-care",
      number: "04",
      slug: "adultos-mayores",
      name: "Atención a adultos mayores",
      eyebrow: "Atención personalizada",
      description: "Apoyo práctico y acompañamiento pensado para las necesidades de personas adultas mayores.",
      icon: "care",
      services: [
        { name: "Asesoría personalizada", description: "Atención orientada a las necesidades y dudas particulares de cada persona." },
        { name: "Traslado a embajada o consulado", description: "Apoyo logístico anunciado para gestiones ante representaciones oficiales." },
        { name: "Viajes organizados para trámites", description: "Organización de traslados vinculados con trámites, bajo condiciones por confirmar." }
      ]
    },
    {
      id: "embassy",
      number: "05",
      slug: "acompanamiento-embajadas",
      name: "Acompañamiento a embajadas",
      eyebrow: "Citas y viajes",
      description: "Preparación previa, organización del traslado y acompañamiento durante el proceso acordado.",
      icon: "embassy",
      services: [
        { name: "Orientación previa", description: "Revisión general de la cita, documentos y aspectos prácticos del proceso." },
        { name: "Organización de viajes", description: "Apoyo para coordinar el traslado relacionado con la gestión." },
        { name: "Acompañamiento durante el proceso", description: "Asistencia presencial o logística según el alcance previamente confirmado." }
      ]
    },
    {
      id: "passports",
      number: "06",
      slug: "pasaportes",
      name: "Trámite de pasaportes",
      eyebrow: "Documentos de viaje",
      description: "Orientación sobre requisitos y citas para pasaportes mexicanos y estadounidenses.",
      icon: "passport",
      services: [
        { name: "Pasaporte mexicano", description: "Orientación sobre requisitos y gestión de citas para el trámite correspondiente." },
        { name: "Pasaporte estadounidense", description: "Orientación sobre requisitos y citas según elegibilidad." },
        { name: "Primera expedición", description: "Organización de documentos para una solicitud inicial." },
        { name: "Renovación", description: "Revisión orientativa de requisitos para renovar un pasaporte." },
        { name: "Revisión y programación de citas", description: "Apoyo con requisitos y programación de citas cuando corresponda." }
      ]
    }
  ];

  function getCategory(slug) {
    return categories.find(function (category) { return category.slug === slug; }) || null;
  }

  window.JJ = window.JJ || {};
  window.JJ.services = Object.freeze(categories);
  window.JJ.getCategory = getCategory;
})();
