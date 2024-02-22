// select elements
const inputslider = document.getElementById("slider")
const sliderValue = document.querySelector(".sliderValue")
const toggleButton = document.querySelector(".toggle-button")

// change the value of the slider when the range is moved
slider.oninput = () => {
    let value = inputslider.value
    sliderValue.textContent = "$" + value + ".00"   
}

// change the value of the slider on mobile devices
slider.addEventListener("touchmove", () => {
    let value = slider.value
    sliderValue.textContent = "$" + value + ".00"
})

// switch the toggle button
toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active")
})