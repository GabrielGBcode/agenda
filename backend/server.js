const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Rota básica para testar
app.get("/", (req, res) => {
  res.send("API funcionando!");
});

// Iniciar o servidor
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
