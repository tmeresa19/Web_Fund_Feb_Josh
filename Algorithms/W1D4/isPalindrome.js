
// function palindrome(str){
//     let polishedString=str.replace(/\W+|_/g, "");
//     let reversedString = polishedString.split("").reverse().join("")
//     console.log(reversedString, polishedString)
//     if (polishedString!=reversedString){
//         return false
//     }
//     return true;
// }
// let result=palindrome("eye_");
// console.log(result);

// let palindrome=function (word){
//     let len=word.length;
//     let start=word.substring(0, Math.floor(len/2)).lowerCase();
//     let end=word.substring()
//     for (left=0;left<arr.length;left++){

//     }
// }


// var x = 5;

// function setX(newValue) {
//     x = newValue;
//     return x
// }

// console.log(x);
// setX(15);
// console.log(x);

var x = 5;

function addToX(amount) {
    return x + amount;
    console.log("hello there");
}

console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);


// function isPal(arr) {
//     for (var left = 0; left < arr.length / 2; left++) {
//         var right = arr.length - 1 - left;
//         if (arr[left] != arr[right]) {
//             return "Not a pal-indrome!";
//         }
//     }
//     return "Pal-indrome!";
// }

// var result1 = isPal([1, 1, 2, 2, 1]);
// console.log(result1);

// var result2 = isPal([3, 2, 1, 1, 2, 3]);
// console.log(result2);
