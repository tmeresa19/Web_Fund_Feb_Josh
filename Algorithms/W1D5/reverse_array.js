// var fruit1 = "apples";
// var fruit2 = "oranges";

// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;

// console.log(fruit2 + " and " + fruit1);

// var start = 0;
// var end = 12;

// while (start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }






function reverseArr(arr) {
    var i = 0;
    var j = arr.length - 1;
    while (i < arr.length / 2) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--
        console.log(arr);
    }
    return arr;
}
var reversed = reverseArr(["a", "b", "c", "d", "e"]);
console.log("The reversed string is: " + reversed)




