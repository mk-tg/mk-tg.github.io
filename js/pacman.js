var pacManContainer = document.getElementById('pacman-container');
var pos = pacManContainer.offsetLeft;

const pacArray = [
    ['./images/PacMan1.png', './images/PacMan2.png'],
    ['./images/PacMan3.png', './images/PacMan4.png']
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkBoxBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 10;
        img.style.left = pos + "px";
    } else {
        pos += 10;
        img.style.left = pos + 'px';
    }

    setTimeout(Run, 75);
}

function checkBoxBounds(direction, imgWidth) {
    let containerWidth = pacManContainer.offsetWidth + pacManContainer.offsetLeft;
    console.log(containerWidth);
    if (direction == 0 && pos + imgWidth > containerWidth) direction = 1;
    if (direction == 1 && pos < pacManContainer.offsetLeft) direction = 0;

    return direction;
}