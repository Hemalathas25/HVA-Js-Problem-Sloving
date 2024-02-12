//how to remove the duplicate string in js 

const inputString = "1, 2, 3, 4, 1, 2, 5";
const numberArray = inputString.split(',').map(Number);

const uniqueNumbers = [...new Set(numberArray)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

