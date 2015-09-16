var Line = function(canvas, x, y, length, angle){
    this.canvas  = canvas;
    this.x = x;
    this.y = y;
    this.length = length;

    this.angle = angle;
    this.angleStep = 1;

    this.canvas.drawings.push(this);
};

/*
 * Update all the variables that change often
 */
Line.prototype.Update = function(){
	if(this.parent != null){
		this.x = this.parent.x;
		this.y = this.parent.y;
	}
    this.beginX = MyMath.CircleRingX(this.x, this.length / 2, this.angle);
    this.beginY = MyMath.CircleRingY(this.y, this.length / 2, this.angle);
    this.endX = MyMath.CircleRingX(this.x, this.length / 2, 180 + this.angle);
    this.endY = MyMath.CircleRingY(this.y, this.length / 2, 180 + this.angle);
};

/*
 * Change the rotation of the current line
 */
Line.prototype.Rotate = function(){
    this.angle += this.angleStep;
    if(this.angle >= 360) this.angle -= 360;
    this.Draw();
};

/*
 * Draw the current line object to the canvas
 */
Line.prototype.Draw = function(){
	this.Update();
	this.canvas.context.beginPath();
	this.canvas.context.moveTo(this.beginX, this.beginY);
	this.canvas.context.lineTo(this.endX, this.endY);
    this.canvas.context.stroke();
};

/*
 * Attach to an existing line's position.
 * 
 * @param line = Line object to be attached to.
 */
Line.prototype.Attach = function(line){
	this.parent = line;
};


/*
 * Remove line attachment
 */
Line.prototype.Detach = function(){
	this.parent = null;
};

/*
 * Copy an existing line into a new Line object
 *
 * @param copyLine = An Existing line to be copied
 */
Line.Copy = function(copyLine){
	return new Line(copyLine.canvas, copyLine.x, copyLine.y, copyLine.length, copyLine.angle);
};