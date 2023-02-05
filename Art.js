var canvas = document.getElementById('ArtDigital'),
ctx = canvas.getContext('2d');
var FPS=50;
var colores = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];

function Draw  () {

    
ctx.lineWidth = 1;

ctx.fillStyle = 'aqua' 

ctx.beginPath();
ctx.arc(120, 120, 70, 0, 2*Math.PI, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'black'

ctx.beginPath();
ctx.arc(200, 100, 60, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'fuchsia'

ctx.beginPath();
ctx.arc(20, 80, 100, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'gray'

ctx.beginPath();
ctx.arc(350, 200, 100, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'blue'

ctx.beginPath();
ctx.arc(480, 10, 50, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'green'

ctx.beginPath();
ctx.arc(800, 170, 90, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'maroon'

ctx.beginPath();
ctx.arc(590, 10, 40, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'navy'

ctx.beginPath();
ctx.arc(390, 80, 20, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'lime'

ctx.beginPath();
ctx.arc(290, 500, 60, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'purple'

ctx.beginPath();
ctx.arc(90, 400, 60, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'olive'

ctx.beginPath();
ctx.arc(0, 320, 88, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'orange'

ctx.beginPath();
ctx.arc(160, 320, 66, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'orange'

ctx.beginPath();
ctx.arc(160, 320, 66, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'silver'
ctx.beginPath();
ctx.arc(460, 320, 25, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'red'
ctx.beginPath();
ctx.arc(340, 320, 55, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'teal'
ctx.beginPath();
ctx.arc(680, 390, 110, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'yellow'
ctx.beginPath();
ctx.arc(500, 299, 80, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'white'
ctx.beginPath();
ctx.arc(600, 199, 69, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'silver'
ctx.beginPath();
ctx.arc(780, 9, 89, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'fuchsia'
ctx.beginPath();
ctx.arc(780, 499, 66, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'black'
ctx.beginPath();
ctx.arc(780, 299, 77, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'aqua'
ctx.beginPath();
ctx.arc(480, 499, 97, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'navy'
ctx.beginPath();
ctx.arc(10, 499, 33, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'white'
ctx.beginPath();
ctx.arc(130, 499, 44, 0, 2*Math.PI, true)
ctx.fill();
ctx.stroke();

}


Draw();