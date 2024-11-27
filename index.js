const express = require('express');
const path = require('path');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hostname', (req, res) => {
    res.send(os.hostname());
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});