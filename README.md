# Ryuking Chat

![Badge: TypeScript](https://img.shields.io/badge/TypeScript-98%25-blue) ![Badge: License](https://img.shields.io/badge/License-MIT-green)

Descripción
-----------
Ryuking Chat es una aplicación de chat moderna y ligera, desarrollada con React, TypeScript, Vite, shadcn-ui y Tailwind CSS. Está pensada para ofrecer una experiencia de conversación rápida y agradable, y sirve como cliente web para integrar modelos LLM o servicios de mensajería en tiempo real.

Características
---------------
- Mensajería en tiempo real
- Interfaz responsiva y móvil primero
- Componentes UI reutilizables (shadcn-ui + Tailwind)
- Código tipado con TypeScript para mejor mantenibilidad
- Preparada para desarrollo local y despliegue en producción

Tecnologías
-----------
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui

Requisitos
---------
- Node.js >= 18
- npm, yarn o pnpm

Instalación (desarrollo)
------------------------
1. Clona el repositorio:
   ```bash
   git clone https://github.com/yohanryuking/ryuking-chat.git
   cd ryuking-chat
   ```
2. Instala dependencias:
   ```bash
   npm install
   # o yarn
   # o pnpm install
   ```
3. Ejecuta en modo desarrollo:
   ```bash
   npm run dev
   ```

Construcción (producción)
-------------------------
1. Genera el build:
   ```bash
   npm run build
   ```
2. Ejecuta el servidor de producción:
   ```bash
   npm run start
   ```
   (o sirve los archivos estáticos con el servidor de tu preferencia)

Variables de entorno
--------------------
Si la aplicación requiere variables de entorno, crea un archivo `.env` en la raíz con las claves necesarias. Ejemplos comunes:
```
VITE_API_URL=https://api.example.com
OPENAI_API_KEY=sk-xxxx
```
Ajusta los nombres según la configuración real del proyecto.

Uso
---
- Abre http://localhost:5173 (o el puerto que indique la salida de `npm run dev`).
- Crea o inicia sesión en un usuario (si aplica) y comienza a chatear.

Demo / Capturas
---------------
Si tienes una demo desplegada o capturas, añade aquí el enlace o la imagen:

- Demo: (enlace)
- Captura: `docs/screenshot.png`

Contribuir
----------
1. Haz fork del repositorio
2. Crea una rama: `feature/nombre-descriptivo`
3. Haz commits y push
4. Abre un Pull Request describiendo los cambios

Licencia
--------
Este proyecto no especifica una licencia en el repositorio. Se recomienda añadir un archivo LICENSE. Una opción común es MIT.

Contacto
--------
- GitHub: https://github.com/yohanryuking
