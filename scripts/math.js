/*
 * x + r * Math.cos(h);
 * x = X Positie middelpunt
 * y = Y Positie middelpunt
 * s = Radius
 * h = Hoek in Radians
 */
var MyMath = {};

MyMath.CircleRingX = function(x,r,a){
    return x + r * Math.cos(this.DegreeToRadian(a));
};

MyMath.CircleRingY = function(y,r,a){
    return y + r * Math.sin(this.DegreeToRadian(a));
};

MyMath.DegreeToRadian = function(degrees){
    return degrees * (Math.PI / 180);
};

MyMath.RadianToDegree = function(radian){
    return radian * (180 / Math.PI);
};