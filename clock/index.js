const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

function get_current_hour_and_update(date) {
    const hour = date.getHours();
    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
}

function get_current_minute_and_update(date) {
    const minute = date.getMinutes();
    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
}

function get_current_second_and_update(date) {
    const second = date.getSeconds();
    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

function startClock() {
    const current_date = new Date()
    get_current_hour_and_update(current_date)
    get_current_minute_and_update(current_date)
    get_current_second_and_update(current_date)
}

setInterval(startClock, 1000)
