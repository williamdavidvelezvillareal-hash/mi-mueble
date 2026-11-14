# Mueble Modular

App para diseñar muebles de melamina a la medida, pensada para cualquier carpintero y para quien quiere un mueble para su casa.

- Galería de muebles para empezar, cocina por medidas, sofás y Taller para armar desde cero con piezas sueltas.
- 3D con barra de herramientas (Tocar, Agregar, Dibujar, Medir, Más), qué va en cada columna, deshacer, vistas y cotas.
- Fabricar: revisión antes de cortar, lista de corte en cm con tapacanto, herrajes, perforaciones, uniones y acomodo en los tableros con sobrantes.
- Cotizar: precios de referencia de Homecenter y Easy con fecha y enlace, rango de en cuánto saldría, búsqueda del precio de hoy en Homecenter, Easy y Mercado Libre, y tu propio presupuesto.
- Entregar: PDF con planos, Excel, CSV, DXF, etiquetas, mostrar al cliente con foto y video.
- Viruta, el mini carpintero: busca herramientas, hace cambios con palabras y explica cada panel con un recorrido paso a paso. Con internet usa Gemini a través del intermediario de Cloudflare (viruta.williamdavidvelezvillareal.workers.dev, que guarda la clave); sin internet sigue con su modo sencillo.
- Armado paso a paso detallado: piezas, dónde va cada tornillo con medidas, puntos y medidas en el 3D, revisión.

## Archivos
- `index.html`: la app.
- `three.min.js` y `jspdf.umd.min.js`: librerías del 3D y del PDF (licencia MIT, ver `LICENCIAS.txt`).
- `manifest.webmanifest` e íconos: permiten instalarla en el teléfono.
- `sw.js`: la guarda en el teléfono para que funcione sin internet.

## Publicar con GitHub Pages
1. Sube todos los archivos a la raíz de un repositorio público.
2. Settings → Pages → Build and deployment → Source: **Deploy from a branch** → Branch: **main** y **/ (root)** → Save.
3. Abre `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/` en Chrome y usa ⋮ → **Instalar aplicación**.

## Actualizar
Sube todos los archivos del paquete nuevo encima de los anteriores (como mínimo `index.html` y `sw.js`). La app instalada toma el cambio la próxima vez que la abras con internet; si no lo ves, ciérrala del todo y ábrela otra vez.

Los proyectos se guardan en el teléfono, no en GitHub.

Los precios de las tiendas son de referencia (13 de noviembre de 2026): la app no puede leer precios en vivo, por eso cada uno trae su fecha y su enlace.
