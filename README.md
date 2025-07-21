# WikiGestor - Categories Service

Este microservicio maneja el CRUD de categorías para la aplicación WikiGestor.

## Tecnologías usadas

- Node.js  
- Express  
- MongoDB Atlas  
- Swagger para documentación de la API  

## Endpoints principales

- `GET /categories` - Obtener todas las categorías  
- `POST /categories` - Crear una nueva categoría  
- `GET /categories/{id}` - Obtener una categoría por ID  
- `PUT /categories/{id}` - Actualizar una categoría por ID  
- `DELETE /categories/{id}` - Eliminar una categoría por ID  

## Variables de entorno

- `PORT` - Puerto donde corre el servicio (ejemplo: 3003)  
- `MONGODB_URI` - URL de conexión a MongoDB Atlas  

## Cómo ejecutar el servicio localmente

1. Instalar dependencias:

```bash
npm install
