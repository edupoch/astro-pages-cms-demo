# Prueba conectando Astro, Pages CMS y Github Pages

Con este proyecto queremos probar a conectar Astro con dos plataformas:

- Pages CMS: nos permite editar los archivos de markdown de los contenidos a través de una interfaz web. Los cambios editados allí se reflejan en el repositorio de Github.
- Github Pages: nos permite publicar el contenido estático de la web en sus servidores.

## Lanzar el proyecto en local

Antes de empezar, ejecutamos:

```bash
npm install
```

Para lanzar el proyecto en local, ejecutamos:

```bash
npm run dev
```

## Ficheros de interés

- `src/pages/blog/index.astro`: página que muestra todos los artículos de blog.
- `src/pages/blog/[id].astro`: página que muestra un artículo de blog.
- `src/collections/blog/1.md`: un artículo de prueba que se edita en Pages CMS y se despliega en Github Pages.
- `src/content.config.ts`: define la estructura de los contenidos de la web.
- `.pages.yml`: define la estructura de los campos del panel de Pages CMS.
- `.github/workflows/deploy.yml`: define los pasos para hacer el deploy en Github Pages.
- `src/astro.config.mjs`: establece la configuración de Astro y, en este caso, nos permite definir el dominio personalizado de Github Pages.

## Artículos de interés

Colecciones en Astro:  
https://docs.astro.build/en/guides/content-collections/

Usar markdown para guardar contenido en Astro:  
https://docs.astro.build/en/guides/markdown-content/

Instalar Pages CMS en el repositorio Github:  
https://pagescms.org/docs/#install-or-deploy-your-own-version

Configurar los campos de Pages CMS:  
https://pagescms.org/docs/configuration/

Deploy de un proyecto Astro en Github Pages:  
https://docs.astro.build/en/guides/deploy/github/

Configurar un dominio personalizado en Github Pages:  
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain
