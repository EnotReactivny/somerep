let loopInterval;   //Глобальный loop указатель
let loopCount = 1;  //Счетчик смены картинок
let timer = 5000;//Таймер переключения картинок

let now;

function loopPics(images) {
    changeBigPicture(loopCount, images[loopCount].src);
    loopCount++;
    if (loopCount == images.length) {
        loopCount = 0;
    }
}

function init() {
    let images = document.querySelectorAll(".slider_pics img");
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            changeBigPicture(i, images[i].src);
        });
    }
    loopInterval = setInterval(loopPics, timer, images);
}

function changeBigPicture(index, src) {
    let appBigPic = document.getElementById("big_picture");
    appBigPic.src = src;
    loopCount = index;
}

let left = document.querySelector(".left")
left.onclick = function () {
    
}

let right = document.querySelector(".right")


window.onload = init;