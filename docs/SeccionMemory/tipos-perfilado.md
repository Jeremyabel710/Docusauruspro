---
id: tipos-perfilado
title: Tipos de perfiles de memoria
sidebar_label: Tipos de perfiles
---

# 📊 Tipos de perfiles de memoria

En la pestaña **Memory**, puedes capturar tres tipos principales de perfiles:

### 1. Heap snapshot
Captura el estado completo de la memoria en un punto específico. Ideal para:

- Identificar objetos huérfanos.
- Comparar el estado antes y después de una acción.

### 2. Allocation instrumentation on timeline
Graba las asignaciones de memoria a lo largo del tiempo. Útil para detectar picos de consumo.

### 3. Allocation sampling
Muestra una vista de bajo costo del patrón de asignación de memoria.

:::tip
Una buena estrategia es tomar un **heap snapshot inicial**, luego interactuar con la página, y tomar otro para compararlos.
:::

![Tipos de perfiles en Memory](/img/memory-types.png)

**Aquí puedes ver cómo se muestran los diferentes tipos de perfiles de memoria, cada uno con su uso específico para analizar el comportamiento de la memoria de tu aplicación.**
