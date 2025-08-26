const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname,'src','index.html'));
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});

app.get('/saibamais', async (req,res) => {
    res.sendFile(path.join(__dirname,'src','saibamais.html'));
});
