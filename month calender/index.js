const month_el = document.querySelector(".date h1");
const full_date_el = document.querySelector(".date p");
const days_el = document.querySelector(".days");

const current_month = new Date().getMonth();
const current_month_last_day = new Date( new Date().getFullYear(), current_month + 1, 0 ).getDate();
const current_month_first_day = new Date(new Date().getFullYear(), current_month, 1).getDay() - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

month_el.innerText = months[current_month];
full_date_el.innerText = new Date().toDateString();

let days = "";

for (let i = current_month_first_day; i > 0; i--) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= current_month_last_day; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

days_el.innerHTML = days
