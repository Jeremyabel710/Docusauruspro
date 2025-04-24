# Website

Este sitio web está construido con un generador moderno de sitios estáticos.

### Instalación

```bash
$ npm install
```

## Desarrollo local

```bash
$ npm run start
```

Este comando inicia un servidor de desarrollo local y abre una ventana del navegador. La mayoría de los cambios se reflejan en vivo sin necesidad de reiniciar el servidor.

## Construcción

```bash
$ npm run build
```

Este comando genera contenido estático dentro del directorio build, el cual puede ser servido por cualquier servicio de hosting de contenido estático.

## Despliegue

Usando SSH:

```bash
$ USE_SSH=true npm run deploy
```

Sin usar SSH:

```bash
$ GIT_USER=<Tu usuario de GitHub> npm run deploy
```
Si estás utilizando GitHub Pages para alojar el sitio, este comando es una forma conveniente de compilar y enviar el contenido a la rama gh-pages.