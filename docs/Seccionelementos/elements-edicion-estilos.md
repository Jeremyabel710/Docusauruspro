---
id: elements-edicion-estilos
title: Estilos
sidebar_label: Estilos de la pagina
---
# Edición de Estilos en la Sección "Elements"

Además de permitir la modificación del HTML, la sección **"Elements"** también te brinda la capacidad de modificar los estilos CSS aplicados a los elementos de la página web. Esto es útil para probar diferentes estilos visuales o para depurar problemas de diseño sin la necesidad de modificar directamente el archivo CSS.

## Modificar Estilos CSS

1. **Ver los estilos aplicados**:
   - Al seleccionar un elemento en la estructura HTML, podrás ver los estilos aplicados en la barra lateral derecha bajo la sección **Styles**.
   - Aquí se muestran todos los estilos CSS activos, tanto los definidos en archivos externos como los definidos en línea en el propio HTML.

2. **Editar los estilos en tiempo real**:
   - Puedes editar cualquier valor en la lista de estilos CSS. Por ejemplo, si deseas cambiar el color de fondo de un `<div>`, puedes hacer clic en el valor de color en la sección **Styles** y cambiarlo por el valor que prefieras (como `#FF0000` para rojo).
   - Los cambios se reflejarán al instante en la página web.

3. **Agregar nuevas reglas CSS**:
   - También puedes agregar nuevas reglas CSS al elemento seleccionado. Por ejemplo, puedes añadir un borde a un botón simplemente escribiendo `border: 2px solid red;` en la sección de estilos.

![Imagen del inspector mostrando la edición de estilos en la barra de "Styles"](/img/path_to_image_2.png)   

:::note
**Nota importante:** Los cambios realizados a través de las herramientas de desarrollo no se guardan permanentemente. Son temporales y se pierden cuando recargas la página. Sin embargo, son útiles para probar y depurar.
:::

### Herramientas Avanzadas en la Sección "Elements"

- **Manipulación de clases**: Puedes ver y modificar las clases que se aplican a un elemento. Esto te permite ver cómo diferentes clases afectan el diseño y la funcionalidad.
  
- **Simulación de dispositivos**: En la barra de herramientas de la parte superior, puedes activar el "Modo de Dispositivo" para simular cómo se vería el diseño en diferentes dispositivos y tamaños de pantalla. Esto te ayudará a ajustar los estilos CSS para adaptarse mejor a móviles, tabletas y pantallas grandes.

### Ejemplo práctico

Imagina que estás trabajando en un botón de llamada a la acción en un sitio web. El botón tiene un fondo azul y texto blanco, pero quieres cambiar el color de fondo a rojo y el color del texto a blanco para resaltar más el botón.

1. Selecciona el botón en la sección "Elements".
2. En la barra lateral de **Styles**, busca la propiedad `background-color`.
3. Cambia el valor de `background-color` de `#0000FF` (azul) a `#FF0000` (rojo).
4. Verás que el botón se actualiza automáticamente con el nuevo color de fondo.

:::tip
**Consejo útil:** Si necesitas aplicar varios cambios de estilo a diferentes elementos, puedes crear una nueva clase CSS y asignarla a esos elementos. Esto te permitirá aplicar múltiples estilos de forma eficiente.
:::

