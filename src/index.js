const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profile');
const { connectRabbitMQ } = require('./utils/rabbitmq');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use('/api/profiles', profileRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a MongoDB');
        connectRabbitMQ();
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    })
    .catch(err => console.error('Error al conectar a MongoDB:', err));
