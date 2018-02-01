// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var testString = "abcabbaac";
console.log(lengthOfLongestSubstring(testString));

function lengthOfLongestSubstring(s) {
    var stringArray = s.split("");
    var newArray = [];
    var returnedArray = [];

    stringArray.forEach(function(letter) {
        // console.log(letter)
        if (newArray.length === 0) {
            // if the newArray is empty push this letter into it
            newArray.push(letter);
        } else {
            // if newArray is not empty run a loop on newArray
            newArray.forEach(function(savedLetter) {
                if (savedLetter === letter && newArray.length > returnedArray.length) {
                    // if one of the letters in newArray is the same as the letter in loop
                    // and the length of the newArray is greater than the returnedArray
                    // set the returnArray to the newArray
                    returnedArray = newArray;
                    newArray = [];
                    console.log("ping", newArray, returnedArray);
                } if (savedLetter !== letter) {
                    // if letter is different from all savedLetters push letter to newArray
                    newArray.push(letter);
                }
            })
        }
    })
    return returnedArray;
};

