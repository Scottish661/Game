const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const jumpButton = document.getElementById("jumpButton");
const key= {
    d: { pressed: false },
    a: { pressed: false }
};
const gravity = 0.5
const CS = 360;
let h = document.getElementById("h");
let canvas = document.getElementById("canvas");
if(canvas){
    document.body.style.margin="0px";
    canvas.style.border = "1px solid blue";
    document.body.style.backgroundColor = "black";
    }
let pen = canvas.getContext("2d");
canvas.width = CS;
canvas.height = CS;
