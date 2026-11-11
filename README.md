# Mueble Modular

App para diseñar muebles de melamina a la medida: galería de muebles, cocina por medidas, sofás, cortes en cm con tapacanto, acomodo en tableros, 3D con guía de armado, PDF para la carpintería, Excel, costos, herrajes, ver el mueble sobre una foto y realidad aumentada.

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
Sube el `index.html` nuevo encima del anterior. La app instalada toma el cambio la próxima vez que la abras con internet.

Los proyectos se guardan en el teléfono, no en GitHub.
