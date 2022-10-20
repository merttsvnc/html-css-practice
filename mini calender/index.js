const month_element = document.querySelector('.month-name')
const day_name_element = document.querySelector('.day-name')
const day_number_element = document.querySelector('.day-number')
const year_element = document.querySelector('.year')

const date = new Date()
const month = date.getMonth()

month_element.innerText = date.toLocaleDateString('en', {
    month: 'long'
})

day_name_element.innerText = date.toLocaleString('en', {
    weekday: 'long'
})

day_number_element.innerText = date.getDate()
year_element.innerText = date.getFullYear()
