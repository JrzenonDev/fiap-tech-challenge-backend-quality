import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/postRoutes";

const app = express();
const port = process.env.PORT || 3000;

// Middleware parsing  JSON
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL || "mongodb://mongo:27017/blogging")
  .then(() => console.log("MongoDB conectado com sucesso"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

app.use(postRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
