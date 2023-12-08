import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import convertMs from './dataConvert';

let getRef = selector => document.querySelector(selector);
const inputDatePicker = getRef('#datetime-picker');
const btnStart = getRef('[data-start]');
const daysRef = getRef('[data-days]');
const hoursRef = getRef('[data-hours]');
const minutesRef = getRef('[data-minutes]');
const secondsRef = getRef('[data-seconds]');

let timeDifference = 0;
let timerId = null;
let formatDate = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

btnStart.setAttribute('disabled', true);
flatpickr(inputDatePicker, options);

btnStart.addEventListener('click', onBtnStart);


window.addEventListener('keydown', event => {
  if (event.code === 'Escape' && timerId) {
    clearInterval(timerId);

    inputDatePicker.removeAttribute('disabled');
    btnStart.setAttribute('disabled', true);

    secondsRef.textContent = '00';
    minutesRef.textContent = '00';
    hoursRef.textContent = '00';
    daysRef.textContent = '00';
  }
});

function onBtnStart() {
  timerId = setInterval(startTimer, 1000);
}

function currentDifferenceDate(selectedDates) {
  const currentDate = Date.now();

  if (selectedDates < currentDate) {
    btnStart.setAttribute('disabled', true);
    return Notify.failure('Please choose a date in the future');
  }

  timeDifference = selectedDates.getTime() - currentDate;
  formatDate = convertMs(timeDifference);

  renderDate(formatDate);
  btnStart.removeAttribute('disabled');
}

function startTimer() {
  btnStart.setAttribute('disabled', true);
  inputDatePicker.setAttribute('disabled', true);

  timeDifference -= 1000;

  if (secondsRef.textContent <= 0 && minutesRef.textContent <= 0) {
    Notify.success('Time end');
    clearInterval(timerId);
  } else {
    formatDate = convertMs(timeDifference);
    renderDate(formatDate);
  }
}

function renderDate(formatDate) {
  secondsRef.textContent = formatDate.seconds;
  minutesRef.textContent = formatDate.minutes;
  hoursRef.textContent = formatDate.hours;
  daysRef.textContent = formatDate.days;
}


