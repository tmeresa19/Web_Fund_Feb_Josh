// Write a function that takes a non-empty array of distinct integers and an integer representing a target sum. 
// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. 
// If no two numbers sum up to the target sum, the function should return "no sum in the array can be found". 
// Note that the target sum has to be obtained by summing two different integers in the same array. 
// You can't add a single integer to itself in order to obtain the target sum. 
// You can assume that there will be at most one pair of numbers summing up to the target sum.

//In other words:

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]



function sumInArray(arr, sum) {
    var returnArr = [];

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                returnArr.push(i);
                returnArr.push(j);
                return returnArr;
            }
        }
    }

    return "no sum in the array can be found";


}


console.log(sumInArray([1, 2, 3, 4, 5], 9));
console.log(sumInArray([2, 7, 11, 15], 9));
console.log(sumInArray([3, 2, 4], 6));
console.log(sumInArray([3, 3], 6));