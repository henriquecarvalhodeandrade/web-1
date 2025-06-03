function cumprimentar(nome = "Visitante", saudacao = "Bem-vindo(a)") {
    console.log(`${saudacao}, ${nome}!`);
}

cumprimentar("Ana", "Olá"); // Saída: Olá, Ana!
cumprimentar("Carlos");      // Saída: Bem-vindo(a), Carlos! (usa saudacao padrão)
cumprimentar();              // Saída: Bem-vindo(a), Visitante! (usa ambos os padrões)