const bg_img_el = document.querySelector('.bg-image')

window.addEventListener('scroll', () => {
    updateImage()
})

function updateImage() {
    bg_img_el.style.opacity = 1 - window.pageYOffset / 900
    bg_img_el.style.backgroundSize = 160 - window.pageYOffset / 12 + '%'
}