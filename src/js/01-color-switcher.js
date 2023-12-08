import getRandomHexColor from "./randomhexcolor";

const dataStartBtn = document.querySelector('[data-start]');
const dataStopBtn = document.querySelector('[data-stop]');
const bodyEl = document.body;

dataStartBtn.addEventListener('click', onStartBtnClick);
dataStopBtn.addEventListener('click', onStopBtnClick);

let timerId = null;


function onStartBtnClick() {
    timerId = setInterval(getBackgroundColor, 1000);

    dataStartBtn.toggleAttribute('disabled');
}

function onStopBtnClick() {
    timerId = clearInterval(timerId);

    dataStartBtn.removeAttribute('disabled');
}

function getBackgroundColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
}