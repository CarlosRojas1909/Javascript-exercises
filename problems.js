/* Exercise 1:

Given an array of integers, return indices of the two numbers such that they add up to a specific target.You may assume that each input would have exactly one solution, and you may not use the same element twice.
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/
// var nums = [2, 7, 11, 15], target = 9;


// var twoSum = function(nums, target) {

//     var result = [];

//     for(var i = 0; i < nums.length; i++) {
//         // console.log(nums[i])
//         for(var j = i + 1; j < nums.length; j++) {

//             if(nums[i] + nums[j] === target) {

//                 result.push(i)
//                 result.push(j)

//             }
//         }
//     }
//      console.log(result);

// };

// twoSum(nums, target)



var a = [1,2,3], b =0;

for (var i = 0; i < a.length; i++) {
    console.log('This is my ' + (i+1) + ' loop, I am i:' + i)

        for (var j = i; j < a.length; j++) {
            console.log('This is my ' + (j+1)+ ' loop, I am j:' + j)
        } 

         b++;

        console.log('I am b in ' + (i+1) + ' loop: ' + b);
} 






























