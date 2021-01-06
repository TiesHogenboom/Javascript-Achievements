class Player {
	constructor(x, y) {
		this.width = 25;
		this.height = 25;
		this.direction = "right";
		this.x = x*10;
		this.y = y*10;
		this.body = [[10*8, 10*10], [10*6, 10*10]];
		this.bodyFlag = false;
	}
	
	setX(x) {
		this.x = x;
	}
	
	setY(y) {
		this.y = y;
	}
	
	setDirection(direction) {
		this.direction = direction;
	}
	
	getDirection() {
		return this.direction;
	}
	
	move() {
		this.body.unshift([this.x, this.y]);
		if (!this.bodyFlag) {
			this.body.pop();
		}
		this.bodyFlag = false;
		if (this.direction === "right") {
			this.x += this.width;
		} else if (this.direction === "left") {
			this.x -= this.width;
		} else if (this.direction === "down") {
			this.y += this.height;
		} else if (this.direction === "up") {
			this.y -= this.height;
		}
	}
	
	addBody() {
		this.bodyFlag = true;
	}
	
	render(context) {
		context.fillStyle = "black";
		context.fillRect(this.x, this.y, this.width, this.height);
		context.fillStyle = "gray";
		for (var i = 0; i < this.body.length; i++) {
			context.fillRect(this.body[i][0], this.body[i][1], this.width, this.height);
		}
	}
}