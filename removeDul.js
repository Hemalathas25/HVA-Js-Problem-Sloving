//how to remove the duplicate string in js 

const inputString = "12, -8, 6, 4, 5, 1, 89, 23, 5, 56";
const numberArray = inputString.split(',').map(Number);
const findDuplicatesFromString = [...new Set(numberArray)];
console.log(findDuplicatesFromString);