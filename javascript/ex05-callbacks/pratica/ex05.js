const pontuacoes = [10, 50, 80, 65, 90];

const indicePrimeiraPontuacaoAlta = pontuacoes.findIndex(function(pontuacao) {
  	return pontuacao >= 80;
});
console.log("Índice da primeira pontuação >= 80:", indicePrimeiraPontuacaoAlta); // Saída: 2

const indicePontuacaoBaixa = pontuacoes.findIndex(p => p < 10);
console.log("Índice de pontuação < 10:", indicePontuacaoBaixa); // Saída: -1