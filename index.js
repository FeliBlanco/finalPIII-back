const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db.js');


const {
    PORT = 3000
} = process.env;


const app = express();

app.use(cors());
app.use(express.json())


// LAS RUTAS
app.use('/', require('./routes/index.js'))

app.listen(PORT, () => console.log(`PORT: ${PORT}`))
