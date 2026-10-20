# Despacho Jurídico y Trámites Migratorios J&J

Sitio estático modular, sin compilación ni dependencias de producción. Conserva HTML, CSS y JavaScript nativos para poder publicarse en cualquier hosting estático.

## Iniciar en Visual Studio Code

1. Abre esta carpeta (`JJ`) en VS Code.
2. Abre la terminal integrada.
3. Ejecuta `python -m http.server 5500`.
4. Visita `http://localhost:5500`.

También funciona con la extensión Live Server usando `index.html`, siempre que `JJ` sea la carpeta raíz abierta en VS Code. No abras el archivo con doble clic: los componentes compartidos se cargan con `fetch` y requieren un servidor local.

## Publicar en GitHub Pages

1. Sube el contenido de `JJ` a la raíz del repositorio, de modo que `index.html` quede en el nivel principal.
2. En GitHub abre `Settings > Pages`.
3. Selecciona `Deploy from a branch`, la rama principal y la carpeta `/ (root)`.

Las rutas son relativas y funcionan tanto en un dominio principal como en la subcarpeta que GitHub Pages asigna al repositorio.

## Estructura

- `index.html`: portada e inicio real del sitio; no contiene el contenido completo de las páginas interiores.
- `pages/core/`: páginas independientes del despacho, catálogo general de servicios, preguntas frecuentes y contacto.
- `pages/servicios/`: seis páginas independientes para derecho familiar, derecho civil, trámites migratorios, adultos mayores, acompañamiento a embajadas y pasaportes.
- `pages/legal/`: aviso de privacidad provisional.
- `components/`: cabecera, navegación, pie, CTA y acceso a WhatsApp compartidos.
- `assets/js/config/institution.js`: única fuente de datos institucionales.
- `assets/js/content/services.js`: catálogo de seis categorías y 27 servicios editoriales.
- `assets/js/core/`: arranque y carga del layout.
- `assets/js/content/showcase.js`: contenido de los cuatro banners y las ocho tarjetas originales de portada.
- `assets/js/modules/hero-carousel.js`: rotación automática, flechas, indicadores, teclado, pausa y gesto horizontal.
- `assets/js/modules/service-carousel.js`: desplazamiento horizontal, flechas, indicadores y respuesta al tamaño disponible.
- `assets/js/modules/showcase-renderer.js`: construye portada y tarjetas desde las fuentes de contenido.
- `assets/js/modules/catalog.js`: construye el catálogo general y las páginas de categorías.
- `assets/css/`: estilos globales, layout, componentes y páginas.
- `assets/img/brand-jj/`: material visual entregado de J&J.
- `assets/img/banners/`: cuatro banners originales en versiones de escritorio y móvil.
- `assets/img/services/cards/`: ocho tarjetas originales en dos resoluciones.
- `assets/img/services/jj-services-sprite.png`: imágenes usadas por el catálogo interior de servicios.
- `assets/icons/`: favicon ICO/SVG, Apple Touch, Android y mask icon de J&J.
- `assets/img/brand-jj/logos/`: variantes oficiales de logotipo e isotipo entregadas por el cliente.

## Publicación

Publica el contenido de esta carpeta manteniendo las rutas. Antes de indexar el sitio confirma los datos institucionales, define el dominio y genera un `sitemap.xml` con URLs absolutas.
