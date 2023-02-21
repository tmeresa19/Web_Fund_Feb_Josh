console.log("checking if js works...");

// Solutions for the following 2 questions

// 1. Each time we click the "Like" button, it should increase the number of likes by "1"

function addLike(element){
    document.querySelector('#spanid').innerText=element.value++
}

// 2. Clicking each like button will increase the number of likes for each post by "1"
