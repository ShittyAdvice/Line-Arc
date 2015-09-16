var Arc = function(canvas, line, line2){
    this.canvas  = canvas;

    this.line = line;
    this.line2 = line2;

    this.radius = 5;
    this.direction = 1; //1 = out, 0 = in

    this.canvas.arcs.push(this);
    this.Draw();

};

Arc.prototype.Draw = function(){
    this.canvas.context.beginPath();
    this.canvas.context.arc(this.line.x, this.line.y, this.radius, MyMath.DegreeToRadian(this.line.angle), MyMath.DegreeToRadian(this.line2.angle), false);
    this.canvas.context.stroke();
};

Arc.prototype.ChangeRadius = function(){
    if(this.radius >= this.line.length / 2 || this.radius <= 0) this.direction = !this.direction;
    this.radius += (this.direction ? 1 : -1);
};