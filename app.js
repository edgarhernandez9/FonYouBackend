const express = require("express");
const axios = require("axios");
const cors = require("cors");


const app = express();

const apiUrl = 'https://rickandmortyapi.com/api';

app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000',
        exposedHeaders: '*'
    })
);
app.use(express.json())

app.post('/getRickMory', async (req, res) => {

    try {
        const { page, name} = req.body;
        const response = await axios.get(`${apiUrl}/character/?page=${page}&name=${name}`);
        const character = response.data;
        // console.log(character);
        res.status(200).json(character);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        })
    }
});

app.listen(3001, () => {
    console.log('Servidor iniciado en el puerto 3001');
})