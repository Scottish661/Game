let canvas = document.getElementById("canvas");
let pen = canvas.getContext("2d");
if(canvas){
document.body.style.backgroundColor = "black";
document.canvas.style.backgroundColor = "white";
}
let y = 50
let CW = 1024;
let CH = 512;
canvas.width = CW;
canvas.height = CH;
pen.fillStyle = "red";
pen.fillRect(0,0,50,50);
functuon gravity(){
pen.fillStyle = "red";
pen.fillRect(0,y,50,50);
y++
requestAnimationFrame(gravity)

}

