const title = "Realidade Virtual e Realidade Aumentada"
const titleElement = document.getElementById("title")
let index = 0
console.log(title.length)

function typeWriter() {
    if(index < title.length) {
        titleElement.textContent += title.charAt(index)
        index++
        setTimeout(typeWriter, 200)
    }
}

window.onload = typeWriter