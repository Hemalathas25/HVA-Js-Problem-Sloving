//how to remove the duplicate string in js 

const inputString = "12, -8, 6, 4, 5, 1, 89, 23, 5, 56";
const numberArray = inputString.split(',').map(Number); // split (separate) and map (conert array)
const findDuplicatesFromString = [...new Set(numberArray)]; // set( remove duplicates)
console.log(findDuplicatesFromString);

/* For example, if inputString is "12, -8, 6, 4, 5, 1, 89, 23, 5, 56", 
splitting it using ',' as the separator will result in the array 
["12", " -8", " 6", " 4", " 5", " 1", " 89", " 23", " 5", " 56"].
 Then, applying map(Number) will convert each element into a number, 
 resulting in the array [12, -8, 6, 4, 5, 1, 89, 23, 5, 56].
 */

const arr = [1,2,3,4,5,6,7,7,8,6,10];
let uniarr = [...new Set(arr)];
console.log(uniarr)


