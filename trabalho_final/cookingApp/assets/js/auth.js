document.addEventListener('DOMContentLoaded', () => {
    // Atualiza a barra de navegação assim que a página carrega
    updateNavbar();

    // Adiciona listeners para os formulários e links se eles existirem na página atual
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', handleLogout);
    }

    const editProfileForm = document.getElementById('edit-profile-form');
    if(editProfileForm) {
        loadProfileData();
        editProfileForm.addEventListener('submit', handleEditProfile);
    }
    
    const deleteAccountBtn = document.getElementById('confirm-delete-account-btn');
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', handleDeleteAccount);
    }
});

// Atualiza a barra de navegação para mostrar os links corretos (logado/deslogado)
function updateNavbar() {
    const user = getLoggedInUser();
    const navProfile = document.getElementById('nav-profile');
    const navLogin = document.getElementById('nav-login');
    const navLogout = document.getElementById('nav-logout');

    if (user) {
        navProfile.style.display = 'block';
        navLogout.style.display = 'block';
        navLogin.style.display = 'none';
    } else {
        navProfile.style.display = 'none';
        navLogout.style.display = 'none';
        navLogin.style.display = 'block';
    }
}

// (Cadastro 1) Função para lidar com o cadastro de um novo usuário
function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const users = getUsers();
    
    // Verifica se o email já está em uso
    if (users.find(user => user.email === email)) {
        alert("Este email já está cadastrado. Tente outro.");
        return;
    }

    const newUser = {
        id: Date.now(), // ID único simples
        username,
        email,
        password // Em um app real, a senha deveria ser criptografada (hashed)!
    };

    users.push(newUser);
    saveUsers(users);

    alert("Cadastro realizado com sucesso! Faça o login para continuar.");
    window.location.reload(); // Recarrega a página para o usuário ir para a aba de login
}

// Função para lidar com o login do usuário
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Remove a senha do objeto antes de salvar na sessão por segurança
        const { password, ...userToSave } = user;
        setLoggedInUser(userToSave);
        window.location.href = 'profile.html'; // Redireciona para a página de perfil
    } else {
        alert("Email ou senha inválidos.");
    }
}

// Função para fazer logout
function handleLogout() {
    setLoggedInUser(null); // Limpa o usuário da sessão
    window.location.href = 'index.html'; // Redireciona para a home
}

// Carrega dados do usuário no formulário de perfil
function loadProfileData() {
    const user = getLoggedInUser();
    if (user) {
        document.getElementById('profileUsername').value = user.username;
        document.getElementById('profileEmail').value = user.email;
    } else {
         // Se não estiver logado, redireciona para a página de login
        window.location.href = 'login.html';
    }
}

// (Edição 1) Função para editar o perfil do usuário
function handleEditProfile(event) {
    event.preventDefault();
    const loggedInUser = getLoggedInUser();
    const newUsername = document.getElementById('profileUsername').value;

    let users = getUsers();
    const userIndex = users.findIndex(u => u.id === loggedInUser.id);

    if (userIndex !== -1) {
        users[userIndex].username = newUsername;
        saveUsers(users);

        // Atualiza também os dados na sessionStorage
        const updatedUser = { ...loggedInUser, username: newUsername };
        setLoggedInUser(updatedUser);
        
        alert("Perfil atualizado com sucesso!");
    }
}

// (Exclusão 2) Função para excluir a conta do usuário
function handleDeleteAccount() {
    const user = getLoggedInUser();
    if (!user) return;

    // 1. Excluir todas as receitas do usuário
    let recipes = getRecipes();
    const remainingRecipes = recipes.filter(r => r.userId !== user.id);
    saveRecipes(remainingRecipes);

    // 2. Excluir o usuário
    let users = getUsers();
    const remainingUsers = users.filter(u => u.id !== user.id);
    saveUsers(remainingUsers);

    // 3. Fazer logout e redirecionar
    handleLogout();
}