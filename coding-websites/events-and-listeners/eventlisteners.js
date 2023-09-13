const button = document.querySelector(".event-button")
button.addEventListener("click", function () {
    alert("Hey there!")
})

const input = document.querySelector(".input-to-copy")
const paragraph = document.querySelector(".p-to-copy-to")

input.addEventListener("keyup", function () {
    paragraph.innerHTML = input.value
})

const input2 = document.querySelector(".color-input")
const paragraph2 = document.querySelector(".color-box")

input2.addEventListener("change", function () {
    paragraph2.style.backgroundColor = input2.value
})

document
    .querySelector(".button-container")
    .addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() === "button"){
            alert(`You clicked on button ${event.target.innerText}`)
        }
        
    })