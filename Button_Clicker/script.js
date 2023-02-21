console.log("Checking if JS is linked and working...");

// Solutions for the 3 questions asked:

// 1. Change the text to say "Logout" when clicking the "Login" button

function logOut(element) {
    // document.querySelector("#loginbutton").innerText = 'LogOut'
    if (element.innerText =='LogOut'){
        element.innerText ='Login'
    }
    else {
        element.innerText = 'LogOut'
    }

}

// 2. Remove the "Add Definition" button when it is clicked 
function removeAddDefinition(element) {
    element.remove()
    // document.querySelector("#adddefinition").remove()"
    // document.querySelector("#adddefinition").style.visibility = "hidden";
}

// 3. Alert "Ninja was liked" when clicking a like button
    function alertMessage(){
        alert("Ninja was liked!")
    }
    