{/* Write a program that takes a Binary Number B as input and prints
 the Decimal equivalent of the given input.
Sample Input:
1000
Sample Output:
8
*/}

function binaryToDecimal(binary){
    let decimal = parseInt(binary, 2)
    console.log(decimal)
}
binaryToDecimal(1001)