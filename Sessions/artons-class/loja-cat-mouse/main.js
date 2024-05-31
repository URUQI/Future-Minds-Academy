// const bgr = document.createElement("img");
// bgr.src = 'images/background.png';
// const mainWrapper = document.querySelector('.mainWrapper')
// mainWrapper.appendChild(bgr);


const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const bgGame = new Image();
bgGame.src = "images/background.png";

let tickTimer = 15;


let bgReady = false;
bgGame.onload = function () {
        bgReady = true;
}

let catObj = {};
catObj.x = 0;
catObj.y = 40;
catObj.speed = 5;

let catReady = false;
const catImg = new Image();
catImg.src = "images/cat.png";
catImg.onload = function () {
        catReady = true;
}

let mouseObj = {};
mouseObj.width = 52;
mouseObj.height = 54;
mouseObj.x = Math.floor(Math.random() * 460);
mouseObj.y = Math.floor(Math.random() * 426);

let mouseReady = false;
const mouseImg = new Image();
mouseImg.src = "images/mouse.png";
mouseImg.onload = function () {
        mouseReady = true;
}

function render() {
        if (bgReady) { ctx.drawImage(bgGame, 0, 0); }
        if (catReady) { ctx.drawImage(catImg, catObj.x, catObj.y); }
        if (mouseReady) { ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y); }
        if (catObj.x > 500) { catObj.x = -50; }
        if (catObj.x <= -51) { catObj.x = 499; }
        if (catObj.y > 460) { catObj.y = -50; }
        if (catObj.y < 40) { catObj.y = 41; }

        ctx.font = "20px Georgia";
        ctx.fillStyle = "White";
        ctx.fillText("points: 0", 10, 25);

        ctx.font = "20px Georgia";
        ctx.fillStyle = "White";
        ctx.fillText("Timer: "+tickTimer, 400, 25);

}
 




addEventListener("keydown", function (e) {
        console.log(e.key);

        if (e.key == 'ArrowRight') {
                catObj.x += catObj.speed;
        }
        if (e.key == 'ArrowLeft') {
                catObj.x -= catObj.speed;
        }
        if (e.key == 'ArrowDown') {
                catObj.y += catObj.speed;
        }
        if (e.key == 'ArrowUp') {
                catObj.y -= catObj.speed;
        }

});
function timer(){
        tickTimer --;
}

setInterval(render, 1); //thirre render  cdo 1 second 
setInterval(timer, 1000);