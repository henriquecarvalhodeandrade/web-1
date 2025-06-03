// Podem ser Imediatamente Invocadas (IIFE - Immediately Invoked Function Expression):
// Como são expressões, elas podem ser definidas e executadas no mesmo instante. Isso é útil para criar um escopo privado e evitar poluir o escopo global.

(function() {
    let mensagemPrivada = "Esta mensagem é de uma IIFE!";
    console.log(mensagemPrivada);
})(); // Os parênteses finais () invocam a função imediatamente

// IIFE com parâmetros
(function(nome) {
    console.log("Olá, " + nome + " (IIFE com parâmetro)!");
})("Mundo");