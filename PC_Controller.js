canvas.addEventListener("keydown", (event) => {
if(player1.Alive && player1.isGrounded || player1.immortal){
    switch(event.key){
        case 'd';
        player1.x++
        break
        case 'a';
        player1.x--
        break
        case 'd';
        player1.y -25
        break
        }
        
    }
});