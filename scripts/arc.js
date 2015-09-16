var Arc = function(line, line2){
    this.canvas  = line.canvas;

    this.line = line;
    this.line2 = line2;

    this.radius = 5;
    this.direction = 1; //1 = out, 0 = in

    this.Draw();

    this.canvas.drawings.push(this);
};

/*
 * Update all the variables that change often
 */
Arc.prototype.Update = function(){
	this.x = this.line.x;
	this.y = this.line.y;
	
	this.beginAngle = MyMath.DegreeToRadian(this.line.angle);
	this.endAngle = MyMath.DegreeToRadian(this.line2.angle);
}

/*
 * Change the radius of the arc
 */
Arc.prototype.Rotate = function(){
	if(this.radius >= this.line.length / 2 || this.radius <= 0) this.direction = !this.direction;
    this.radius += (this.direction ? 1 : -1);
	this.Draw();
}

/*
 * Draw the current line object to the canvas
 */
Arc.prototype.Draw = function(){
	this.Update();
    this.canvas.context.beginPath();
    this.canvas.context.arc(this.x, this.y, this.radius, this.beginAngle, this.endAngle, false);
    this.canvas.context.stroke();
};