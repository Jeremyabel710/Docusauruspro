---
id: introduccion-console
title: Introducción a la Consola
sidebar_label: Para que sirve la consola
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 🧰 Introducción a la Consola

La pestaña **Console** en las herramientas de desarrollo del navegador es fundamental para ver mensajes de depuración, errores y advertencias, así como para ejecutar comandos en tiempo real.

## ¿Qué puedes hacer con la consola?

- **Ver mensajes de depuración:** Usando `console.log()`, `console.warn()`, o `console.error()`, puedes imprimir información en la consola para ayudarte en el desarrollo.
- **Ejecutar código en vivo:** Puedes escribir y ejecutar comandos directamente para probar fragmentos de código.
- **Depurar errores:** La consola muestra errores JavaScript y advertencias de CSS, facilitando la localización de problemas.

:::tip
**Consejo útil:** Usa `console.clear()` para limpiar la consola y empezar de cero cuando estés probando nuevos comandos.
:::

## Cómo abrir la consola

1. Abre el sitio web que deseas inspeccionar.
2. Presiona **F12** o utiliza **Ctrl + Shift + I** (en Windows) o **Cmd + Option + I** (en macOS).
3. Selecciona la pestaña **Console** en el panel de herramientas.

<img
  src={useBaseUrl('/img/console-open-example.png')}
  alt="Consola abierta en el navegador"
  style={{ width: '80%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
/>

---

:::note
**Nota importante:** Los cambios o comandos ejecutados en la consola son temporales y se pierden al recargar la página.
:::