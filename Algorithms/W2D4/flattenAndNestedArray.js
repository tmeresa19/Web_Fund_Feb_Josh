// Flatten Array
var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]
]; 


function flatten(arr2d) {
    var flat = [];
    for (let i = 0; i < arr2d.length;i++){
    var items = arr2d[i].length;
    // console.log(i, items)
    for(var n=0;n<items;n++){
        console.log(arr2d[i][n]);
    }
}
    return flat;
}    


var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


        

