/**
 * This problem was recently asked by Google.
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * 
 * BONUS: Can you do this in one pass?
 */
const doTwoNumbersAddUpToK = (numbersArray, k) => {
  console.log('here?');
  for (let i = 0; i < numbersArray.length; i++) {
    for (let j = 0; j < numbersArray.length; j++) {
      if (numbersArray[i] + numbersArray[j] === k) {
        return true;
      }
    }
  }
  return false;
};

const doTwoNumbersAddUpToKOnePass = (numbersArray, k) => {
  foundNumbers = new Set();
  for (let i = 0; i < numbersArray.length; i++) {
    if (foundNumbers.has(numbersArray[i])) {
      return true;
    }
    foundNumbers.add(k - numbersArray[i]); // We add the numbers counterpart (k - num) to our set so that if there is a match we know the sum exists.
  }
  return false;
}

// TEST 1 -- EXPECT TRUE
const listOfNumbers1 = [10, 15, 3, 7];
const k1 = 17;

console.log('\n');
console.log('='.repeat(40));
console.log('TEST 1');
console.log('NUMBERS: ', JSON.stringify(listOfNumbers1));
console.log('K: ', k1);
console.log('EXPECTED RESULT: ', true);
console.log('ACTUAL RESULT TWO PASS FUNCTION: ', doTwoNumbersAddUpToK(listOfNumbers1, k1));
console.log('ACTUAL RESULT ONE PASS FUNCTION: ', doTwoNumbersAddUpToKOnePass(listOfNumbers1, k1));
console.log('='.repeat(40));

// TEST 2 -- EXPECT FALSE
const listOfNumbers2 = [10, 15, 3, 7, 46, 76, 23, 33];
const k2 = 129;

console.log('\n');
console.log('='.repeat(40));
console.log('TEST 2');
console.log('NUMBERS: ', JSON.stringify(listOfNumbers2));
console.log('K: ', k2);
console.log('EXPECTED RESULT: ', false);
console.log('ACTUAL RESULT TWO PASS FUNCTION: ', doTwoNumbersAddUpToK(listOfNumbers2, k2));
console.log('ACTUAL RESULT ONE PASS FUNCTION: ', doTwoNumbersAddUpToKOnePass(listOfNumbers2, k2));
console.log('='.repeat(40));
console.log('\n');
