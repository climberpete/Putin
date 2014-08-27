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
	library.add(new Image(square, "http://upload.wikimedia.org/wikipedia/commons/thumb/d/df/JohnStamosHWoFFeb2012.jpg/220px-JohnStamosHWoFFeb2012.jpg"));
	library.add(new Image(wide, "http://media2.s-nbcnews.com/j/streams/2013/August/130819/6C8670836-6c8284491-130716-john-stamos.blocks_desktop_small.jpg"));
	library.add(new Image(tall, "http://blogs.babble.com/famecrawler/files/2010/11/45423PCN_Smile05.jpg"));
	library.add(new Image(tall, "http://ia.media-imdb.com/images/M/MV5BMTQxOTI1MDcxNV5BMl5BanBnXkFtZTcwMjEwNDgxNw@@._V1_SY317_CR16,0,214,317_.jpg"));
	library.add(new Image(wide, "http://images6.fanpop.com/image/photos/32800000/John-Stamos-john-stamos-32853900-1024-768.png"));
	library.add(new Image(tall, "http://assets-s3.usmagazine.com/uploads/assets/articles/64632-john-stamos-to-reunite-with-full-house-band-jesse-and-the-rippers-on-jimmy-fallo/1374005728_109418050_john-stamos-467.jpg"));
	library.add(new Image(square, "http://upload.wikimedia.org/wikipedia/en/c/c9/JohnStamos-ER.jpg"));
	library.add(new Image(wide, "http://images6.fanpop.com/image/photos/32800000/John-Stamos-john-stamos-32853900-1024-768.png"));
	library.add(new Image(wide, "http://i.huffpost.com/gen/1373206/thumbs/n-JOHN-STAMOS-large570.jpg?6"));
	library.add(new Image(wide, "http://www.1015theeagle.com/stationimages/blogimages/John-Stamos-Ross-Schultz-5552134.jpg"));
	library.add(new Image(square, "http://www.sitcomsonline.com/photopost/data/2298/Shirtless-John-Stamos.jpg"));
	library.add(new Image(wide, "http://cdn01.cdn.justjared.com/wp-content/uploads/2008/02/stamos-shirtless/john-stamos-shirtless-03.jpg"));
	library.add(new Image(tall, "http://singleblink.files.wordpress.com/2012/06/stamos.jpg"));
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
