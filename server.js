const express = require('express');
const app = express();
const routes = require('./routes/index'); // Importa as rotas
const bodyParser = require('body-parser');

app.use(bodyParser.json());  // Para lidar com JSON
app.use(bodyParser.urlencoded({ extended: true }));  // Para lidar com dados de formulários

// Usar as rotas
app.use('/', routes);

const port = process.env.PORT || 3000;  // Usa a porta 3000, ou uma porta do ambiente
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
