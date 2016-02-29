var planets;
console.log("edition 1")


function setup() {
  createCanvas(1920, 1080);
  planets = [];
  imgitp = loadImage("ITP-Logo.png");
  blogimage = loadImage("ITP-Logo.png")
}

function draw() {
  background(0);
  for (i = 0; i < planets.length; i++) {
    planets[i].run();
  }
  if (planets.length==0) {
    fill(255);
    textAlign(CENTER);
    textSize(35);
    text("Touch and give life to an ITProject!", width/2, height/2);
  }
  image(imgitp, width/2 -70, height - 120, imgitp.width/4, imgitp.height/4);

}


function mousePressed() {
  //See if there are any active planets
  if ( planets.length > 0 ) {
    var count = 0;  
    for (i = 0; i < planets.length; i++) {
      //Run checker fnct on every planet and save the planets[id] in 'mouseoverplanetnumber'
      var selected = planets[i].isplanet();
      if ( selected ) {
        count++;
      }
    }
    console.log(count);
    if (count == 0) {
      //Create a new planet instance either up or down.
      // , pulledimg(), pulledtxt()
      planets.push( new Planet(createVector(mouseX, mouseY)));
    }
  } else {
    // , pulledimg(), pulledtxt()
    planets.push( new Planet(createVector(mouseX, mouseY)));
  }
}

//this is the pulling and image from an RSS feed
var pulledimg = function() { 
  //Go through images from gss and load it in 'blogiamge'
  return blogimage;
}

var pulledtxt = function() { 
  return blogtxt;
}


// , pulledimg, pulledtxt
var Planet = function(pos) {
  //Radius lengt from Sun to planet
  this.r = dist(mouseX + 20, mouseY + 50, width/2, height);

  //The lifespan of each planet
  this.lifespan = 255.0;

  //The position is saved.
  this.position = pos;
  this.selected = false;
  this.planetDiameter = 100;
  this.clickcount = 0; 
  this.thetavel = 0.005; 
  this.thetalifespan = 0.1;
  this.previousdiameter = this.planetDiameter;
  this.expanding = false; 

  //The spawning planet equals the mouse position.
  if (random(0,1) > 0.5) {
    this.theta = atan2(mouseX - width/2, mouseY - height);
    this.direction = true;
  } else {
    this.theta = atan2(mouseY - height, mouseX - width/2);
    this.direction = false;
  }
};

Planet.prototype.run = function() {
  this.update();
  this.display();
  this.killplanet();
  this.animate();
};

// Method to update position
Planet.prototype.update = function(){
  if (this.direction) {
    this.position = createVector(this.r * sin(this.theta) + width/2, this.r * cos(this.theta) + height -60);
  } else {
    this.position = createVector(this.r * cos(this.theta) + width/2, this.r * sin(this.theta) + height -60);
  }

  this.theta += this.thetavel;
  this.lifespan -= this.thetalifespan;
  this.angle += 0.02;
};

Planet.prototype.animate = function() {

  if(this.expanding) {
    this.planetDiameter += 1;
  } else { 
    this.previousdiameter = this.planetDiameter - 5; 
    this.expanding = false;
    console.log(this.expanding);
    console.log(this.planetDiameter);
    console.log(this.previousdiameter);

  }
}

// Method to display
Planet.prototype.display = function () {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  // ellipse(this.position.x, this.position.y, this.planetDiameter, this.planetDiameter);
  image(blogimage, this.position.x, this.position.y, this.planetDiameter, this.planetDiameter);
  fill(255);
  textSize(32);
  text(this.clickcount, this.position.x, this.position.y);
};

//This will check if a planet is dead
Planet.prototype.isDead = function () {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

//This will delete a planet object when its lifespan has run out. 
Planet.prototype.killplanet = function() {
for (var i = planets.length - 1; i >= 0; i--) {
    if (planets[i].isDead()) {
      planets.splice(i, 1);
    }
  }
};


  // var distance = dist(mouseX, mouseY, this.position.x, this.position.y);
  // if(distance < planets[i].planetDiameter/2) {
  //   if(this.planetDiameter < this.previousdiameter + 20) {
  //     this.planetDiameter ++;
  //   } else {
  //     this.previousdiameter = this.diameter; 
  //   }
  // }


Planet.prototype.isplanet = function() {
  this.selected = false;
   var distance = dist(mouseX, mouseY, this.position.x, this.position.y);
  // console.log(distance);


  //Click event on planet.
  if(distance < planets[i].planetDiameter/2) {
   
   // console.log('planet ' + i + ' clicked');
   //  if(this.planetDiameter <= this.previousdiameter + 50) {
   //    this.expanding = true; 
   //  } else {
   //    // this.previousdiameter = this.planetDiameter;
   //    this.expanding = false;
   //    console.log(this.planetDiameter);
   //  }
   //  console.log(this.planetDiameter);
   //  console.log(this.previousdiameter);
    // console.log(tshis.planetDiameter);

    this.planetDiameter += 50;  

    this.r = this.r += 60;
   
    this.thetavel -= this.thetavel/5;

    this.clickcount++;
    

    // console.log(this.r);
    return true;
  } else {
    return false;
  }
}

Planet.prototype.dosomething = function() {
 //console.log("you touched an up planet");
}






// TODO's
// Make objects clickable in the mousepressed event. Meassure distance between object and clicked place.

// Adjust the speed so closer planets are moving faster and farther planets are moving slower.

// Slow down particular object when clicked and make it larger and push it a little further away from center.

// Pull picture and caption from RSS feed. 




