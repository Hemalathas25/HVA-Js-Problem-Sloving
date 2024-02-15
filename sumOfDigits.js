/*Write a program that calculates the sum of all the digits in a given number n.
Sample Input:
1132
Sample Output:
7
Explanation: 7 = 1+1+3+2 */

function sumOfDigits(n) {
    // Convert the number to a string
    let numAsString = n.toString();
    let sum = 0;

    // Iterate over each character in the string
    for (let i = 0; i < numAsString.length; i++) {
        // Convert the character back to a number and add it to the sum
        sum += parseInt(numAsString[i]);
    }

    return sum;
}

// Sample input
const number = 1132;

// Calculate and output the sum of digits
const sum = sumOfDigits(number);
console.log("Sum of digits:", sum); // Output: 7