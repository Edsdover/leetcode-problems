
//Given a roman numeral, convert it to an integer.

//Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */

console.log(romanToInt('XLII'), '42')
console.log(romanToInt('LXV'), '65')
console.log(romanToInt('CDXI'), '411')
console.log(romanToInt('IV'),'4')
console.log(romanToInt('IX'), '9')

function romanToInt (s) {
    var runningTotal = 0;
    romanNumber = s.split('');
    var nextLetter = '';
    for (i = 0; i < romanNumber.length; i++) {
        var letter = romanNumber[i];
        nextLetter = romanNumber[i+1];
        if (letter === 'I') {
            if (nextLetter === 'V' || nextLetter === 'X') {
                runningTotal -= 1;
            } else {
                runningTotal += 1;
            }
        } else if (letter === 'V') {
            runningTotal += 5;
        } else if (letter === 'X') {
            if (nextLetter === 'L' || nextLetter === 'C') {
                runningTotal -= 10;
            } else {
                runningTotal += 10;
            }
        } else if (letter === 'L') {
            runningTotal += 50;
        } else if (letter === 'C') {
            if (nextLetter === 'D' || nextLetter === 'M') {
                runningTotal -= 100;
            } else {
                runningTotal += 100;
            }
      } else if (letter === 'D') {
            runningTotal += 500;
      } else if (letter === 'M') {
            runningTotal += 1000;
        }
    }
    return runningTotal;
};
