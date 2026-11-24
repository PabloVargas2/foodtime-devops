const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FoodTime</title>
</head>
<body>
  <h1>Hello world!</h1>
</body>
</html>`;

app.get('/', (_req, res) => {
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
