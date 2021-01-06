var canvas;
var context;
var player;
var food;
var gameTick;
var difficulty = 1;

function game() {
	console.log("asd");
	canvas = document.getElementById("game-canvas");
	context = canvas.getContext("2d");
	menu(canvas, context);
}

function startGame() {
	document.addEventListener('keydown', keyDownEvent);
	if (difficulty === 1) {
		gameTick = setInterval(onTick, 300);
	} else if (difficulty === 2) {
		gameTick = setInterval(onTick, 200);
	} else if (difficulty === 3) {
		gameTick = setInterval(onTick, 100);
	}
	player = new Player(10, 10);
	player.render(context);
	food = new Food(15, 15);
	food.render(context);
}

function restart() {
	document.removeEventListener('click', gameOverListener);
	context.clearRect(0, 0, canvas.width, canvas.height);
	startGame();
}

function gameOverListener(event) {
	var x = event.pageX - canvas.offsetLeft;
	var y = event.pageY - canvas.offsetTop;
	if (x >= 300 && x <= 450 && y >= 250 && y <= 300) {
		console.log("Restarting...");
		restart();
	}
}

function stopGame() {
	clearInterval(gameTick);
	context.font = "30px Arial";
	context.fillStyle = "black";
	context.fillText("Game Over", 300, 200);
	context.fillRect(300, 250, 150, 50);
	context.fillStyle = "white";
	context.font = "20px Arial";
	context.fillText("Retry", 350, 280);
	document.addEventListener('click', gameOverListener);
}

function checkCollision() {
	// Out of bounds
	if (player.x >= canvas.width || player.x < 0 || player.y < 0 || player.y >= canvas.height) {
		stopGame();
	}
	
	// Collide with self
	for (var i = 0; i < player.body.length; i++) {
		if (player.x === player.body[i][0] && player.y === player.body[i][1]) {
			stopGame();
			i = player.body.length;
		}
	}
	
	// Food consumption
	if (player.x === food.x && player.y === food.y) {
		player.addBody();
		food.randomize(player);
	}
}

function onTick() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	player.move();
	checkCollision();
	player.render(context);
	food.render(context);
}

function keyDownEvent(e) {
	var key = e.key;
	if ((key === "w" || key === "ArrowUp") && player.getDirection() !== "down") {
		player.setDirection("up");
	} else if ((key === "s" || key === "ArrowDown") && player.getDirection() !== "up") {
		player.setDirection("down");
	} else if ((key === "d" || key === "ArrowRight") && player.getDirection() !== "left") {
		player.setDirection("right");
	} else if ((key === "a" || key === "ArrowLeft") && player.getDirection() !== "right") {
		player.setDirection("left");
	}
}