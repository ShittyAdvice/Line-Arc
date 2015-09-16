var Line = function(canvas, x, y, length, angle){
    this.canvas  = canvas;
    this.x = x;
    this.y = y;
    this.length = length;

    this.canvas.lines.push(this);

    this.beginX = this.x;
    this.beginY = this.y - this.length / 2;
    this.endX = this.x;
    this.endY = this.y + this.length / 2;

    this.angle = 90 + angle;
    this.angleStep = 1;

    this.Rotate(); //Initial rotation
};

Line.prototype.Rotate = function(){
    this.angle += this.angleStep;
    if(this.angle >= 360) this.angle -= 360;
    this.beginX = MyMath.CircleRingX(this.x, this.length / 2, this.angle);
    this.beginY = MyMath.CircleRingY(this.y, this.length / 2, this.angle);
    this.endX = MyMath.CircleRingX(this.x, this.length / 2, 180 + this.angle);
    this.endY = MyMath.CircleRingY(this.y, this.length / 2, 180 + this.angle);
    this.Draw();
};

Line.prototype.Draw = function(){
	this.canvas.context.beginPath();
    this.canvas.context.moveTo(this.beginX, this.beginY);
    this.canvas.context.lineTo(this.endX, this.endY);
    this.canvas.context.stroke();
};