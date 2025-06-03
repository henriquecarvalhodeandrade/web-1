function exemploLet() {
    if (true) {
        let a = 30;
        console.log("Dentro do if (let a):", a); // Saída: Dentro do if (let a): 30

        // let a = 40; // Erro: Identifier 'a' has already been declared (Não pode redeclarar no mesmo escopo)
        a = 45; // Reatribuição permitida
        console.log("Após reatribuição (let a):", a); // Saída: Após reatribuição (let a): 45
    } 
    // console.log("Fora do if, dentro da função (let a):", a); // Erro: a is not defined (a não é acessível fora do bloco if)
}

exemploLet();

if (true) {
    let bBloco = 60;
    console.log("Dentro do if (let bBloco):", bBloco); // Saída: Dentro do if (let bBloco): 60
}
// console.log("bBloco fora do if:", bBloco); // Erro: bBloco is not defined

let fruta = 'banana'; // Exemplo do seu arquivo base
console.log("Fruta (let):", fruta); // Saída: Fruta (let): banana