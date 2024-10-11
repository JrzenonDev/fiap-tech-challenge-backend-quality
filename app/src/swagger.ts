import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { Express } from "express";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
      description: "API para gerenciamento de posts de blog",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
    components: {
      schemas: {
        Post: {
          type: "object",
          required: ["title", "content", "author"],
          properties: {
            _id: {
              type: "string",
              description: "ID do post",
            },
            title: {
              type: "string",
              description: "Título do post",
            },
            content: {
              type: "string",
              description: "Conteúdo do post",
            },
            author: {
              type: "string",
              description: "Autor do post",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Data de criação do post",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Data de atualização do post",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
