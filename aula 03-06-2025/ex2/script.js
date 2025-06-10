const botao = document.getElementById('meuBotao');

let topPosition = parseFloat(botao.style.top) || 0; // Pega do CSS ou inicia em 0
let leftPosition = parseFloat(botao.style.left) || 0; // Pega do CSS ou inicia em 0

const speed = 3; // Ajuste este valor para mudar a velocidade do movimento
// Se você quiser uma velocidade diagonal mais consistente com a horizontal/vertical:
const diagonalFactor = 0.7071; // Aproximadamente 1/sqrt(2)

// Objeto para rastrear quais teclas estão atualmente pressionadas
const keysPressed = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

// Aplicar a posição inicial (garante que o JS e CSS estejam sincronizados)
botao.style.top = topPosition + 'px';
botao.style.left = leftPosition + 'px';

// Listener para quando uma tecla é pressionada
document.addEventListener('keydown', (e) => {
    if (e.key in keysPressed) { // Verifica se é uma das teclas de seta
        e.preventDefault(); // Previne o scroll padrão da página
        keysPressed[e.key] = true;
    }
});

// Listener para quando uma tecla é solta
document.addEventListener('keyup', (e) => {
    if (e.key in keysPressed) { // Verifica se é uma das teclas de seta
        e.preventDefault(); // Previne o scroll padrão da página
        keysPressed[e.key] = false;
    }
});

// Função de loop de animação para mover o botão
function gameLoop() {
    let moveX = 0;
    let moveY = 0;

    if (keysPressed.ArrowUp) {
        moveY -= speed;
    }
    if (keysPressed.ArrowDown) {
        moveY += speed;
    }
    if (keysPressed.ArrowLeft) {
        moveX -= speed;
    }
    if (keysPressed.ArrowRight) {
        moveX += speed;
    }

    // Normalização para movimento diagonal (velocidade consistente)
    if (moveX !== 0 && moveY !== 0) {
        moveX *= diagonalFactor;
        moveY *= diagonalFactor;
    }

    // Atualiza as posições
    topPosition += moveY;
    leftPosition += moveX;

    // Aplica as novas posições ao estilo do botão
    botao.style.top = topPosition + 'px';
    botao.style.left = leftPosition + 'px';

    // Opcional: Log para ver o que está acontecendo
    // if (moveX !== 0 || moveY !== 0) {
    //     console.log(`Movendo: Top=${topPosition.toFixed(2)}px, Left=${leftPosition.toFixed(2)}px`);
    // }

    // Continua o loop na próxima frame de animação
    requestAnimationFrame(gameLoop);
}

// Inicia o loop de animação
requestAnimationFrame(gameLoop);

// Opcional: Dar foco ao botão para que ele possa receber eventos de teclado diretamente
// se você preferir adicionar o listener ao botão em vez do documento.
// No entanto, para um controle global, 'document' é melhor para este caso.
// botao.focus();