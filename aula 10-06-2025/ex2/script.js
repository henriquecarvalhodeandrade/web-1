const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');
const searchContainer = document.querySelector('.search-container');
const searchButton = document.getElementById('searchButton');

// Remove o botão de busca, já que não será mais necessário
searchContainer.removeChild(searchButton);
// Ajusta o estilo do input para ocupar o espaço do botão
searchInput.style.borderRadius = '4px'; 
searchInput.style.width = '80%'; // Ajusta a largura se necessário


let debounceTimeout;

// Adiciona um evento que dispara a cada vez que o usuário digita no campo
searchInput.addEventListener('input', () => {
    // Cancela o timeout anterior para que a busca não aconteça enquanto o usuário ainda está digitando
    clearTimeout(debounceTimeout);

    // Cria um novo timeout para executar a busca após 300ms
    debounceTimeout = setTimeout(() => {
        searchShows();
    }, 300); // 300 milissegundos de espera
});


async function searchShows() {
    const query = searchInput.value;
    
    // Se o campo de busca estiver vazio, limpa os resultados e não faz a busca
    if (!query) {
        resultsContainer.innerHTML = '';
        return;
    }

    try {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
        displayResults(response.data);
    } catch (error) {
        console.error("Erro ao buscar as séries:", error);
        resultsContainer.innerHTML = "<p>Ocorreu um erro ao buscar os resultados. Tente novamente.</p>";
    }
}

function displayResults(shows) {
    resultsContainer.innerHTML = ''; // Limpa os resultados anteriores

    if (shows.length === 0) {
        resultsContainer.innerHTML = '<p>Nenhuma série encontrada com este nome.</p>';
        return;
    }

    shows.forEach(item => {
        const show = item.show;

        // Cria o card para cada série
        const card = document.createElement('div');
        card.className = 'show-card';

        // Imagem (Capa)
        const image = document.createElement('img');
        image.src = show.image ? show.image.medium : 'https://via.placeholder.com/200x280?text=Sem+Imagem';
        image.alt = `Capa de ${show.name}`;

        // Nome da série
        const name = document.createElement('h2');
        name.textContent = show.name;

        // Score
        const score = document.createElement('p');
        const scoreValue = item.score ? (item.score * 10).toFixed(2) : "N/A";
        score.innerHTML = `Score: <span class="score">${scoreValue}</span>`;

        // Adiciona os elementos ao card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(score);

        // Adiciona o card ao container de resultados
        resultsContainer.appendChild(card);
    });
}