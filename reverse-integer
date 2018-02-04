
//Given a 32-bit signed integer, reverse digits of an integer.

//Example 1:

//Input: 123
//Output:  321
//Example 2:

//Input: -123
//Output: -321
//Example 3:

//Input: 120
//Output: 21
//Note:
//Assume we are dealing with an environment which could only hold integers within the 32-bit signed
//integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

//Your runtime beats 51.87 % of javascript submissions.

/**
 * @param {number} x
 * @return {number}
 */
// console.log(reverseNums(123), '123', 321);
// console.log(reverseNums(-123), '-123', -321);
// console.log(reverseNums(120), '120', 21);
// console.log(reverseNums(121235512350), '121235512350', 0);

function reverseArray(inputArray) {
    return inputArray.reverse();
}

function reverse (inputNum) {
    var arrayNum = inputNum.toString().split("");
    var returnString = '';
    var lowerLimit = -2147483648;
    var upperLimit = 2147483647;
    if (arrayNum[0] === '-') {
        arrayNum.splice(0,1);
        reverseArray(arrayNum);
        arrayNum.splice(0,0,'-');
        returnString = arrayNum.join('');
    } else {
        reverseArray(arrayNum);
        returnString = arrayNum.join('');
    }
    if (returnString*1 < lowerLimit || returnString*1 > upperLimit) {
        return returnString*0;
    } else {
        return returnString*1;
    }
    
};


