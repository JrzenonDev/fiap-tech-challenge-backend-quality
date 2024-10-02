import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL || "mongodb://mongo:27017/meubanco")
  .then(() => console.log("MongoDB conectado com sucesso"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
