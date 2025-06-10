document.addEventListener('DOMContentLoaded', () => {
    const temperaturaInput = document.getElementById('temperatura');
    const btnConverter = document.getElementById('btnConverter');
    const resultadoTexto = document.getElementById('resultadoTexto');
    const form = document.getElementById('tempConverterForm');

    // Função para converter Celsius para Fahrenheit
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    // Função para converter Fahrenheit para Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    btnConverter.addEventListener('click', () => {
        const tempValue = parseFloat(temperaturaInput.value);
        const tipoConversaoSelecionado = document.querySelector('input[name="tipoConversao"]:checked');

        resultadoTexto.textContent = ''; // Limpa o resultado anterior

        if (isNaN(tempValue)) {
            resultadoTexto.textContent = "Por favor, insira um valor numérico válido para a temperatura.";
            resultadoTexto.style.color = "red";
            return;
        }

        if (!tipoConversaoSelecionado) {
            resultadoTexto.textContent = "Por favor, selecione o tipo de conversão.";
            resultadoTexto.style.color = "red";
            return;
        }

        let resultado;
        let unidadeOriginal;
        let unidadeConvertida;

        if (tipoConversaoSelecionado.value === "toFahrenheit") {
            resultado = celsiusToFahrenheit(tempValue);
            unidadeOriginal = "°C";
            unidadeConvertida = "°F";
            resultadoTexto.textContent = `${tempValue.toFixed(2)}${unidadeOriginal} é igual a ${resultado.toFixed(2)}${unidadeConvertida}.`;
        } else if (tipoConversaoSelecionado.value === "toCelsius") {
            resultado = fahrenheitToCelsius(tempValue);
            unidadeOriginal = "°F";
            unidadeConvertida = "°C";
            resultadoTexto.textContent = `${tempValue.toFixed(2)}${unidadeOriginal} é igual a ${resultado.toFixed(2)}${unidadeConvertida}.`;
        }
        resultadoTexto.style.color = "green"; // Cor para resultado bem-sucedido
    });

    // Opcional: Limpar resultado ao mudar o valor ou tipo de conversão
    temperaturaInput.addEventListener('input', () => {
        resultadoTexto.textContent = '';
    });

    document.querySelectorAll('input[name="tipoConversao"]').forEach(radio => {
        radio.addEventListener('change', () => {
            resultadoTexto.textContent = '';
        });
    });
});