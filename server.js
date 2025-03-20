import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Replicate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const server = `http://localhost:${PORT}`;
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/return', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'return.html'));
});

app.get('/config', (req, res) => {
    res.json({ server: server });
});

app.listen(PORT, () => {
    console.log(`Server is running at ${server}`);
});


