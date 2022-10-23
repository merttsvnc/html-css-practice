const star_el = document.querySelectorAll('.fa-star');
const emoji_el = document.querySelectorAll('.far');
const colors_array = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];

updateRating(0)

star_el.forEach((star_el, index) => {
    star_el.addEventListener('click', () => {
        updateRating(index)
    })
})

function updateRating(index) {
    star_el.forEach((star_el, idx) => {
        if(idx < index + 1) {
            star_el.classList.add(('active'))
        } else {
            star_el.classList.remove('active')
        }
    })

    emoji_el.forEach((emoji_el) => {
        emoji_el.style.transform = `translateX(-${index * 50}px)`;
        emoji_el.style.color = colors_array[index]
    })
}