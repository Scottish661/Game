let canvas = document.getElementById("canvas");
let CW = 1024;
let CH = 512;
canvas.width = CW;
canvas.height = CH;
let pen = canvas.getContext("2d");
if(canvas){
document.body.style.backgroundColor = "black";
canvas.style.backgroundColor = "white";
}
class Player{
    constructor(x,y,width,height, vy,color){
        this.p = {
            x: 0,
            y: 0,
            }
        }
        draw(){ 
pen.fillStyle = 'red'
pen.fillRect(this.p.x,this.p.y,100,100)
    }
    update(){
        this.draw()
        this.p.y++
        }
        }
const player1 = new Player()
const player2 = new Player()
function animate(){
window.requestAnimationFrame(animate)
pen.fillStyle = "white";
pen.fillRect(0,0,CW,CH);
player1.update()
player2.update()

}
animate()