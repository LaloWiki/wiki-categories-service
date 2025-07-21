const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const categoriesRoutes = require('./routes/categories');

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

// Configuración Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de servicio de categorías',
    version: '1.0.0',
    description: 'Documentación del microservicio de categorías',
  },
  servers: [
    {
      url: `http://localhost:${PORT}`,
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {          // Definición esquema JWT Bearer
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [               // Seguridad global para endpoints
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Archivos con comentarios Swagger 
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas principales
app.use('/categories', categoriesRoutes);

// Conexión a MongoDB 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`Servidor de categorías corriendo en http://localhost:${PORT}`);
      console.log(`Swagger disponible en http://localhost:${PORT}/docs`);
    });
  })
  .catch(err => console.error('Error de conexión a MongoDB:', err));
