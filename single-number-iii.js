//Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
//Find the two elements that appear only once.

//For example:

//Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

//Note:
//The order of the result is not important. So in the above example, [5, 3] is also correct.
//Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?


console.log(singleNumber([1, 2, 1, 3, 2, 5]), 'Expected: [3,5]');

function singleNumber(nums) {
    returnArray = [];
    nums.forEach(function(number) {
        let numberExistsCheck = returnArray.indexOf(number);
        if (numberExistsCheck === -1) {
            returnArray.push(number);
        } else {
            returnArray.splice(numberExistsCheck, 1);
        }
    });
    return returnArray;
}
