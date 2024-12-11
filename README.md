# Final Programación III

## Descripción
Esta aplicación es una API REST desarrollada en **Node.js** que permite la creación y gestión de usuarios (clientes). Los usuarios pueden almacenar la siguiente información:
- Nombre
- Correo electrónico
- Fecha de nacimiento
- Dirección
- Teléfono

El proyecto incluye un frontend desarrollado con **React (Vite JS)** y diseñado con **Material UI**, que interactúa con la API mediante solicitudes HTTP realizadas con **Axios**.

---

## Tecnologías Utilizadas

### Backend
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework minimalista para crear la API REST.
- **Mongoose**: ODM para interactuar con la base de datos MongoDB.
- **MongoDB**: Base de datos NoSQL para almacenar los datos de los usuarios.
- **CORS**: Middleware para habilitar el acceso desde navegadores.

### Frontend
- **Vite JS**: Herramienta de construcción para React, enfocada en rapidez y rendimiento.
- **React**: Biblioteca para construir interfaces de usuario.
- **Material UI**: Biblioteca de componentes para diseño visual moderno.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.

---

## Instalación y Ejecución

### Requisitos Previos
- Tener instalado **Node.js** (v16 o superior) y **npm**.
- Tener configurada una base de datos **MongoDB** (local o en la nube).

### Backend
1. Clona este repositorio:
   ```bash
   git clone https://github.com/FeliBlanco/finalPIII-back
   cd finalPIII-back
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del backend con la siguiente estructura:
   ```env
   MONGO_URI=mongodb://<usuario>:<contraseña>@<host>:<puerto>/<base_de_datos>
   PORT=3000
   ```
4. Ejecuta el servidor:
   - Modo normal:
     ```bash
     node index.js
     ```
   - Modo desarrollo (con reinicio automático):
     ```bash
     npx nodemon index.js
     ```
5. El servidor estará disponible en: `http://localhost:3000`

### Frontend
1. Clona el repositorio:
   ```bash
   git clone https://github.com/FeliBlanco/finalPIII-front
   cd finalPIII-front
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el frontend:
   ```bash
   npm run dev
   ```
4. El frontend estará disponible en: `http://localhost:5173`

---

## Documentación de la API

Los detalles de los endpoints están documentados en Postman. Puedes importar la colección de Postman desde el archivo `Usuario.postman_collection.json` incluido en el repositorio.

### Principales Endpoints

#### Usuarios
- **GET /user**: Obtiene la lista de todos los usuarios.
- **GET /user/:id**: Obtiene los detalles de un usuario por su ID.
- **POST /user**: Crea un nuevo usuario.
- **PUT /user/:id**: Actualiza la información de un usuario.
- **DELETE /user/:id**: Elimina un usuario.

