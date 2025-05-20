
function main(){
    let gatos = [];
    let cachorros = [];

    let continuar = true;

    while (continuar) {
        let tipoAnimal = prompt('Informe o tipo de animal (gato ou cachorro):').toLowerCase();

        if (tipoAnimal !== 'gato' && tipoAnimal !== 'cachorro') {
            alert('Tipo de animal inválido! Informe "gato" ou "cachorro".');
            continue;
        }

        let nome = prompt('Informe o nome do ' + tipoAnimal + ':');
        let idade = parseInt(prompt('Informe a idade do ' + tipoAnimal + ':'), 10);

        if (tipoAnimal === 'gato') {
            let gato = new Gato(nome, idade);
            gatos.push(gato);
        } else if (tipoAnimal === 'cachorro') {
            let cachorro = new Cachorro(nome, idade);
            cachorros.push(cachorro);
        }

        continuar = confirm('Deseja cadastrar outro animal?');
    }

    alert('Animais cadastrados:\n\nGatos:');
    gatos.forEach(gato => alert(gato.exibirInfo()));
  
    alert('Cachorros:');
    cachorros.forEach(cachorro => alert(cachorro.exibirInfo()));
}

main()

