class Player {
constructor(x,y,size,ImageName,health){
    this.x = x;
    this.y = y;
    this.size = size;
    this.isGrounded = false;
    this.img = new Image();
    this.img.src = ImageName;
    this.health = health;
    this.Alive = true;
    this.immortal = false;
    this.vy = 1
    }
    draw(){
pen.drawImage(this.img,this.x,this.y,this.size,this.size)
}}
class PlatForm{
constructor(x,y,width,height,color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    }
    draw(){
pen.fillStyle = this.color;
pen.fillRect(this.x,this.y,this.width,this.height)}
}