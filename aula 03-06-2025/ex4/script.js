// Seleciona os elementos HTML
const cepInput = document.querySelector('#cepInput');
const buscarCepButton = document.querySelector('#buscarCep');
const logradouroSpan = document.querySelector('#logradouro');
const bairroSpan = document.querySelector('#bairro');
const cidadeSpan = document.querySelector('#cidade');
const estadoSpan = document.querySelector('#estado');
const mensagemErro = document.querySelector('#mensagemErro');
const resultadoEnderecoDiv = document.querySelector('#resultadoEndereco');

// Inicialmente oculta a div de resultado
// resultadoEnderecoDiv.style.display = 'none';

// Função para consumir a API do ViaCEP
const consomeAPI = (cep) => {
    // Limpa mensagens de erro e resultados anteriores
    logradouroSpan.textContent = '';
    bairroSpan.textContent = '';
    cidadeSpan.textContent = '';
    estadoSpan.textContent = '';
    mensagemErro.textContent = '';
    resultadoEnderecoDiv.style.display = 'none'; // Esconde a div enquanto busca

    // Faz a requisição usando Axios
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
        const dados = response.data; // Os dados da API estão em response.data
        
        // Verifica se houve erro na resposta (CEP não encontrado)
        if (dados.erro) {
            mensagemErro.textContent = 'CEP não encontrado ou inválido.';
            return; // Sai da função
        }

        // Preenche os spans com os dados recebidos
        logradouroSpan.textContent = dados.logradouro;
        bairroSpan.textContent = dados.bairro;
        cidadeSpan.textContent = dados.localidade; // 'localidade' é a cidade na API do ViaCEP
        estadoSpan.textContent = dados.uf;       // 'uf' é o estado na API do ViaCEP

        // Mostra a div de resultado
        resultadoEnderecoDiv.style.display = 'block';
        })
        .catch(error => {
            // Lida com erros de requisição (ex: falha de rede)
            console.error('Erro ao buscar CEP:', error);
            mensagemErro.textContent = 'Ocorreu um erro ao buscar o CEP. Verifique sua conexão ou tente novamente.';
        });
};

// Adiciona um evento de clique ao botão para buscar o CEP
buscarCepButton.addEventListener('click', () => {
    // Remove qualquer caractere não numérico do CEP digitado
    const cepDigitado = cepInput.value.replace(/\D/g, ''); 

    if (cepDigitado.length === 8) {
        consomeAPI(cepDigitado);
    } else {
        mensagemErro.textContent = 'Por favor, digite um CEP válido com 8 dígitos.';
        resultadoEnderecoDiv.style.display = 'none'; // Esconde a div de resultado
    }
});

// Adiciona um evento para buscar o CEP ao pressionar Enter no campo de input
cepInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        buscarCepButton.click(); // Simula o clique no botão
    }
});