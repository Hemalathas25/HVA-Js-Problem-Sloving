{/*  Min and Max Difference in an Array
You are given an array of integers. Find the minimum and maximum difference 
between any two elements in an array.

Sample Input:
5 4 7 8 4 6 11 9

Sample Output:
0 7
Explanation: Minimum Difference: 4 - 4 = 0. Maximum Difference: 11 - 4 = 7
 */}
 function findMinMaxDifference(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    console.log(arr)
    let minElement = arr[0];
    let maxElement = arr[arr.length -1];
    
    let diffent = maxElement - minElement;
    let minDiferent = minElement - minElement;
    
    return [minDiferent,diffent].join(" ")
  }
  const array = [5,4,7,8,4,6,11,9];
  console.log(findMinMaxDifference(array));