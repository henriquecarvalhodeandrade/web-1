document.addEventListener('DOMContentLoaded', () => {
    // Verifica se estamos na página principal para carregar a grade de receitas
    if (document.getElementById('recipe-grid')) {
        loadAllRecipes();
    }
});

// Carrega todas as receitas na grade da página inicial
function loadAllRecipes() {
    const recipes = getRecipes();
    const grid = document.getElementById('recipe-grid');
    grid.innerHTML = '';

    if (recipes.length === 0) {
        grid.innerHTML = '<p class="text-center col-12">Ainda não há receitas. Seja o primeiro a postar uma!</p>';
        return;
    }

    recipes.forEach(recipe => {
        const card = `
            <div class="col">
                <div class="card recipe-card h-100" onclick="showRecipeDetails(${recipe.id})">
                    <img src="${recipe.imageUrl}" class="card-img-top" alt="${recipe.title}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// (Consulta 1) Mostra os detalhes de uma receita em um modal
function showRecipeDetails(id) {
    const recipes = getRecipes();
    const recipe = recipes.find(r => r.id === id);

    if (!recipe) return;

    const users = getUsers();
    const author = users.find(u => u.id === recipe.userId);

    const modalTitle = document.getElementById('recipeModalTitle');
    const modalBody = document.getElementById('recipeModalBody');

    modalTitle.innerText = recipe.title;
    modalBody.innerHTML = `
        <img src="${recipe.imageUrl}" class="img-fluid rounded mb-3" alt="${recipe.title}">
        <p><strong><i class="bi bi-person-circle"></i> Autor:</strong> ${author ? author.username : 'Desconhecido'}</p>
        <p><strong><i class="bi bi-clock"></i> Tempo de Preparo:</strong> ${recipe.prepTime}</p>
        <hr>
        <h5><i class="bi bi-card-checklist"></i> Ingredientes</h5>
        <p style="white-space: pre-wrap;">${recipe.ingredients}</p>
        <hr>
        <h5><i class="bi bi-journal-text"></i> Modo de Preparo</h5>
        <p style="white-space: pre-wrap;">${recipe.instructions}</p>
    `;

    const recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));
    recipeModal.show();
}