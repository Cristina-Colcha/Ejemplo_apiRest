const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Ruta para manejar las solicitudes POST en formato JSON
app.post('/api/data', (req, res) => {
  // Obtener los datos JSON enviados desde el cliente
  const requestData = req.body;

  // Realizar alguna lógica con los datos recibidos
  // Por ejemplo, imprimir los datos en la consola del servidor
  console.log('Datos recibidos del cliente:', requestData);

  // Enviar una respuesta al cliente con los datos recibidos en formato JSON
  res.json(requestData);
});

// Puerto en el que el servidor escucha las solicitudes
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
