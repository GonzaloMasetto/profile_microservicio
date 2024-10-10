require('dotenv').config(); // Cargar variables de entorno al inicio

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profile'); // Asegúrate de que esta ruta sea correcta

const app = express();
const PORT = process.env.PORT || 3005;

app.use(bodyParser.json()); // Middleware para parsear JSON
app.use('/api/profiles', profileRoutes); // Rutas de perfil

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conectado a la base de datos de perfiles');
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
        process.exit(1); // Salir del proceso en caso de error de conexión
    });

// Manejo de errores de la API
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});
