//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.


console.log(isValid("[({(())}[()])]"), 'true');
console.log(isValid('(([]){})'), 'true');
console.log(isValid('(([]){})'), 'true');
console.log(isValid('(())'), 'true');
console.log(isValid('()[]{}'), 'true');
console.log(isValid('{[(())]}'), 'true');
console.log(isValid('[{}]'), 'true');
console.log(isValid('()'), 'true');
console.log(isValid('[((){)])'), 'flase');
console.log(isValid('{{[()]}})'), 'flase');
console.log(isValid('{{)}'), 'flase');
console.log(isValid('{)'), 'flase');

function isValid(string) {
    var testArray = string.split('');
    let stringLength = testArray.length;
    if (stringLength % 2 === 1) {
        return false;
    }
    for (i = 0; i < stringLength; i++) {
        testArray.forEach(function(inputArg, index, inputArray) {
            switch (inputArg) {
                case '[':
                    if (inputArray[index + 1] === ']') {
                        testArray.splice(index, 2);
                    }
                    break;
                case '{':
                    if (inputArray[index + 1] === '}') {
                        testArray.splice(index, 2);
                    }
                    break;
                case '(':
                   if (inputArray[index + 1] === ')') {
                        testArray.splice(index, 2);
                    }
                    break;
            }
        });
    }
    if (testArray.length === 0) {
        return true;
    } else {
        return false;
    }
};
