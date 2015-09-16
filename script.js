var parent = document.getElementById("canvasWrapper");
var canvas = new Canvas("newCanvas", parent, 100, 100);

var line = new Line(canvas, 50, 50, 100, 0);
var line2 = Line.Copy(line);
line2.angle += 30;
line2.Attach(line);

var arc = new Arc(line, line2);
canvas.StartAnimation();
