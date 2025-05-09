const express = require('express');
const app = express();
const productoRoutes = require('./presentation/productoController');

app.use(express.json());
app.use('/productos', productoRoutes);

app.listen(3001, () => console.log('Servidor de productos en puerto 3001'));
