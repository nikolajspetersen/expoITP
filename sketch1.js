
// var gv = {var gv.posx, gv.posy, gv.xinc, gv.yinc, initiate, }

var orbit, planet;

function setup() {
createCanvas(1920, 1080)
frameRate(30);

initiate();

}

var initiate = function() {
	var posx, posy, xinc, yinc;

	orbit = function(radiusw, radiush) {
		stroke(100);
		noFill(); 
		ellipse(960, 1000, radiusw * 100, radiush * 100);
	}

	planet = function(planetsize, orbit) {
		fill(200);
		var ax = 0;
		var ay = 0;  
		var orbitn = orbit * 100; 
		var xinc = TWO_PI/25.0;
		var yinc = TWO_PI/25.0;

		posx = sin(ax)*orbitn
		posy = cos(ay)*orbitn;
		
		ellipse(posx + 960, posy + 1000, planetsize * 10, planetsize * 10);
		ax = ax + xinc;
		ay = ay + yinc;
		console.log(posx);

		// if (ax > 25){
		// 	ax = 0;
		// }
		// if (ay > 25){
		// 	ay = 0;
		// }
	}
}

function draw() {
	background(0);
	
	orbit(5,5);
	orbit(6,6);
	orbit(7,7);

	planet(10, 5);

}