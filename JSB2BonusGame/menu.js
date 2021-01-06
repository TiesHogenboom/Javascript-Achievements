function menu(canvas, context) {
	context.font = "20px Rockwell";
	context.fillStyle = "Red";
	//Instructions
	context.fillText("Controls: WASD or Arrow keys to move", 10, 30);
	context.font = "30px Rockwell";
	context.fillStyle = "Green";
	// Title
	context.fillText("Snake", 330, 200);
	// Start Game button
	context.fillStyle = "black";
	context.fillRect(300, 250, 150, 50);
	context.fillStyle = "white";
	context.font = "20px Arial";
	context.fillText("Start Game", 325, 280);
	// Difficulty settings
	context.fillStyle = "red";
	context.fillRect(300, 350, 40, 50);
	context.fillStyle = "black";
	context.fillRect(355, 350, 40, 50);
	context.fillRect(410, 350, 40, 50);
	context.fillText("Difficulty", 340, 340);
	context.fillStyle = "white";
	context.fillText("1", 315, 380);
	context.fillText("2", 370, 380);
	context.fillText("3", 425, 380);
	document.addEventListener('click', menuClickHandler);
}

function resetDifficulty() {
	context.fillStyle = "black";
	context.fillRect(300, 350, 40, 50);
	context.fillRect(355, 350, 40, 50);
	context.fillRect(410, 350, 40, 50);
}

function menuClickHandler(event) {
	var x = event.pageX - canvas.offsetLeft;
	var y = event.pageY - canvas.offsetTop;
	// Start Game button
	if (x >= 300 && x <= 450 && y >= 250 && y <= 300) {
		console.log("Starting game...");
		document.removeEventListener('click', menuClickHandler);
		startGame();
	}
	
	// Difficulty buttons
	if (x >= 300 && x <= 340 && y >= 350 && y <= 400) {
		difficulty = 1;
		resetDifficulty();
		context.fillStyle = "red";
		context.fillRect(300, 350, 40, 50);
	} else if (x >= 355 && x <= 395 && y >= 350 && y <= 400) {
		difficulty = 2;
		resetDifficulty();
		context.fillStyle = "red";
		context.fillRect(355, 350, 40, 50);
	} else if (x >= 410 && x <= 450 && y >= 350 && y <= 400) {
		difficulty = 3;
		resetDifficulty();
		context.fillStyle = "red";
		context.fillRect(410, 350, 40, 50);
	}
	context.fillStyle = "white";
	context.fillText("1", 315, 380);
	context.fillText("2", 370, 380);
	context.fillText("3", 425, 380);
}