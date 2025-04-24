---
id: usos-avanzados-console
title: Usos Avanzados de la Consola
sidebar_label: Usos avanzados
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 🔍 Usos Avanzados de la Consola

La consola del navegador no solo muestra mensajes, sino que también ofrece herramientas avanzadas para medir el rendimiento, inspeccionar objetos y ejecutar comandos complejos.

---

## 📏 Medir tiempo de ejecución

Puedes medir el tiempo de ejecución de un bloque de código con `console.time()` y `console.timeEnd()`. Por ejemplo:

```js
console.time("miProceso");
// ... código a medir ...
console.timeEnd("miProceso");
```

:::tip
  Esta función es muy útil para detectar cuellos de botella en tu código.
:::

---

## 🔍 Inspección de objetos

La función `console.dir()` permite ver las propiedades de un objeto de forma expandida:

```js
console.dir(document.body);
```

<img 
    src={useBaseUrl('/img/console-dir-example.png')} 
    alt="Ejemplo de console.dir()" 
    style={{ width: '80%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
/>

## 🛠 Funciones adicionales

Algunas funciones adicionales que puedes aprovechar en la consola son:

- `console.table()`: Muestra datos en forma de tabla.

```js
console.table([
  { nombre: "Producto A", precio: 10 },
  { nombre: "Producto B", precio: 20 },
]);
```
- `console.assert()`: Muestra un error si la condición dada es falsa.

- `console.group()` y `console.groupEnd()`: Agrupa varios mensajes en una sección colapsable.

:::caution
**Precaución:⚠️** Ten cuidado al ejecutar comandos que modifiquen el estado del navegador (por ejemplo, `localStorage.clear()`) ya que pueden borrar datos importantes.
:::