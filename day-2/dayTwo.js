/**
 * This problem was asked by Uber.
 * 
 * Given an array of integers, return a new array such that each element 
 * at index i of the new array is the product of all the numbers in the original 
 * array except the one at i.
 * 
 * For example, if our input was [1, 2, 3, 4, 5], 
 * the expected output would be [120, 60, 40, 30, 24]. 
 * If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * 
 * Follow-up: what if you can't use division?
 */

 const multiplyAllArrayValuesExceptIndex = (array) => {
   let arrayOfSums = [];

   for (let i = 0; i < array.length; i++) {
    const productOfAllExceptIndex = array
      .filter((value, index) => index !== i)
      .reduce((product, currentVal) => {
        return product * currentVal
      }, 1);
    
    arrayOfSums.push(productOfAllExceptIndex);
   }

   return arrayOfSums;
 }

 // TEST 1 -- EXPECT 
const arrayOfNumbers1 = [1, 2, 3, 4, 5];

console.log('\n');
console.log('='.repeat(40));
console.log('TEST 1');
console.log('ARRAY: ', JSON.stringify(arrayOfNumbers1));
console.log('EXPECTED RESULT: [120, 60, 40, 30, 24]');
console.log('ACTUAL RESULT TWO PASS FUNCTION: ', multiplyAllArrayValuesExceptIndex(arrayOfNumbers1));
console.log('='.repeat(40));


