/* === JavaScript DOM animation === */


// JavScript animation
function move() {

    const animate = document.querySelector('.animate');

    let position = 0;

    const clearReference = setInterval(frame, 5);

    function frame() {
        if (position < 600) {
            position++;
            animate.style.left = position + 'px';
            animate.style.top = position + 'px';
        }
        else {
            clearInterval(clearReference);
        }
    }

}


// call move function
move();