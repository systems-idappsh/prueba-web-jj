(function () {
  "use strict";

  var institution = Object.freeze({
    brand: Object.freeze({
      name: "Despacho Jurídico y Trámites Migratorios",
      shortName: "J&J",
      professionalName: "Lic. Juan José Cárdenas Solorio"
    }),
    professional: Object.freeze({
      name: "Juan José Cárdenas Solorio",
      title: "Licenciado",
      profession: "Abogado",
      experienceYears: 18
    }),
    contact: Object.freeze({
      email: "lic.j.j.tramites.mig@gmail.com",
      phones: Object.freeze([
        Object.freeze({ label: "Teléfono principal", display: "425 103 9697", e164: "+524251039697", tel: "tel:+524251039697", whatsapp: "https://wa.me/524251039697", whatsappAnnounced: true }),
        Object.freeze({ label: "Teléfono secundario", display: "425 103 1294", e164: "+524251031294", tel: "tel:+524251031294", whatsapp: "https://wa.me/524251031294", whatsappAnnounced: true })
      ])
    }),
    location: Object.freeze({
      country: "México",
      mapsUrl: "https://maps.app.goo.gl/RT4tmzjG8fqX5W6o7?g_st=atm",
      addressVerified: false
    }),
    social: Object.freeze({
      facebook: Object.freeze([
        "https://www.facebook.com/share/1C5XV5uBvW/",
        "https://www.facebook.com/share/1KRgi5VjQN/"
      ]),
      ownershipVerified: false
    }),
    serviceRegions: Object.freeze(["México", "Estados Unidos"]),
    language: "es-MX"
  });

  function read(path) {
    return path.split(".").reduce(function (value, key) {
      return value == null ? undefined : value[key];
    }, institution);
  }

  function hydrate(root) {
    var scope = root || document;
    scope.querySelectorAll("[data-config-text]").forEach(function (node) {
      var value = read(node.dataset.configText);
      if (value !== undefined) node.textContent = String(value);
    });
    scope.querySelectorAll("[data-config-href]").forEach(function (node) {
      var value = read(node.dataset.configHref);
      if (value) node.setAttribute("href", (node.dataset.prefix || "") + String(value));
    });
    scope.querySelectorAll("[data-current-year]").forEach(function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  }

  window.JJ = window.JJ || {};
  window.JJ.institution = institution;
  window.JJ.hydrateInstitution = hydrate;
  document.addEventListener("DOMContentLoaded", function () { hydrate(document); });
  document.addEventListener("jj:layout-ready", function () { hydrate(document); });
})();
