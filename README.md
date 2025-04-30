# API REST con Arquitectura Limpia

Una aplicación de gestión de tareas (TODOs) implementada siguiendo los principios de Arquitectura Limpia (Clean Architecture) con Node.js, Express, TypeScript y PostgreSQL.

## 📋 Características

- API RESTful para gestión de tareas (TODOs)
- Implementación de Arquitectura Limpia (separación en capas)
- Base de datos PostgreSQL con Prisma como ORM
- Frontend simple con Bootstrap y Animate.css
- Soporte para Docker

## 🧱 Arquitectura

El proyecto sigue los principios de Arquitectura Limpia dividiendo la aplicación en capas:

### 1. Domain (Capa de Dominio)

- **Entities**: Modelos de datos principales (`TodoEntity`)
- **DTOs**: Objetos de transferencia de datos (`CreateTodoDto`, `UpdateTodoDto`)
- **Use Cases**: Lógica de negocio específica de cada caso de uso
- **Repositories**: Interfaces que definen las operaciones de datos

### 2. Infrastructure (Capa de Infraestructura)

- **DataSources**: Implementaciones concretas de acceso a datos (Prisma/PostgreSQL)
- **Repositories**: Implementaciones de los repositorios definidos en la capa de dominio

### 3. Presentation (Capa de Presentación)

- **Controllers**: Manejo de peticiones HTTP
- **Routes**: Definición de endpoints de la API
- **Server**: Configuración del servidor Express

## 🚀 Endpoints de la API

- `GET /api/todos`: Obtener todas las tareas
- `GET /api/todos/:id`: Obtener una tarea específica por ID
- `POST /api/todos`: Crear una nueva tarea
- `PUT /api/todos/:id`: Actualizar una tarea existente
- `DELETE /api/todos/:id`: Eliminar una tarea

## 💻 Requisitos previos

- Node.js (v14 o superior)
- Docker y Docker Compose (opcional, para entorno de desarrollo con PostgreSQL)

## ⚙️ Configuración

1. Clona el repositorio
2. Instala las dependencias:

```
npm install
```

3. Configura las variables de entorno (crea un archivo `.env`):

```
PORT=3000
PUBLIC_PATH=public
```

4. Inicia PostgreSQL con Docker (opcional):

```
docker-compose up -d
```

5. Ejecuta las migraciones de Prisma:

```
npx prisma migrate dev
```

## 🏃‍♂️ Ejecución

### Desarrollo

```
npm run dev
```

### Producción

```
npm run build
npm run start
```

## 🧪 Estructura del proyecto

```
├── prisma/               # Esquema y migraciones de Prisma
├── public/               # Archivos estáticos y frontend
├── src/
│   ├── app.ts            # Punto de entrada de la aplicación
│   ├── config/           # Configuraciones (variables de entorno)
│   ├── data/             # Conexión a bases de datos
│   ├── domain/           # Capa de dominio
│   │   ├── dataSource/   # Interfaces de fuentes de datos
│   │   ├── dtos/         # Data Transfer Objects
│   │   ├── entities/     # Entidades de dominio
│   │   ├── repositories/ # Interfaces de repositorios
│   │   └── use-cases/    # Casos de uso de la aplicación
│   ├── infrastructure/   # Capa de infraestructura
│   │   ├── dataSource/   # Implementaciones de fuentes de datos
│   │   └── repositories/ # Implementaciones de repositorios
│   └── presentation/     # Capa de presentación
│       ├── app.routes.ts # Configuración de rutas
│       ├── server.ts     # Servidor Express
│       └── todos/        # Controladores y rutas
└── docker-compose.yml    # Configuración de Docker
```

## 🧩 Principios aplicados

- **Inyección de dependencias**: Para facilitar las pruebas y desacoplar componentes
- **Patrón repositorio**: Abstracción de la capa de datos
- **DTOs**: Validación y transformación de datos
- **Principio de responsabilidad única**: Cada clase tiene una única responsabilidad
- **Principio de inversión de dependencias**: Las capas de alto nivel no dependen de implementaciones específicas
