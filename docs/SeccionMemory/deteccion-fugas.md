---
id: deteccion-fugas
title: Detección de fugas de memoria
sidebar_label: Detección de fugas
---

# 🕳️ Detección de fugas de memoria

Una fuga de memoria ocurre cuando el navegador mantiene en memoria datos que ya no son necesarios, lo que puede saturar la RAM con el tiempo.

## Cómo detectarlas:

1. Toma un **heap snapshot** antes de ejecutar alguna acción.
2. Ejecuta una acción sospechosa (como abrir un modal o cambiar una vista).
3. Toma otro snapshot y compáralo.
4. Busca objetos que se hayan incrementado pero no deberían mantenerse.

### Señales de alerta:

- Objetos con retención inusual.
- Incrementos constantes en la memoria usada.
- Persistencia de listeners que ya no deberían existir.

:::caution
Las fugas pequeñas pueden acumularse y causar grandes problemas a largo plazo.
:::

![Comparación de snapshots](/img/memory-leak-detection.png)

**En esta imagen, se muestra cómo comparar los snapshots de memoria antes y después de una acción para detectar posibles fugas. La comparación te ayuda a identificar objetos que no deberían estar ocupando memoria.**
