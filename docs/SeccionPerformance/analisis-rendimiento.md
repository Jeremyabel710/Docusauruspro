---
id: analisis-rendimiento
title: Análisis y optimización del rendimiento
sidebar_label: Análisis de rendimiento
---

# ⚡ Análisis y optimización del rendimiento

Después de grabar, puedes usar herramientas como:

- **Call Tree**: Muestra qué funciones consumen más tiempo.
- **Bottom-Up**: Vista basada en tiempo de ejecución.
- **Event Log**: Registro detallado de eventos.

Estas herramientas ayudan a identificar tareas largas, repaints costosos, o layouts innecesarios.

:::caution
Evita funciones sincronizadas pesadas o bucles anidados durante la carga para mejorar el rendimiento general.
:::

![Call Tree en Performance](/img/performance-calltree.png)
