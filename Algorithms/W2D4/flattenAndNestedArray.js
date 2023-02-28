// // Flatten Array
// var arr2d = [
//     [2, 5, 8],
//     [3, 6, 1],
//     [5, 7, 7]
// ]; 


function flatten(arr) {
    var flat = [];
    for (let row = 0; row < arr.length;row++){
        console.log([row], [col]) 
        for(var col=0;col<arr[row].length;col++){
        console.log(arr[row][col]);
        flat.push(arr[row][col])
    }
}
    return flat;
}    


var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


        

