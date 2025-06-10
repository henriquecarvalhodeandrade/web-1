/*

Faça um programa que permite buscar na API TVMaze em
https://www.tvmaze.com/api.

utilizar a biblioteca Axios.

Apresentar:
- as capas;
- score dos programas;
- nome;

*/
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

// Quando clicar "buscar" ele vai buscar:
searchButton.addEventListener('click', searchShows);

// Quando pressionar "enter" ele vai buscar:
searchInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        searchShows();
    }
});


async function searchShows() {
    // "query" é o nome do programa será informado:
    const query = searchInput.value; 
    if (!query) {
        alert("Por favor, digite o nome de uma série.");
        return;
    }

    try { 
        // Aqui é onde ele vai buscar os dados usando a API:
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
        displayResults(response.data);

    } catch (error) {
        // Caso aconteça algum erro na web:
        console.error("Erro ao buscar as séries:", error);
        resultsContainer.innerHTML = "<p>Ocorreu um erro ao buscar os resultados. Tente novamente.</p>";
    }
}

// Esse "shows" é o o data que o axios vai nos dar, no caso o array com as informações.
function displayResults(shows) {
    // Antes de recarregar, ele limpa os resultados anteriores da div:
    resultsContainer.innerHTML = ''; 

    // Se o tamanho do array em data for 0, então ele informa que não foi encontrada série alguma:
    if (shows.length === 0) {
        resultsContainer.innerHTML = '<p>Nenhuma série encontrada.</p>';
        return;
    }

    // Por ser um array, então ele deve pegar cada elemento, para cada item dentro do array:
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