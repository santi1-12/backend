const express = require('express');
const path = require('path');
const productosRouter = require('./routes/productos.js');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3030;  

app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/productos', productosRouter);

app.listen(port, () => {
    console.log(`Frontend is running on http://localhost:${port}`);
});