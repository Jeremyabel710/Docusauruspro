---
id: politicas-cookies-seguridad
title: Políticas, Cookies y Seguridad
sidebar_label: Seguridad y cookies
---

# 🛡️ Políticas de Seguridad y Cookies

Desde esta sección puedes profundizar en el análisis de seguridad de tu sitio web, revisando cómo se manejan las cookies y qué políticas están activas.

## 🍪 Cookies y su seguridad

Puedes ver si las cookies tienen atributos como:

- `Secure`: Solo se transmiten en conexiones HTTPS.
- `HttpOnly`: No accesibles desde JavaScript.
- `SameSite`: Controla el envío de cookies en peticiones cross-site.

## 🧾 Encabezados de Seguridad

Desde aquí puedes inspeccionar encabezados como:

- `Content-Security-Policy`
- `X-Content-Type-Options`
- `Strict-Transport-Security`
- `Permissions-Policy`

:::tip
Estos encabezados ayudan a mitigar ataques como XSS o clickjacking.
:::

![Políticas y cookies en el inspector](/img/privacy-cookies.png)

**En la imagen puedes observar los detalles técnicos de cookies y encabezados de seguridad, útiles para evaluar el cumplimiento de buenas prácticas.**
