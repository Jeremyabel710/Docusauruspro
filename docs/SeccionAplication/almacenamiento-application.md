---
id: almacenamiento-application
title: Almacenamiento y recursos locales
sidebar_label: Almacenamiento local
---

# 🗄️ Almacenamiento y recursos locales

Una de las funcionalidades más utilizadas de la pestaña **Application** es la gestión del almacenamiento del navegador. Aquí puedes visualizar y modificar en tiempo real los datos guardados por el sitio web.

## 🧩 Local Storage y Session Storage

Estos permiten almacenar pares clave-valor en el navegador:

- **Local Storage**: Persistente incluso al cerrar el navegador.
- **Session Storage**: Se borra al cerrar la pestaña.

```js
localStorage.setItem("usuario", "Carlos");
sessionStorage.setItem("tema", "oscuro");
```
## 🍪 Cookies

Desde aquí puedes ver y eliminar cookies, además de modificar valores directamente.

## 🛢 IndexedDB

Base de datos en el navegador para almacenamiento estructurado. Ideal para apps complejas.

Puedes inspeccionar, editar y borrar registros directamente desde el panel.

![IndexedDB](/img/memory-leak-db.png)

La imagen muestra un ejemplo de datos guardados en Local Storage y cómo puedes inspeccionarlos desde el navegador. Esto es útil para pruebas y depuración.

---