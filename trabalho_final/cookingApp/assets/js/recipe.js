document.addEventListener('DOMContentLoaded', () => {
    // Verifica se estamos na página de perfil para executar as funções
    if (window.location.pathname.endsWith('profile.html')) {
        const user = getLoggedInUser();
        if (!user) {
            window.location.href = 'login.html'; // Protege a página
            return;
        }

        loadMyRecipes(); // Carrega as receitas do usuário na grade

        const recipeForm = document.getElementById('recipe-form');
        recipeForm.addEventListener('submit', handleSaveRecipe);

        const cancelEditBtn = document.getElementById('cancel-edit-btn');
        cancelEditBtn.addEventListener('click', cancelEdit);
        
        const confirmDeleteBtn = document.getElementById('confirm-delete-recipe-btn');
        confirmDeleteBtn.addEventListener('click', confirmDeleteRecipe);
    }
});

let recipeToDeleteId = null; // Variável global para guardar o ID da receita a ser deletada
const myRecipesModal = new bootstrap.Modal(document.getElementById('deleteRecipeModal'));

// (Consulta 2) Carrega as receitas do usuário logado na grade do perfil
function loadMyRecipes() {
    const user = getLoggedInUser();
    const allRecipes = getRecipes();
    const myRecipes = allRecipes.filter(recipe => recipe.userId === user.id);

    const grid = document.getElementById('my-recipes-grid');
    grid.innerHTML = '';

    if (myRecipes.length === 0) {
        grid.innerHTML = '<p>Você ainda não cadastrou nenhuma receita.</p>';
        return;
    }

    myRecipes.forEach(recipe => {
        const card = `
            <div class="col">
                <div class="card h-100">
                    <img src="${recipe.imageUrl}" class="card-img-top" alt="${recipe.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${recipe.title}</h5>
                        <p class="card-text text-muted small">Tempo: ${recipe.prepTime}</p>
                        <div class="mt-auto">
                            <button class="btn btn-sm btn-outline-primary" onclick="editRecipe(${recipe.id})"><i class="bi bi-pencil"></i> Editar</button>
                            <button class="btn btn-sm btn-outline-danger" onclick="prepareDeleteRecipe(${recipe.id})"><i class="bi bi-trash"></i> Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// (Cadastro 2 / Edição 2) Lida com o salvamento (criação ou atualização) da receita
function handleSaveRecipe(event) {
    event.preventDefault();
    const user = getLoggedInUser();

    // Pega os valores do formulário
    const recipeId = document.getElementById('recipeId').value;
    const title = document.getElementById('recipeTitle').value;
    const imageUrl = document.getElementById('recipeImageUrl').value;
    const prepTime = document.getElementById('recipePrepTime').value;
    const ingredients = document.getElementById('recipeIngredients').value;
    const instructions = document.getElementById('recipeInstructions').value;
    
    let recipes = getRecipes();

    if (recipeId) { // Se tem ID, estamos editando
        const recipeIndex = recipes.findIndex(r => r.id == recipeId);
        if (recipeIndex !== -1) {
            recipes[recipeIndex] = { ...recipes[recipeIndex], title, imageUrl, prepTime, ingredients, instructions };
        }
    } else { // Senão, estamos criando uma nova
        const newRecipe = {
            id: Date.now(),
            userId: user.id,
            title,
            imageUrl,
            prepTime,
            ingredients,
            instructions
        };
        recipes.push(newRecipe);
    }

    saveRecipes(recipes);
    alert('Receita salva com sucesso!');
    
    cancelEdit(); // Reseta o formulário
    loadMyRecipes(); // Recarrega a lista de receitas
}

// (Edição 2) Prepara o formulário para editar uma receita existente
function editRecipe(id) {
    const recipes = getRecipes();
    const recipe = recipes.find(r => r.id === id);

    if (recipe) {
        document.getElementById('recipe-form-title').innerText = "Editar Receita";
        document.getElementById('recipeId').value = recipe.id;
        document.getElementById('recipeTitle').value = recipe.title;
        document.getElementById('recipeImageUrl').value = recipe.imageUrl;
        document.getElementById('recipePrepTime').value = recipe.prepTime;
        document.getElementById('recipeIngredients').value = recipe.ingredients;
        document.getElementById('recipeInstructions').value = recipe.instructions;

        document.getElementById('save-recipe-btn').innerText = "Salvar Alterações";
        document.getElementById('cancel-edit-btn').style.display = 'inline-block';
        window.scrollTo(0, 0); // Rola a página para o topo para ver o formulário
    }
}

// Cancela o modo de edição, limpando o formulário
function cancelEdit() {
    document.getElementById('recipe-form-title').innerText = "Adicionar Nova Receita";
    document.getElementById('recipe-form').reset();
    document.getElementById('recipeId').value = '';
    document.getElementById('save-recipe-btn').innerText = "Salvar Receita";
    document.getElementById('cancel-edit-btn').style.display = 'none';
}


// (Exclusão 1.1) Prepara a exclusão, guardando o ID e abrindo o modal
function prepareDeleteRecipe(id) {
    recipeToDeleteId = id;
    myRecipesModal.show();
}

// (Exclusão 1.2) Confirma e executa a exclusão da receita
function confirmDeleteRecipe() {
    if (recipeToDeleteId) {
        let recipes = getRecipes();
        const updatedRecipes = recipes.filter(r => r.id !== recipeToDeleteId);
        saveRecipes(updatedRecipes);
        
        myRecipesModal.hide(); // Fecha o modal
        loadMyRecipes(); // Atualiza a lista
        recipeToDeleteId = null; // Limpa a variável
    }
}