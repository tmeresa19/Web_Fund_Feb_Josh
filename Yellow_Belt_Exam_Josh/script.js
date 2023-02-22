// console.log("JS checking...")

// Solutions for the 3 questions asked

// 1. Clicking "I accept" will make the alert box disappear

function hide() {
    var cookieMessage = document.querySelector(".cookie-section")
    cookieMessage.remove()  ;
}

// 2. Clicking on the cart icon will alert that your cart is empty

function alertMessage() {
    alert("Your cart is empty")
}
// 3. Hovering over the image will change its source

function changeImage1() {
    var hoverImg = document.querySelector("#imgid")
    hoverImg.src = "./images/assets/succulents-2.jpg"
}
function changeImage2() {
    var hoverImg = document.querySelector("#imgid")
    hoverImg.src = "./images/assets/succulents-1.jpg"
}



