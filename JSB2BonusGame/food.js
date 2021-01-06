class Food {
	constructor() {
		this.x = Math.round((Math.random() * (800-25)) / 25) * 25;
		this.y = Math.round((Math.random() * (500-25)) / 25) * 25;
		this.width = 25;
		this.height = 25;
	}
	
	randomize(player) {
		var flag = true;
		while (flag) {
			flag = false;
			this.x = Math.round((Math.random() * (800-25)) / 25) * 25;
			this.y = Math.round((Math.random() * (500-25)) / 25) * 25;
			if (this.x === player.x && this.y === player.y) {
				flag = true;
			}
			for (var i = 0; i < player.body.length; i++) {
				if (this.x === player.body[i][0] && this.y === player.body[i][1]) {
					flag = true;
				}
			}
		}
	}
	
	render(context) {
		context.fillStyle = "red";
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}