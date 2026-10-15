let canvas = document.getElementById("canvas");
let CW = 1024;
let CH = 512;
canvas.width = CW;
canvas.height = CH;
const gravity = 0.5
let pen = canvas.getContext("2d");
if(canvas){
document.body.style.backgroundColor = "black";
canvas.style.backgroundColor = "white";
}
class Player{
    constructor(p){
        this.p = p
        this.v = {
            x: 0,
            y: 1
            }
            this.height = 100 
            }
        draw(){ 
pen.fillStyle = 'red'
pen.fillRect(this.p.x,this.p.y,100,this.height)
    }
     update(){
        this.draw()
        this.p.y += this.v.y
        if(this.p.y + this.height < CH){
        this.v.y += gravity
        }
        else {
            this.v.y = 0
            this.p.y = CH - this.height;
        }
        }
const player1 = new Player({
x: 0,
y: 0,
})
const player2 = new Player({
x: 300,
y: 100,
})
function animate(){
window.requestAnimationFrame(animate)
pen.fillStyle = "white";
pen.fillRect(0,0,CW,CH);
player1.update()
player2.update()

}
animate()