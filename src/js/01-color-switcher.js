import getRandomHexColor from "./randomhexcolor";

const dataStartBtn = document.querySelector('[data-start]');
const dataStopBtn = document.querySelector('[data-stop]');
const bodyEl = document.body;

dataStartBtn.addEventListener('click', onStartBtnClick);
dataStopBtn.addEventListener('click', onStopBtnClick);

let timerId = null;
dataStopBtn.toggleAttribute('disabled');

function onStartBtnClick() {
    timerId = setInterval(getBackgroundColor, 1000);

    dataStartBtn.toggleAttribute('disabled');
    dataStopBtn.removeAttribute('disabled');
}

function onStopBtnClick() {
    timerId = clearInterval(timerId);

    dataStartBtn.removeAttribute('disabled');
    dataStopBtn.toggleAttribute('disabled');
}

function getBackgroundColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
}