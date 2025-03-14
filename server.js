const express = require('express');
const path = require('path');
const app = express();

// Posluživanje statičkih datoteka iz direktorija "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta za testiranje WS PAY ReturnURL-a (ako je potrebno)
app.get('/return', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'return.html'));
});

// Pokretanje servera na portu 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server radi na http://localhost:${PORT}`);
});

const server = "http://localhost:3000";
module.exports = server;