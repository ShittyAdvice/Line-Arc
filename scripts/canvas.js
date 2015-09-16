var Canvas = function(id, parent, width, height){
	this.lines = [];
	this.arcs = [];
    this.id = id;
    this.parent = parent;
    this.width = width;
    this.height = height;
	this.animating = false;
    this.CreateHtml();
    this.context = document.getElementById(this.id).getContext('2d');

};

Canvas.prototype.CreateHtml = function(){
    parent.innerHTML += "<canvas id='" + this.id + "' width='" + this.width + "' height='" + this.height + "'></canvas>";
};

Canvas.prototype.DrawArc = function(x,y,r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.fill();
};

Canvas.prototype.Clear = function(){
    this.context.clearRect(0, 0, this.width, this.height);
};

Canvas.prototype.Update = function(){
    if(!this.animating)
        clearInterval(this.animInterval);
    this.Clear();
    for(var i =0; i < this.lines.length; i++){
        this.lines[i].Rotate();
    }
    for(var i = 0; i < this.arcs.length; i++){
        this.arcs[i].ChangeRadius();
        this.arcs[i].Draw();
    }
};

Canvas.prototype.StartAnimation = function(){
	this.animating = true;
	var t = this;
	this.animInterval = setInterval(function(){
        t.Update();
	},10);
};

Canvas.prototype.StopAnimation = function(){
	this.animating = false;
};
