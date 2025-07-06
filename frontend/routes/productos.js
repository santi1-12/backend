const express = require('express');
const axios = require('axios');
const productosRouter = express.Router();
require('dotenv').config();

const API_BASE_URL = process.env.API_URL_BASE || 'http://localhost:3030';

productosRouter.get('/productos', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/productos`);
        const productos = response.data;

        res.render('productos/lista', {
            productos: productos,
            titulo: 'Lista de Productos',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
});

module.exports = productosRouter;