function holdDirection(button, direction) {
    const press = (event) => {
        event.preventDefault();
        keys[direction].pressed = true;
        if (button.setPointerCapture && event.pointerId !== undefined) {
            try { button.setPointerCapture(event.pointerId); } catch (_) {}
        }
    };

    const release = (event) => {
        if (event) event.preventDefault();
        keys[direction].pressed = false;
    };
    button.addEventListener("pointerdown", press);
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("lostpointercapture", release);
    button.addEventListener("contextmenu", (event) => event.preventDefault());
}
holdDirection(leftButton, "a");
holdDirection(rightButton, "d");
jumpButton.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    jump();
});
jumpButton.addEventListener("contextmenu", (event) => event.preventDefault());
