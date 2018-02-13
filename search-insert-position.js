// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.

console.log(searchInsert([1,3,5,6], 5), "Input: [1,3,5,6],5 Output: 2");
console.log(searchInsert([1,3,5,6,9,14,267,2136,21345], 2136), "Input: [1,3,5,6],5 Output: 7");
console.log(searchInsert([1,3,5,6], 2), "Input: [1,3,5,6], 2 Output: 1");
console.log(searchInsert([1,3,5,6], 7), "Input: [1,3,5,6], 7 Output: 4");
console.log(searchInsert([1,3,5,6], 0), "Input: [1,3,5,6], 0 Output: 0");

function searchInsert(nums, target) {
    var targetIndex;
    var indexcounter = 0;
    var checkNumIndex = nums.findIndex(checkIndex);
    
    function checkIndex(num) {
        return num === target;
    }
    
    if (checkNumIndex === -1) {
        nums.forEach(function(arrayNumber){
            if (arrayNumber > target) {
                return targetIndex = indexcounter;
            } else {
                indexcounter++
            }
            targetIndex = indexcounter;
        })
    } else {
        targetIndex = checkNumIndex;
    }
  return targetIndex;  
};
