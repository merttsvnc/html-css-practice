const container_element = document.querySelector('.container')
const careers = ['YouTuber', 'Web Developer', 'Freelancer', 'Instructor']
let career_index = 0
let character_index = 0

updateText()

function updateText() {
    character_index++
    container_element.innerHTML = 
    `
    <h1>
        I am ${careers[career_index].slice(0, 1) === 'I' ? 'an' : 'a'} ${careers[career_index].slice(0, character_index)}
    </h1>
    `;

    if (character_index === careers[career_index].length) {
        career_index++
        career_index = 0
    }

    if (career_index === careers.length) {
        career_index = 0
    }
    setTimeout(updateText, 400)
}