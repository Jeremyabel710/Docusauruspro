---
id: simulacion-dispositivos
title: Simulación de Dispositivos
sidebar_label: Simulacion de dispositivos moviles
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 📱 Simulación de Dispositivos

El **modo de dispositivo** es una funcionalidad del inspector de elementos de los navegadores modernos (como Chrome, Firefox o Edge) que te permite:

- Cambiar la resolución de pantalla del sitio web que estás visualizando.
- Simular cómo se vería en un teléfono, tablet u otros dispositivos.
- Probar el diseño responsive de tu sitio web sin necesidad de usar un dispositivo real.

## 🎯 ¿Para qué sirve?

Al desarrollar un sitio web es importante asegurarse de que se vea correctamente en distintos tamaños de pantalla. Con el modo de dispositivo puedes:

- Detectar errores en el diseño adaptativo.
- Evaluar el comportamiento de elementos como menús o sliders.
- Medir tiempos de carga simulando redes móviles.

El **modo de dispositivo** en el inspector de elementos te permite simular la visualización de tu página web en diferentes dispositivos. Puedes cambiar la resolución de la pantalla y ver cómo se ajusta el diseño de tu sitio a distintas dimensiones.

:::tip
**Consejo útil:** Si quieres probar cómo se verá tu sitio en diferentes dispositivos, utiliza las opciones preestablecidas que aparecen en el modo de dispositivo, como "iPhone 6", "Galaxy S5", etc.
:::

## 🧪 ¿Cómo activarlo?

1. Abre cualquier página web.
2. Presiona `F12` o haz clic derecho y selecciona **Inspeccionar**.
3. Una vez abierto el panel, haz clic en el ícono ![Ícono de modo de dispositivo](/img/btn-modo-dispositivo.png)
4. ¡Listo! Puedes elegir entre varios dispositivos o personalizar la resolución manualmente.

:::note
**Nota importante:** Al activar el modo de dispositivo, no solo cambiarás la resolución, sino que también podrás simular la interacción táctil, lo que es ideal para probar la navegación en dispositivos móviles.
:::

## 📸 Vista del modo de dispositivo

<img src={useBaseUrl('/img/mode-device-sample.png')} alt="Modo de dispositivo en navegador" style={{borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />


---

> 💡 Este modo es esencial para probar diseño responsive y garantizar una buena experiencia en todos los dispositivos.
    
:::caution
**Precaución:** Asegúrate de verificar el comportamiento de los elementos interactivos, ya que algunos pueden no funcionar correctamente si no están diseñados para pantallas táctiles.
:::
