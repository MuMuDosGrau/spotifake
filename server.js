const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser'); // Para parsear os dados do corpo das requisições
const appModule = require('./src/app'); // Importa o módulo principal

const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // Para suportar JSON no corpo das requisições
app.use(bodyParser.urlencoded({ extended: true })); // Para suportar dados de formulários

// Rota principal que serve o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rotas para cadastro de usuários
app.post('/api/users', (req, res) => {
    const { name, email, birthDate } = req.body;
    const users = appModule.addNewUser(name, email, birthDate);
    res.json(users); // Retorna a lista de usuários
});

// Rotas para cadastro de músicas
app.post('/api/music', (req, res) => {
    const { title, artist, album, duration, genre } = req.body;
    const musics = appModule.addNewMusic(title, artist, album, duration, genre);
    res.json(musics); // Retorna a lista de músicas
});

// Rotas para criar playlists
app.post('/api/playlists', (req, res) => {
    const { name, description } = req.body;
    const playlists = appModule.createNewPlaylist(name, description);
    res.json(playlists); // Retorna a lista de playlists
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});