# Compilar el sitio

Desde la raíz del repositorio:

```powershell
quarto render --no-clean
```

Si Quarto no está en el PATH de Windows:

```powershell
& 'C:\Program Files\RStudio\resources\app\bin\quarto\bin\quarto.exe' render --no-clean
```

Usar `--no-clean`: todavía hay presentaciones y materiales de otros cursos
guardados únicamente en `docs/`. Una compilación que limpie esa carpeta puede
eliminarlos. GitHub Pages publica el contenido de `docs/`.

## Tutorial Statsei14

- La copia mantenida del tutorial precompilado está en `courses/statsei14/`.
- Para actualizarlo, reemplazar allí el paquete completo, incluidos `assets/`,
  `downloads/`, `results/`, `site_libs/` y `slides/`, y compilar el sitio.
- `_quarto.yml` lo copia como recurso estático a `docs/courses/statsei14/`.
  Sus notebooks `.ipynb` y archivos `.md` son material descargable o de
  atribución; no se compilan con el sitio principal.
- El menú **Docencia → Statsei14 - Tutorial** apunta a
  `courses/statsei14/index.html`, sin el prefijo `docs/`.
- No usar `docs/` como entrada de compilación ni editar su copia del tutorial:
  es la carpeta de publicación. `docs/docs/` era una salida accidental.
- La carpeta `docs/guided_theses/docs/` contiene PDFs de tesis y es válida.

Después de compilar, comprobar que no reaparezca `docs/docs/` y que se abran
el tutorial, las diapositivas y las dos soluciones HTML de `downloads/`.
