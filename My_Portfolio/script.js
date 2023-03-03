
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

 function scrolling(y) {
    window.scrollTo({
        left: 0, top: y,
        behavior: 'smooth'
    });
}

function show(text) {
    let div = document.querySelector("#" + text);
    div.style.display = 'flex';
} function hide(text) {
    let div = document.querySelector("#" + text);
    div.style.display = 'none';
}

