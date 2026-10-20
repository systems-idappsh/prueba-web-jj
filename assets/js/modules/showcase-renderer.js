(function () {
  "use strict";

  function escapeHtml(value) {
    var node = document.createElement("span");
    node.textContent = value == null ? "" : String(value);
    return node.innerHTML;
  }

  function siteUrl(value) {
    var base = window.JJ && window.JJ.rootUrl ? window.JJ.rootUrl : new URL("./", document.baseURI);
    return new URL(String(value || "").replace(/^\/+/, ""), base).href;
  }

  function renderSlides() {
    var track = document.querySelector("[data-hero-slides]");
    if (!track || !window.JJ.showcase) return;

    track.innerHTML = window.JJ.showcase.slides.map(function (slide, index) {
      var active = index === 0;
      return '<a class="hero-slide' + (active ? ' is-active' : '') + '" data-hero-slide href="' + escapeHtml(siteUrl(slide.href)) + '" aria-hidden="' + (active ? 'false' : 'true') + '"' + (active ? '' : ' tabindex="-1"') + '>' +
        '<picture>' +
          '<source media="(max-width: 720px)" srcset="' + escapeHtml(siteUrl(slide.mobileImage)) + '">' +
          '<img src="' + escapeHtml(siteUrl(slide.image)) + '" width="2172" height="724" alt="' + escapeHtml(slide.alt) + '" decoding="async"' + (active ? ' fetchpriority="high"' : ' loading="lazy"') + '>' +
        '</picture>' +
      '</a>';
    }).join("");
  }

  function renderServices() {
    var track = document.querySelector("[data-service-track]");
    if (!track || !window.JJ.showcase) return;

    track.innerHTML = window.JJ.showcase.services.map(function (service, index) {
      var imageBase = siteUrl("assets/img/services/cards/" + service.image);
      return '<li class="service-tile" data-service-card role="listitem"><a href="' + escapeHtml(siteUrl(service.href)) + '" aria-label="Abrir ' + escapeHtml(service.name) + '">' +
        '<picture><source srcset="' + imageBase + '-300.webp 300w, ' + imageBase + '-600.webp 600w" sizes="(max-width: 760px) 31vw, 180px"><img src="' + imageBase + '-300.webp" width="600" height="1080" alt="' + escapeHtml(service.name) + '" ' + (index < 3 ? 'loading="eager"' : 'loading="lazy"') + ' decoding="async"></picture>' +
      '</a></li>';
    }).join("");
  }

  function init() {
    renderSlides();
    renderServices();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
