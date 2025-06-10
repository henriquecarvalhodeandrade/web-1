/* 
    Crie uma aplicação de gerenciamento de eventos de uma agenda.

    A aplicação deve permitir cadastrar, listar, editar e excluir eventos com atributos:
        - data e hora
        - local
        - titulo
*/


// Exemplo do professor:
let cliente = {
    nome: 'fulano',
    idade: 18
};

localStorage['cliente'] = JSON.stringify(cliente);
console.log(localStorage['cliente']);

let obj = JSON.parse(localStorage['cliente']);
obj['nome'] = 'cliclano';
localStorage['cliente'] = JSON.stringify(obj);
console.log(localStorage['cliente']);

