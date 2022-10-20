const counter_element = document.querySelector('.counter')
const bar_element = document.querySelector('.loading-bar-front')

let counter = 0

update_counter()

function update_counter() {
    counter_element.innerText = counter + "%"
    bar_element.style.width = counter + '%'
    counter++
    if (counter < 101) {
        setTimeout(update_counter, 50)
    }
}