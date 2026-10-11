canvas.addEventListener("pointerdown", function(event) {
if(player1.Alive && player1.isGrounded || player1.immortal){
    player1.y-= 25
    }
});