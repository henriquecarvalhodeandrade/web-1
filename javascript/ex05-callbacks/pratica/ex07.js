const notas = [7, 8, 9, 6, 10];

const todosAprovados = notas.every(function(nota) {
	console.log("Verificando (every):", nota); // Para ver quando ele para
	return nota >= 6;
});
console.log("Todos foram aprovados (nota >= 6)?", todosAprovados); // Saída: true
// Log interno: todas as notas serão verificadas, pois todas são >= 6

const notas2 = [7, 8, 5, 9, 10];
const todosAprovados2 = notas2.every(nota => {
	console.log("Verificando (every 2):", nota);
	return nota >=6;
});
console.log("Todos foram aprovados na turma 2?", todosAprovados2); // Saída: false
// Log interno:
// Verificando (every 2): 7
// Verificando (every 2): 8
// Verificando (every 2): 5 (para aqui, pois encontrou uma nota < 6)