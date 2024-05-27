```markdown
# API Gif React App

Este proyecto es una aplicación de React para buscar y mostrar GIFs utilizando la API de Pexels. Utiliza `pnpm` para la gestión de dependencias y Docker para la contenedorización.

## Requisitos

- Node.js (versión 14 o superior)
- `pnpm` (versión 6 o superior)
- Docker

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/api_gif.git
   cd api_gif
   ```

2. **Instala las dependencias usando `pnpm`:**

   ```bash
   pnpm install
   ```

## Configuración

1. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

   ```env
   VITE_PEXELS_API_KEY=tu_clave_de_api_de_pexels
   ```

## Ejecución en Desarrollo

Para ejecutar la aplicación en modo de desarrollo, usa el siguiente comando:

```bash
pnpm dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:3000` (o en otro puerto si el 3000 está ocupado).

## Construcción y Ejecución con Docker

1. **Construye la imagen Docker:**

   ```bash
   docker build -t api_gif .
   ```

2. **Ejecuta el contenedor Docker:**

   ```bash
   docker run -p 3001:3001 api_gif
   ```

   Esto expondrá la aplicación en `http://localhost:3001`.

## Estructura del Proyecto

```plaintext
api_gif/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── App.tsx
│   ├── index.tsx
│   └── vite-env.d.ts
├── .env
├── .gitignore
├── Dockerfile
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tailwind.config.js
└── vite.config.ts
```

## Tecnologías Utilizadas

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Vite
- Axios
- Docker

## Comandos Útiles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Compila la aplicación para producción.
- `pnpm preview`: Previsualiza la aplicación compilada.
- `docker build -t api_gif .`: Construye la imagen Docker.
- `docker run -p 3001:3001 api_gif`: Ejecuta el contenedor Docker.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los pasos a continuación:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube los cambios a tu repositorio (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más información.

```

