
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor Express ativo!");
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor a correr em http://${HOST}:${PORT}`);
});
