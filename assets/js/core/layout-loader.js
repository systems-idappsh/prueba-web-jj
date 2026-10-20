(function () {
  "use strict";

  var currentScript = document.currentScript;
  var rootUrl = currentScript ? new URL("../../../", currentScript.src) : new URL("/", window.location.href);

  function activePath(href) {
    try {
      var target = new URL(href, rootUrl).pathname.replace(/index\.html$/, "");
      var current = window.location.pathname.replace(/index\.html$/, "");
      if (target === current || (target !== rootUrl.pathname && current.indexOf(target) === 0)) return true;
      return target.endsWith("/pages/core/servicios.html") && current.indexOf("/pages/servicios/") !== -1;
    } catch (_) {
      return false;
    }
  }

  function include(node) {
    var name = node.dataset.include;
    var url = new URL("components/" + name + ".html", rootUrl);
    return fetch(url, { credentials: "same-origin" })
      .then(function (response) {
        if (!response.ok) throw new Error("No se pudo cargar el componente " + name);
        return response.text();
      })
      .then(function (html) {
        node.innerHTML = html.replaceAll("{{ROOT}}", rootUrl.pathname);
        node.querySelectorAll("[data-nav-link]").forEach(function (link) {
          if (activePath(link.getAttribute("href"))) link.setAttribute("aria-current", "page");
        });
        if (window.JJ && window.JJ.hydrateInstitution) window.JJ.hydrateInstitution(node);
        var nested = Array.from(node.querySelectorAll("[data-include]"));
        return Promise.all(nested.map(include));
      });
  }

  function init() {
    var nodes = Array.from(document.querySelectorAll("[data-include]"));
    Promise.all(nodes.map(include))
      .then(function () { document.dispatchEvent(new CustomEvent("jj:layout-ready")); })
      .catch(function (error) {
        console.error(error);
        document.dispatchEvent(new CustomEvent("jj:layout-error", { detail: error }));
      });
  }

  window.JJ = window.JJ || {};
  window.JJ.rootUrl = rootUrl;
  document.addEventListener("DOMContentLoaded", init);
})();
