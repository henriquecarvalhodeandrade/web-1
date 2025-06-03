let ehMaiorDeIdade = true;
let temCarteiraDeMotorista = false;
let ehEstudante = true;

// E lógico (&&) - retorna true se AMBAS as condições forem verdadeiras
console.log("Pode dirigir? (ehMaiorDeIdade && temCarteiraDeMotorista):", ehMaiorDeIdade && temCarteiraDeMotorista); // Saída: false
console.log("É maior e estudante? (ehMaiorDeIdade && ehEstudante):", ehMaiorDeIdade && ehEstudante);          // Saída: true

// OU lógico (||) - retorna true se PELO MENOS UMA das condições for verdadeira
console.log("Tem algum benefício? (temCarteiraDeMotorista || ehEstudante):", temCarteiraDeMotorista || ehEstudante); // Saída: true
console.log("É jovem ou tem carteira? (false || false):", false || false); // Saída: false

// NÃO lógico (!) - inverte o valor booleano
console.log("Não é estudante? (!ehEstudante):", !ehEstudante); // Saída: false
console.log("Não é maior de idade? (!ehMaiorDeIdade):", !ehMaiorDeIdade); // Saída: false (porque ehMaiorDeIdade é true)
console.log("Não tem carteira? (!temCarteiraDeMotorista):", !temCarteiraDeMotorista); // Saída: true