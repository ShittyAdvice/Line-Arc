## Preview
<div id="canvasWrapper"></div>

## Canvas Usage

    var parentDom = document.getElementById("parentID");
    var height = 200;
    var width = 200;
    var canvas = new Canvas("canvasID", parentDom, height, width);

    canvas.StartAnimation(); //Starts rotating the drawings

## Line Usage

    var xPos = 100;
    var yPos = 100;
    var length = 100;
    var angle = 0;//In degrees
    var line = new Line(canvas, xPos, yPos, length, angle);
    line.Draw();
    line.Rotate(); //Automaticly redraws

### Line Copying & Attaching
Copying a line will create a new line with the same attributes.
Attaching a line to another line will make sure they're positions always stay the same.

    var firstLine = new Line(canvas, 50, 50, 100, 0);
    var secondLine = Line.Copy(firstLine);
    secondLine.angle += 30;
    secondLine.Attach(firstLine);

## Arc usage
An arc will be created between the first and second line.

    var firstLine = new Line(canvas, xPos, yPos, length, angle);
    var secondLine = Line.Copy(firstLine);
    secondLine.angle += 50;

    var arc = new Arc(line1, line2);
    arc.Draw();
