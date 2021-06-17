let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");

let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
// Randomirar a aparição da comida
let food = {
    // Math.floor = Retira a parte flutuante (depois da virgula)
    // math.random = Gera um número aleatório de 1 até o setado, nesse caso o 16
    // foi multiplicado pelo "box", para fazer com que a fruta aparece dentro do canvas
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = "Lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update);
function update(event) {
    // Mover a snake
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 40 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 38 && direction != "up") direction = "down";
}
// função para criar fruta
function criarFruit() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

function atualizarJogo() {
    for(i=1; i<snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game Over D:");
        }
    }
    // Fazer o loop, caso a snake saida do canvas
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "down") snake[0].y = 16 * box;
    // Chama a função criar background / snake / food
    criarBG();
    criarSnake();
    criarFruit();
    // Posicição inicial da snake
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    // Condições para movimentar a snake
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY += box;
    if (direction == "down") snakeY -= box;
    // Coleta da comida / Gerando uma nova comida
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); // Retirar o ultimo elemento da snake
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }
    // Acrescentar um elemento a frente da snake
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}
let jogo = setInterval(atualizarJogo, 100); // taxa de atualização: 100 milisegundos
