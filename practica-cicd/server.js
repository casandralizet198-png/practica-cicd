const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal - "letrero" inicial de la app
app.get('/', (req, res) => {
  res.status(200).send('Hola! Esta es mi app de CI/CD - Version 1');
});

// Ruta de salud, util para probar que el App Service esta vivo
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Solo levantamos el servidor si este archivo se ejecuta directamente
// (para que las pruebas puedan importar "app" sin abrir un puerto)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}

module.exports = app;
