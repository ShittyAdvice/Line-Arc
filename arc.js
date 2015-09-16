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
    this.canvas.context.arc(this.line.x, this.line.y, this.radius, DegreeToRadian(this.line.angle), DegreeToRadian(this.line2.angle), false);
    this.canvas.context.stroke();
};

Arc.prototype.ChangeRadius = function(){
    if(this.radius >= this.line.length / 2 || this.radius <= 0) this.direction = !this.direction;
    this.radius += (this.direction ? 1 : -1);
};

/*
 * Calculate width
 *
 * Formula = 2d*tan(a/2);
 * d = DISTANCE from start
 * a = ANGLE
 */

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

function RadianToDegree(radian){
    return radian * (180 / Math.PI);
}