Given a binary array, find the maximum number of consecutive 1s in this array.

//Example 1:
//Input: [1,1,0,1,1,1]
//Output: 3

//Explanation: The first two digits or the last three digits are consecutive 1s.
//The maximum number of consecutive 1s is 3.

//Note:
//The input array will only contain 0 and 1.
//The length of input array is a positive integer and will not exceed 10,000

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]), 'Expected: 3');
console.log(findMaxConsecutiveOnes([0,1,1,1,1,0]), 'Expected: 4');
console.log(findMaxConsecutiveOnes([1,0,0,1,0,1]), 'Expected: 1');
console.log(findMaxConsecutiveOnes([1,1,1,1,1,1]), 'Expected: 6');
console.log(findMaxConsecutiveOnes([0,0,0,0,0,0]), 'Expected: 0');

function findMaxConsecutiveOnes(nums) {
    let storedValue = 0;
    let returnLengthNumber = 0;
    nums.forEach(function(number) {
        if (number === 1) {
            returnLengthNumber ++
        } else {
            if (returnLengthNumber > storedValue) {
                storedValue = returnLengthNumber;
                returnLengthNumber = 0;
            }
            returnLengthNumber = 0;
        }
    });
    if (returnLengthNumber > storedValue) {
        return returnLengthNumber;
    } else {
        return storedValue;
    }
};

