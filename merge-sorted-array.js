//Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

//Note:
//You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
//The number of elements initialized in nums1 and nums2 are m and n respectively.

console.log(merge([1,3], 2, [2,4,5], 3), "Expected: [1,2,3,4,5]");
console.log(merge([3,8,13,19], 4, [2,4,5,16,17], 5), "Expected: [2,3,4,5,8,13,16,17,19]");
console.log(merge([3,8,13,19], 4, [], 0), "Expected: [3,8,13,19]");
console.log(merge([0], 1, [1], 1), "Expected: [0,1]");
console.log(merge([], 0, [1], 1), "Expected: [1]");
console.log(merge([], 0, [], 0), "Expected: []");

function merge(nums1, m, nums2, n) {
    let movingNumber = 0;
    nums2.forEach(function(number) {
        movingNumber = number;
        let indexForMovingNumber = nums1.findIndex(findIndexForMovingNumber);
        if (indexForMovingNumber !== -1) {
               nums1.splice(indexForMovingNumber, 0, movingNumber);
            } else {
                nums1.push(movingNumber);
            }
    });
    function findIndexForMovingNumber (nums1ArrayNumber) {
        return nums1ArrayNumber > movingNumber;
    }
    return nums1;
}
