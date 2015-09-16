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
    this.beginX = CircleEdgePosX(this.x, this.length / 2, this.angle);
    this.beginY = CircleEdgePosY(this.y, this.length / 2, this.angle);
    this.endX = CircleEdgePosX(this.x, this.length / 2, 180 + this.angle);
    this.endY = CircleEdgePosY(this.y, this.length / 2, 180 + this.angle);
    this.Draw();
};

Line.prototype.Draw = function(){
	this.canvas.context.beginPath();
    this.canvas.context.moveTo(this.beginX, this.beginY);
    this.canvas.context.lineTo(this.endX, this.endY);
    this.canvas.context.stroke();
};

/*
 * x + r * Math.cos(h);
 * x = X Positie middelpunt
 * y = Y Positie middelpunt
 * s = Radius
 * h = Hoek in Radians
 */
function CircleEdgePosX(x,r,a){
    return x + r * Math.cos(DegreeToRadian(a));
}

function CircleEdgePosY(y,r,a){
    return y + r * Math.sin(DegreeToRadian(a));
}

function DegreeToRadian(degrees){
    return degrees * (Math.PI / 180);
}