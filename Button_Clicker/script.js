console.log("Checking if JS is linked and is working...");

// Solutions for the 3 questions asked:

// 1. Change the text to say "Logout" when clicking the "Login" button

function logOut() {
    document.querySelector("#loginbutton").innerText = 'LogOut'
}

// 2. Remove the "Add Definition" button when it is clicked 
function removeAddDefinition() {
    // element.remove()
    // document.querySelector("#adddefinition").remove()"
    document.querySelector("#adddefinition").style.visibility = "hidden";
}

// 3. Alert "Ninja was liked" when clicking a like button
    // done inline
    