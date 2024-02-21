{/* You are given an integer array. Find the index of the minimum element of the array.
 If there are multiple occurrences of the minimum number, 
 print the index of the first occurrence of the minimum number.
Note: The index will be calculated from 1.

Sample Input:
10 5 6 3 4 3 5 6

Sample Output:
4

Explanation: Here 3 is the minimum number. But since 3 is present more than once,
 we print the index of the first occurrence.
*/}

/*const arr = [10, 5, 6, 3, 4, 3, 5, 6];
function findminiindex(arr){
    var min = arr[0];
    var index = 1
    for(let i=0; i<arr.legth; i++){
        if(arr[i]<min);{
        min = arr[i];
        index = i + 1;
        }
        
    }
    return index;
}
console.log(findminiindex(arr)) */

var arr =[10, 5, 6, 3, 4, 3, 5, 6]
function minimumIndex(arr){
    var min =arr[0];
    var index=1
    for(let i=0;i<arr.length;i++){
    
     if(arr[i]<min){
        min = arr[i];
        index = i + 1;
     }

    }
    return index

}
console.log(minimumIndex(arr))