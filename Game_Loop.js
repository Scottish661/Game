function GameLoop(){
pen.clearRect(0,0,CS,CS)
PlatForm1.draw()
player1.draw()
Gravity(player1)
requestAnimationFrame(GameLoop)
}
GameLoop();