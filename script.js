const inputslider = document.getElementById("slider")
const sliderValue = document.querySelector(".sliderValue")
const toggleButton = document.querySelector(".toggle-button")


slider.oninput = () => {
    let value = inputslider.value
    sliderValue.textContent = "$" + value + ".00"   
}

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active")
})