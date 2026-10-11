function jump() {
    if (player1.Alive && player1.isGrounded) {
        player1.vy = -11;
        player1.isGrounded = false;
    }
}
window.addEventListener("keydown", (event) => {
    switch (event.key.toLowerCase()) {
        case "a":
        case "arrowleft":
            keys.a.pressed = true;
            event.preventDefault();
            break;
        case "d":
        case "arrowright":
            keys.d.pressed = true;
            event.preventDefault();
            break;
        case "w":
        case "arrowup":
        case " ":
            jump();
            event.preventDefault();
            break;
    }
});
window.addEventListener("keyup", (event) => {
    switch (event.key.toLowerCase()) {
        case "a":
        case "arrowleft":
            keys.a.pressed = false;
            break;
        case "d":
        case "arrowright":
            keys.d.pressed = false;
            break;
    }
});
window.addEventListener("blur", () => {
    keys.a.pressed = false;
    keys.d.pressed = false;
});