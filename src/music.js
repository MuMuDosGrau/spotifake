let musicCollection = [];

// Função para cadastrar uma música
function addMusic(title, artist, album, duration, genre) {
    const newMusic = { title, artist, album, duration, genre };
    musicCollection.push(newMusic);
    return musicCollection; // Retorna a coleção atualizada
}

// Função para listar músicas
function getMusics() {
    return musicCollection;
}

module.exports = { addMusic, getMusics };