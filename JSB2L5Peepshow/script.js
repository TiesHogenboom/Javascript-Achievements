var money = document.getElementById('money').innerHTML;
var time = document.getElementById('time-left').innerHTML;
var curtain = document.getElementById('curtain');
var timer;

function openCurtain() {
	money -= 5;
	time = 5;
	document.getElementById('money').innerHTML = money;
	curtain.src = "burger.png";
	timer = setInterval("timerFunction()", 50);
}

function closeCurtain() {
	window.clearInterval(timer);
	curtain.src = "curtain.png";
}

function timerFunction() {
	time -= 0.05;
	if (time <= 0) {
		closeCurtain();
		time = 0;
	}
	document.getElementById('time-left').innerHTML = Math.round(time * 100) / 100;
}