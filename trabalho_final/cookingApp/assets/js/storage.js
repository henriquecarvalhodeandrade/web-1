// ===== Funções de Persistência de Dados (localStorage) =====

// --- Receitas ---
function getRecipes() {
    // Tenta buscar as receitas. Se não houver, retorna um array vazio.
    return JSON.parse(localStorage.getItem('recipes')) || [];
}

function saveRecipes(recipes) {
    // Salva o array de receitas no localStorage como uma string JSON.
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// --- Usuários ---
function getUsers() {
    // Tenta buscar os usuários. Se não houver, retorna um array vazio.
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    // Salva o array de usuários no localStorage.
    localStorage.setItem('users', JSON.stringify(users));
}

// --- Usuário Logado (sessionStorage) ---
// Usamos sessionStorage para que o login expire quando o navegador for fechado.
function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem('loggedInUser'));
}

function setLoggedInUser(user) {
    if (user) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    } else {
        sessionStorage.removeItem('loggedInUser');
    }
}