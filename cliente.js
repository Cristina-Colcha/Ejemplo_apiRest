const axios = require('axios');

// Datos JSON que se enviarán al servidor
const jsonData = {
  name: 'John Doe',
  age: 30,
  city: 'Example City'
};

// URL del servidor al que se enviarán los datos
const serverUrl = 'http://localhost:3000/api/data';

// Hacer una solicitud POST al servidor con los datos JSON
axios.post(serverUrl, jsonData)
  .then(response => {
    // Manejar la respuesta del servidor
    console.log('Respuesta del servidor:', response.data);
  })
  .catch(error => {
    // Manejar errores en caso de que la solicitud falle
    console.error('Error al hacer la solicitud:', error);
  });
