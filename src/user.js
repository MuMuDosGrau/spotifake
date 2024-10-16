let userCollection = [];

// Função para cadastrar um usuário
function addUser(name, email, birthDate) {
    const newUser = { name, email, birthDate, playlists: [] };
    userCollection.push(newUser);
    return userCollection; // Retorna a coleção atualizada
}

// Função para listar usuários
function getUsers() {
    return userCollection;
}

module.exports = { addUser, getUsers };