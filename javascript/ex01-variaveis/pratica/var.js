function exemploVar() {
    if (true) {
        var x = 10;
        console.log("Dentro do if (var x):", x); // Saída: Dentro do if (var x): 10
    }
    console.log("Fora do if, dentro da função (var x):", x); // Saída: Fora do if, dentro da função (var x): 10 (x é acessível)

    var x = 20; // Redeclaração permitida
    console.log("Após redeclaração (var x):", x); // Saída: Após redeclaração (var x): 20
}

exemploVar();
// console.log(x); // Erro: x is not defined (x não é acessível fora da função, a menos que seja global)

if (true) {
    var yGlobal = 50;
}
console.log("yGlobal fora do if:", yGlobal); // Saída: yGlobal fora do if: 50 (var não tem escopo de bloco)