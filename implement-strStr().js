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
console.log(strStr("mississippi", "pi"),"Expected:", 9);

function strStr(haystack, needle) {
    let haystackArray = haystack.split('');
    let needleArray = needle.split('');
    let returnValue = 0;
    let accumValue = 0;
    if (needle === "") {
        return returnValue = 0;
    } else if (haystack === needle) {
        return returnValue = 0;
    } else if (needle.length > haystack.length) {
        return returnValue = -1;
    }
    findFirstIndex();
    function findFirstIndex(sliceIndex) {
        let newHaystackArray = haystackArray;
        if (sliceIndex) {
            newHaystackArray = haystackArray.slice(sliceIndex);
        } else {
            newHaystackArray = haystackArray;
        }
        if (newHaystackArray.length < needleArray.length) {
            accumValue = 0;
            return returnValue = -1;
        }
        returnValue = newHaystackArray.indexOf(needleArray[0]);
        if (returnValue === -1) {
            return returnValue;
        }
        for (i = 0; i < needleArray.length; i++) {
               if (newHaystackArray[returnValue + i] === needleArray[i]){
                    
               } else {
                   accumValue += returnValue + 1;
                   findFirstIndex(accumValue);
                   break;
               }
           }
    }
    return returnValue + accumValue;
};
