function calcularAreaRetangulo(largura, altura) {
    if (largura <= 0 || altura <= 0) {
        return "Dimensões inválidas"; // Pode retornar diferentes tipos de valores
    }
    const area = largura * altura;
    return area; // Retorna o valor calculado
}

let area1 = calcularAreaRetangulo(10, 5);
console.log("Área do retângulo 1:", area1); // Saída: Área do retângulo 1: 50

let area2 = calcularAreaRetangulo(7, 0);
console.log("Área do retângulo 2:", area2); // Saída: Área do retângulo 2: Dimensões inválidas

let area3 = calcularAreaRetangulo(8, 3); // O valor retornado pode ser usado diretamente
console.log("Área do retângulo 3 é maior que 20?", area3 > 20); // Saída: Área do retângulo 3 é maior que 20? true