const express = require('express');
const app = express();
const personaRoutes = require('./presentation/personaController');

app.use(express.json());
app.use('/personas', personaRoutes);

app.listen(3000, () => console.log('Servidor de personas en puerto 3000'));
