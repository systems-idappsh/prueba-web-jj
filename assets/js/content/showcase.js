(function () {
  "use strict";

  window.JJ = window.JJ || {};
  window.JJ.showcase = Object.freeze({
    interval: 5000,
    slides: Object.freeze([
      Object.freeze({
        href: "pages/servicios/tramites-migratorios.html",
        image: "assets/img/banners/banner-visas.webp",
        mobileImage: "assets/img/banners/banner-visas-1086.webp",
        alt: "Visas con orientación y guía profesional"
      }),
      Object.freeze({
        href: "pages/servicios/pasaportes.html",
        image: "assets/img/banners/banner-pasaportes.webp",
        mobileImage: "assets/img/banners/banner-pasaportes-1086.webp",
        alt: "Orientación para trámites de pasaportes"
      }),
      Object.freeze({
        href: "pages/servicios/tramites-migratorios.html",
        image: "assets/img/banners/banner-peru.webp",
        mobileImage: "assets/img/banners/banner-peru-1086.webp",
        alt: "Orientación para trámites relacionados con Perú"
      }),
      Object.freeze({
        href: "pages/servicios/tramites-migratorios.html",
        image: "assets/img/banners/banner-venezuela.webp",
        mobileImage: "assets/img/banners/banner-venezuela-1086.webp",
        alt: "Orientación para trámites relacionados con Venezuela"
      })
    ]),
    services: Object.freeze([
      Object.freeze({ name: "Visas", href: "pages/servicios/tramites-migratorios.html", image: "servicio-visas" }),
      Object.freeze({ name: "Pasaportes", href: "pages/servicios/pasaportes.html", image: "servicio-pasaportes" }),
      Object.freeze({ name: "Trámites en Perú", href: "pages/servicios/tramites-migratorios.html", image: "servicio-peru" }),
      Object.freeze({ name: "Trámites en México", href: "pages/core/servicios.html", image: "servicio-mexico" }),
      Object.freeze({ name: "Trámites en Venezuela", href: "pages/servicios/tramites-migratorios.html", image: "servicio-venezuela" }),
      Object.freeze({ name: "Canadá", href: "pages/servicios/tramites-migratorios.html", image: "servicio-canada" }),
      Object.freeze({ name: "Otros países", href: "pages/servicios/tramites-migratorios.html", image: "servicio-otros-paises" }),
      Object.freeze({ name: "Otros trámites", href: "pages/core/servicios.html", image: "servicio-otros-tramites" })
    ])
  });
})();
