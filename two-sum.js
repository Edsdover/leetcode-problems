
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


var nums = [2, 7, 11, 15];
var target = 9;

console.log(twoSum(nums,target));

function twoSum(nums, target) {
    for (i=0;i<nums.length;i++) {
        for (y=1+i;y<nums.length;y++){
            if(nums[i]+nums[y]===target){
                return[i,y]
            }
        }
    }
};
