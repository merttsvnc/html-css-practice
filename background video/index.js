const btn = document.querySelector('.btn')
const video = document.querySelector('.background-video')
const font_awasome_btn = document.querySelector('.fa')
const preloader = document.querySelector('.preloader')

btn.addEventListener('click', () => {
    if (btn.classList.contains('pause')) {
        btn.classList.remove('pause')
        video.play()
        font_awasome_btn.classList.add('fa-pause')
        font_awasome_btn.classList.remove('fa-play')
    } else {
        btn.classList.add('pause')
        video.pause()
        font_awasome_btn.classList.remove('fa-pause')
        font_awasome_btn.classList.add('fa-play')
    }
})

window.addEventListener('load', () => {
    preloader.style.zIndex = '-2'
})