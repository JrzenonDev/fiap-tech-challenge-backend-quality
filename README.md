# fiap-tech-challenge-backend-quality

This API is a backend application for managing blog posts. Developed with Node.js and Express,
the API allows you to create, read, update and delete posts, with storage in MongoDB.
The application is containerized with Docker and includes automated tests to ensure code quality.

## Summary

- [fiap-tech-challenge-backend-quality](#fiap-tech-challenge-backend-quality)
  - [Summary](#summary)
  - [Technologies Used](#technologies-used)
  - [Initial Setup](#initial-setup)
  - [Application Architecture](#application-architecture)
  - [API Usage Guide](#api-usage-guide)
    - [Available endpoints:](#available-endpoints)

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Jest for testing
- Docker
- GitHub Actions for CI/CD

## Initial Setup

Follow the steps below to set up the development environment:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git
   cd nome-do-repositorio

   ```

2. **Install the dependencies:**

   ```bash
   npm install

   ```

3. **Docker setup: Make sure Docker is installed and running. Use Docker Compose to start the services:**

   ```bash
   docker-compose up -d

   ```

4. **Running the application: To start the application, use the following command:**
   ```bash
   npm run dev
   ```

The application will be available at http://localhost:3000.

5. **To access Swagger and see the API use cases:**

The application will be available at http://localhost:3000/api-docs/.

## Application Architecture

The project structure is organized as follows:

```
app/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── services/
├── tests/
├── .env
├── Dockerfile
└── docker-compose.yml
```

- **controllers/**: Contains the route control logic.
- **models/**: Defines data schemas using Mongoose.
- **routes/**: Defines the API routes.
- **services/**: Contains the business logic.

## API Usage Guide

### Available endpoints:

- **GET /posts**: Returns all posts.
- **GET /posts/:id**: Returns a specific post by ID.
- **POST /posts**: Creates a new post.
- **Request body**:
  ```json
  {
    "title": "Título do Post",
    "content": "Conteúdo do Post",
    "author": "Autor do Post"
  }
  ```
- **PUT /posts/:id**: Updates an existing post by ID.
- **Request body**:
  ```json
  {
    "title": "Título Atualizado",
    "content": "Conteúdo Atualizado",
    "author": "Autor Atualizado"
  }
  ```
- **DELETE /posts/:id**: Deletes a post by ID.
