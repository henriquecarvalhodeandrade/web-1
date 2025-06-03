const numerosParaVerificar = [2, 4, 7, 8, 10];

const temAlgumImpar = numerosParaVerificar.some(function(numero) {
	console.log("Verificando (some):", numero); // Para ver quando ele para
	return numero % 2 !== 0;
});
console.log("Tem algum número ímpar?", temAlgumImpar); // Saída: true
// Log interno:
// Verificando (some): 2
// Verificando (some): 4
// Verificando (some): 7 (para aqui, pois encontrou um ímpar)

const tarefas = [
	{ nome: "Lavar louça", completa: true },
	{ nome: "Estudar JS", completa: false },
	{ nome: "Ir ao mercado", completa: true }
];
const algumaTarefaIncompleta = tarefas.some(tarefa => !tarefa.completa);
console.log("Alguma tarefa está incompleta?", algumaTarefaIncompleta); // Saída: true