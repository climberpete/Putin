var wide = 1;
var square = 2;
var tall = 3;
var putinLevel = localStorage.getItem("putinLevel");

function imgFind() {
    var imgs = document.getElementsByTagName("img");
    var imgSrcs = [];
	if(putinLevel == null) putinLevel = 3;
    for (var i = 0; i < imgs.length; i++) {
		if(randomIntFromInterval(1,9)<=putinLevel){
			var img = imgs[i];
			var ratio = img.width/img.height;
			if(ratio > .5 && ratio < 2){
				img.src = library.get(ratio).src
			}
		}
    }

    return imgSrcs;
}

function Image(ratio, src){
	this.ratio=ratio
	this.src=src
}

function Library(){
	this.wide = [];
	this.square = [];
	this.tall = [];
}

Library.prototype.add = function(image){
	if(image.ratio == 1) this.wide.push(image);
	else if(image.ratio == 2) this.square.push(image);
	else this.tall.push(image);
};

Library.prototype.get = function(ratio){
	if(ratio > 1) {
		return getRandom(this.wide);
	}
	if(ratio == 1) {
		return getRandom(this.square);
	}
	if(ratio < 3) {
		return getRandom(this.tall);
	}
}

function buildLibrary(){
	var library = new Library();
	library.add(new Image(tall, "http://i.imgur.com/PPSqBwE.jpg"));
	library.add(new Image(tall, "http://i.imgur.com/elXT8LR.jpg"));
	library.add(new Image(square, "http://i.imgur.com/w53Cwpv.jpg"));
	library.add(new Image(square, "http://i.imgur.com/aWXVOgX.jpg"));
	library.add(new Image(wide, "http://i.imgur.com/2f0Ovbs.jpg"));
	library.add(new Image(wide, "http://i.imgur.com/XTnnNbO.jpg"));
	library.add(new Image(wide, "http://i.imgur.com/sbrdQNt.jpg"));
	return library;
}

function getRandom(array){
	return array[Math.floor(Math.random() * array.length)];
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var library = buildLibrary();

imgFind();

$(document).keydown(function(e){
	if(e.shiftKey && e.altKey && e.keyCode >= 49 && e.keyCode <= 57){
		var message = "";
		if((e.keyCode - 48) == 9) message = "\nIn Soviet Russia...";
		if((e.keyCode - 48) == 5) message = "\nPutin on the Ritz";
		if((e.keyCode - 48) == 1) message = "\nJust a little Putin";
		//console.log("alt shift " + (e.keyCode - 48) + " Pressed");
		alert("Putin Level " + (e.keyCode - 48) + message);
		localStorage.setItem("putinLevel", (e.keyCode - 48));
	}
})
