async function addUser(name, email, birthDate) {
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, birthDate }),
    });
    return response.json();
}

async function addMusic(title, artist, album, duration, genre) {
    const response = await fetch('/api/music', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, artist, album, duration, genre }),
    });
    return response.json();
}

async function createPlaylist(name, description) {
    const response = await fetch('/api/playlists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }),
    });
    return response.json();
}

// Detecta em qual página estamos e adiciona os event listeners
if (document.getElementById('userForm')) {
    document.getElementById('userForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const birthDate = document.getElementById('userBirthDate').value;
        const users = await addUser(name, email, birthDate);
        console.log(users);
        this.reset();
    });
}

if (document.getElementById('musicForm')) {
    document.getElementById('musicForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        const title = document.getElementById('musicTitle').value;
        const artist = document.getElementById('musicArtist').value;
        const album = document.getElementById('musicAlbum').value;
        const duration = document.getElementById('musicDuration').value;
        const genre = document.getElementById('musicGenre').value;
        const musics = await addMusic(title, artist, album, duration, genre);
        console.log(musics);
        this.reset();
    });
}

if (document.getElementById('playlistForm')) {
    document.getElementById('playlistForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        const name = document.getElementById('playlistName').value;
        const description = document.getElementById('playlistDescription').value;
        const playlists = await createPlaylist(name, description);
        console.log(playlists);
        this.reset();
    });
}