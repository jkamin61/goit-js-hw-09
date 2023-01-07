import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const btn = document.querySelector("button");
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    let timer;
    let timeDifference = flatpickrInput.selectedDates[0] - new Date();
    let outputTime = convertMs(timeDifference);
    let days = document.querySelector("[data-days]");
    let hours = document.querySelector("[data-hours]");
    let minutes = document.querySelector("[data-minutes]");
    let seconds = document.querySelector("[data-seconds]");
    if (selectedDates[0] < new Date()) {
      alert("Pick a future date")
      btn.disabled = true
      outputTime = 0;
      days.innerHTML = "0";
      hours.innerHTML = "00";
      minutes.innerHTML = "00";
      seconds.innerHTML = "00";
    }
    else {

      btn.disabled = false
      btn.addEventListener("click", () => {

          days.innerHTML = outputTime.days;
          hours.innerHTML = outputTime.hours;
          minutes.innerHTML = outputTime.minutes;
          seconds.innerHTML = outputTime.seconds;
          timer = setInterval(() => {
            timeDifference -= 1000;
            outputTime = convertMs(timeDifference);
            days.innerHTML = outputTime.days;
            hours.innerHTML = outputTime.hours;
            minutes.innerHTML = outputTime.minutes;
            seconds.innerHTML = outputTime.seconds;
          }, 1000)

      })
    }

  },
};
const flatpickrInput = flatpickr(input, options);

function convertMs (ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return {days, hours, minutes, seconds};
}
