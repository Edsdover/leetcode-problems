// Implement strStr() or indexOf().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

console.log(strStr("aaaaa", "bba"),"Expected:", -1);
console.log(strStr("hello", "ll"),"Expected:", 2);
console.log(strStr("", ""),"Expected:", 0);
console.log(strStr("aaa", "a"),"Expected:", 0);
console.log(strStr("aaa", "aa"),"Expected:", 0);
console.log(strStr("aaa", "aaaa"),"Expected:", -1);
console.log(strStr("mississippi", "issip"),"Expected:", 4);
console.log(strStr("mississippi", "issipi"),"Expected:", -1);

function strStr(haystack, needle) {
    haystackArray = haystack.split('');
    needleArray = needle.split('');
    returnValue = -1;
    randomArray = [];
    haystackArray.some(function(letter, index){
       if (letter === needleArray[0]){
           if (needleArray.length === 1) {
               randomArray.push(index);
               returnValue = randomArray[0];
           }
           for (i = 1; i < needleArray.length; i++) {
               if (haystackArray[index + i] === needleArray[i]){
                   randomArray.push(index);
               } else if (haystackArray[index + i] !== needleArray[i]){
                   randomArray.push(-1);
                   break;
               }
              returnValue = randomArray[0];
           }
       }
    });
    if (needle === "") {
        returnValue = 0;
    } else if (haystack === needle) {
        returnValue = 0;
    } else if (needle.length > haystack.length) {
        returnValue = -1;
    }
    return returnValue;
};
