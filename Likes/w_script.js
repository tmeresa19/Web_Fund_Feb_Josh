console.log("script linked to html successfully and loading!");

// Questions asked:
// 1. Clicking donate will remove the button
// 2. Clicking the "Give Name a Petting" button will increase the number of pettings by one
// 3. Changing the <select> will alert what type of animal we are looking for eg. alert "You are looking for a: Dog"

// Solutions for the above questions:
// 1. Remove the "Donate" button when it is clicked

function removeDonateBtn(element) {
    document.querySelector("#btn-id").style.visibility = "hidden";
}

// 2. Clicking the "Give Name a Petting" button will increase the number of pettings by one

// function addLike(element) {
//     document.querySelector("#spanid").innerText++;
// }
var count = 3;

function addLike(id) {
    count++;
    var span = document.querySelector(`${id}`);
    span.innerText = count;
}
// var count2 = 5;
// var span2 = document.querySelector("#spanid-2");
// function addLike2(element) {
//     count2++;
//     span2.innerText = count2 ;
// }
// var count3 = 8;
// var span3 = document.querySelector("#spanid-3");
// function addLike3(element) {
//    span3.innerText++;
// }
