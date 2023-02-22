
// console.log("JS linked...")
var nameSpan = document.querySelector("#spanid")
function onInputChange(element) {
    // console.log(element.value)
    nameSpan.innerText = element.value

}

// var foodoption=document.querySelector("#selectid")
function pickFood(element){
    console.log("The food is " + element.value)
    // foodoption.innerText=elelemt.value
    // console.log("you picked " + foodoption.value)
}
