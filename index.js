let canvas = document.getElementById("canvas");
let pen = canvas.getcontent("2d");
if(canvas){
document.body.style.backgroundColor = "black";
}
let CW = 1024;
let CH = 512;
canvas.width = CW;
canvas.height = CH;
pen.fillStyle = "red";
pen.fillRect(0,0,CW,CH);