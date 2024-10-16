const music = require('./music');
const user = require('./user');
const playlist = require('./playlist');

// Funções de API
function addNewMusic(title, artist, album, duration, genre) {
    return music.addMusic(title, artist, album, duration, genre);
}

function addNewUser(name, email, birthDate) {
    return user.addUser(name, email, birthDate);
}

function createNewPlaylist(name, description) {
    return playlist.createPlaylist(name, description);
}

// Expondo funções para uso
module.exports = { addNewMusic, addNewUser, createNewPlaylist };