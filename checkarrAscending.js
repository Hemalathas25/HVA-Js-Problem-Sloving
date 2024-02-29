{/* You are given an array of integers. Check if the array is in Ascending Order.
If yes, print "Yes", else print "No.

Sample Input 1:
3 5 10 13 16 12 14

Sample Output 1:
No

Explanation 1: The given array is not in ascending order.
Sample Input 2:
3 5 10 13 16 25 33
Sample Output 2:
Yes
Explanation 2: The given array is in ascending order.
*/}

const arrayAscending = (arr) => {
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr[i+1]){
            return "NO"
        }
    }
    return "YES"
}
console.log(arrayAscending([3,5,10,18,40,25,33]))

