let playlistCollection = [];

// Função para criar uma playlist
function createPlaylist(name, description) {
    const newPlaylist = { name, description, songs: [] };
    playlistCollection.push(newPlaylist);
    return playlistCollection; // Retorna a coleção atualizada
}

// Função para listar playlists
function getPlaylists() {
    return playlistCollection;
}

module.exports = { createPlaylist, getPlaylists };