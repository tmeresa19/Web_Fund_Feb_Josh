// console.log("checking js work");

// questions asked

// 1. Each time we click the "Like" button, it should increase the number of likes by "1"
// 2. Clicking each like button will increase the number of likes for each post by "1"

// Solutions for the above 2 questions

// 1.

function addLike(element){
    document.querySelector('#spanid').innerText=element.value++
}

