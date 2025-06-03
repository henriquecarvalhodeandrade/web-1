let paises = ["Brasil", "Argentina", "Chile"];
console.log("Países antes:", paises);

// Modificando um elemento existente
paises[1] = "Uruguai";
console.log("Países depois da modificação:", paises); // Saída: [ 'Brasil', 'Uruguai', 'Chile' ]

// Adicionando um novo elemento em um índice específico
paises[3] = "Paraguai";
console.log("Países após adicionar Paraguai:", paises); // Saída: [ 'Brasil', 'Uruguai', 'Chile', 'Paraguai' ]

// Se atribuir a um índice muito além, posições intermediárias serão criadas como "empty" (vazias)
paises[5] = "Bolívia";
console.log("Países após adicionar Bolívia no índice 5:", paises);
console.log(paises[4]); // Saída: undefined (ou <1 empty item> dependendo do console)