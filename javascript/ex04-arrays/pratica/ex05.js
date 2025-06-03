let listaCompras = ["arroz", "feijão"];
console.log("Lista antes do push:", listaCompras);
listaCompras.push("macarrão", "óleo");
console.log("Lista depois do push:", listaCompras); // Saída: [ 'arroz', 'feijão', 'macarrão', 'óleo' ]

let ferramentas = ["martelo", "chave de fenda", "alicate"];
let ultimaFerramenta = ferramentas.pop();
console.log("Ferramenta removida:", ultimaFerramenta); // Saída: alicate
console.log("Ferramentas restantes:", ferramentas);   // Saída: [ 'martelo', 'chave de fenda' ]

let numerosPares = [2, 4, 6];
numerosPares.unshift(0);
console.log("Números pares após unshift:", numerosPares); // Saída: [ 0, 2, 4, 6 ]

let letras = ["a", "b", "c"];
let primeiraLetra = letras.shift();
console.log("Letra removida:", primeiraLetra); // Saída: a
console.log("Letras restantes:", letras);   // Saída: [ 'b', 'c' ]

let meses = ["Jan", "Mar", "Abr", "Jun"];
console.log("Meses antes do splice:", meses);

// Adicionar "Fev" no índice 1, sem remover ninguém
meses.splice(1, 0, "Fev");
console.log("Meses após adicionar Fev:", meses); // Saída: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Jun' ]

// Remover 1 elemento a partir do índice 3 ("Abr")
meses.splice(3, 1);
console.log("Meses após remover Abr:", meses); // Saída: [ 'Jan', 'Fev', 'Mar', 'Jun' ]

// Substituir "Jun" por "Mai", "Jun" no índice 3
meses.splice(3, 1, "Mai", "Jun");
console.log("Meses após substituir:", meses); // Saída: [ 'Jan', 'Fev', 'Mar', 'Mai', 'Jun' ]

let esportes = ["futebol", "vôlei", "basquete"];
console.log("Iterando com for:");
for (let i = 0; i < esportes.length; i++) {
  console.log(esportes[i]);
}

let cidades = ["São Paulo", "Rio de Janeiro", "Salvador"];
console.log("\nIterando com forEach:");
cidades.forEach(function(cidade, indice) {
    console.log(`Índice ${indice}: ${cidade}`);
});
// Com Arrow Function:
// cidades.forEach(cidade => console.log(cidade));

let valores = [100, 200, 300];
console.log("\nIterando com for...of:");
for (const valor of valores) {
    console.log(valor);
}

// Exemplo da sua imagem, adaptado:
let meu_array_numerico = [2, 5.5, 10];
let i = 0;
console.log("\nIterando com while (exemplo da imagem):");
while (i < meu_array_numerico.length) {
    console.log(meu_array_numerico[i]);
    i++;
}

let frutasEx = ["uva", "morango", "abacaxi", "morango"];
console.log("Índice de 'morango':", frutasEx.indexOf("morango"));      // Saída: 1
console.log("Índice de 'laranja':", frutasEx.indexOf("laranja"));     // Saída: -1
console.log("Índice de 'morango' a partir do índice 2:", frutasEx.indexOf("morango", 2)); // Saída: 3

let nomes = ["Ana", "Bia", "Carlos"];
console.log("Array inclui 'Bia'?", nomes.includes("Bia"));     // Saída: true
console.log("Array inclui 'David'?", nomes.includes("David")); // Saída: false

let idades = [15, 22, 18, 30];
let primeiraIdadeAdulta = idades.find(idade => idade >= 18);
console.log("Primeira idade adulta:", primeiraIdadeAdulta); // Saída: 22

let produtos = [{id: 1, nome: 'Caneta'}, {id: 2, nome: 'Caderno'}, {id: 3, nome: 'Lápis'}];
let indiceCaderno = produtos.findIndex(produto => produto.nome === 'Caderno');
console.log("Índice do Caderno:", indiceCaderno); // Saída: 1

let numerosGrandes = [10, 5, 100, 25, 8, 70];
let numerosMaioresQue20 = numerosGrandes.filter(numero => numero > 20);
console.log("Números maiores que 20:", numerosMaioresQue20); // Saída: [ 100, 25, 70 ]

let precos = [10, 20, 30];
let precosComTaxa = precos.map(preco => preco * 1.1); // Adiciona 10% de taxa
console.log("Preços com taxa:", precosComTaxa); // Saída: [ 11, 22, 33 ]
console.log("Preços originais (não são modificados):", precos);

let itens = ["a", "b", "c", "d", "e"];
let subItens1 = itens.slice(1, 3); // Elementos do índice 1 até (mas não incluindo) o 3
console.log("Sub-itens (1 a 3):", subItens1); // Saída: [ 'b', 'c' ]

let subItens2 = itens.slice(2); // Elementos do índice 2 até o final
console.log("Sub-itens (2 ao final):", subItens2); // Saída: [ 'c', 'd', 'e' ]

let copiaItens = itens.slice(); // Copia o array inteiro
console.log("Cópia dos itens:", copiaItens);

let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];
let arrayConcatenado = array1.concat(array2, array3, 7);
console.log("Array concatenado:", arrayConcatenado); // Saída: [ 1, 2, 3, 4, 5, 6, 7 ]

let palavras = ["Olá", "mundo", "JavaScript"];
let frase = palavras.join(" "); // Separador é um espaço
console.log("Frase:", frase); // Saída: Olá mundo JavaScript

let csvData = ["item1", "item2", "item3"];
let linhaCsv = csvData.join(",");
console.log("Linha CSV:", linhaCsv); // Saída: item1,item2,item3

let original = [1, 2, 3, 4];
console.log("Original:", original);
original.reverse();
console.log("Revertido:", original); // Saída: [ 4, 3, 2, 1 ]

let nomesParaOrdenar = ["Carlos", "Ana", "Beatriz", "Daniel"];
nomesParaOrdenar.sort();
console.log("Nomes ordenados (alfabeticamente):", nomesParaOrdenar); // Saída: [ 'Ana', 'Beatriz', 'Carlos', 'Daniel' ]

// Cuidado com números: sort() converte para string por padrão
let numerosParaOrdenar = [10, 5, 100, 1, 25];
numerosParaOrdenar.sort(); // Ordenação lexicográfica (como strings)
console.log("Números 'ordenados' (incorretamente):", numerosParaOrdenar); // Saída: [ 1, 10, 100, 25, 5 ]

// Para ordenar números corretamente, forneça uma função de comparação
numerosParaOrdenar.sort(function(a, b) {
    return a - b; // Para ordem crescente
});
console.log("Números ordenados (corretamente):", numerosParaOrdenar); // Saída: [ 1, 5, 10, 25, 100 ]

// Ordem decrescente para números:
numerosParaOrdenar.sort((a, b) => b - a);
console.log("Números ordenados (decrescente):", numerosParaOrdenar); // Saída: [ 100, 25, 10, 5, 1 ]

let valoresParaSoma = [1, 2, 3, 4, 5];
let somaTotal = valoresParaSoma.reduce(function(acumulador, valorAtual) {
    console.log(`Acumulador: ${acumulador}, Valor Atual: ${valorAtual}`);
    return acumulador + valorAtual;
}, 0); // 0 é o valor inicial do acumulador
console.log("Soma total (reduce):", somaTotal); // Saída: 15

// Exemplo: encontrar o maior número
let numerosReduce = [50, 10, 90, 30, 70];
let maiorNumero = numerosReduce.reduce((max, atual) => {
    return atual > max ? atual : max;
}, numerosReduce[0]); // Pode usar o primeiro elemento como valor inicial
console.log("Maior número (reduce):", maiorNumero); // Saída: 90

