canvas.addEventListener("keydown", (event) => {
if(player1.Alive && player1.isGrounded || player1.immortal){
    switch(event.key){
        case 'd';
        key.d.pressed = true
        break
        case 'a';
        key.a.pressed = true
        break
        case 'w';
        player1.vy =- 25
        break
        }
        
    }
    canvas.addEventListener("keyup", (event) => {
if(player1.Alive && player1.isGrounded || player1.immortal){
    switch(event.key){
        switch (event.key) {
    case "d":
        keys.d.pressed = true;
        break;
}
        case 'a':
        key.a.pressed = true;
        break;
        }
        
    }
});