var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//the c variable stands for context, from here on with
var c = canvas.getContext("2d");

// the fillRect function takes four arguments(x-axis(in pixels, from the top left of the screen by default), y-axis(in pixels, from the top left of the screen by default), width & height)
// c.fillStyle = "rgba(100,0,200,0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(10,30,180,0.5)";
// c.fillRect(200, 200, 100, 100);
// c.fillStyle = "rgba(100,200,20,0.5)";
// c.fillRect(300, 100, 100, 100);
// c.fillStyle = "rgba(255,50,2,0.5)";
// c.fillRect(400, 200, 100, 100);
// c.fillStyle = "rgba(210,80,0,0.5)";
// c.fillRect(500, 100, 100, 100);
// c.fillStyle = "rgba(180,120,18,0.5)";
// c.fillRect(600, 200, 100, 100);
// c.fillStyle = "rgba(140,180,50,0.5)";
// c.fillRect(700, 100, 100, 100);
// c.fillStyle = "rgba(100,250,100,0.5)";
// c.fillRect(800, 200, 100, 100);
// c.fillStyle = "rgba(100,0,200,0.5)";
// c.fillRect(900, 100, 100, 100);
// c.fillStyle = "rgba(10,30,180,0.5)";
// c.fillRect(1000, 200, 100, 100);
// c.fillStyle = "rgba(100,200,20,0.5)";
// c.fillRect(1100, 100, 100, 100);
// c.fillStyle = "rgba(255,50,2,0.5)";
// c.fillRect(1200, 200, 100, 100);

// /* canvas objects: 1.Rectangles
//                    2.Lines
//                    3.Arcs/Circles
//                    4.Bezier Curves
//                    5.Images
//                    6.Text
// */
// console.log(canvas);

//Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "#00def3";
// c.stroke();

// //Arcs/Circle
// c.beginPath();
// c.arc(600, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// for (var i = 0; i < 40; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "blue";
//   c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
    c.fill();
  };

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 3;
  var dy = (Math.random() - 0.5) * 3;
  var radius = 30;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
