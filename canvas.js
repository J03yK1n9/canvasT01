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

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;
var radius = 30;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  x += dx;
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  y += dy;
}

animate();
