var Canvas = function(id, parent, width, height){
	this.drawings = [];
    this.id = id;
    this.parent = parent;
    this.width = width;
    this.height = height;
	this.animating = false;
    this.CreateHtml();
    this.context = document.getElementById(this.id).getContext('2d');

};

/*
 * Replace the parent container content with a new canvas
 */
Canvas.prototype.CreateHtml = function(){
    this.parent.innerHTML += "<canvas id='" + this.id + "' width='" + this.width + "' height='" + this.height + "'></canvas>";
};

/*
 * Clear the canvas from all drawings
 */
Canvas.prototype.Clear = function(){
    this.context.clearRect(0, 0, this.width, this.height);
};

/*
 * Update the canvas and draw the drawings
 */
Canvas.prototype.Update = function(){
    if(!this.animating)
        clearInterval(this.animInterval);
    this.Clear();
    for(var i =0; i < this.drawings.length; i++){
        this.drawings[i].Rotate();
    }
};

/*
 * Recursively update the canvas until stopped
 */
Canvas.prototype.StartAnimation = function(){
	this.animating = true;
	var t = this;
	this.animInterval = setInterval(function(){
        t.Update();
	},10);
};

/*
 * Stop the recursive updating of the canvas
 */
Canvas.prototype.StopAnimation = function(){
	this.animating = false;
};
