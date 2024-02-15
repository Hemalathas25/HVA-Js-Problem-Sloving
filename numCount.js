{/* You are given an integer array. You are also given a number.
 Print the number of times the number appears in the array.
Sample Input:
4 7 9 10 7 14 12 4 7 27
7
Sample Output:
3
Explanation: The given number 7 appears 3 times in the given array. 

Algorithm 
1. declare the given int array
2. */}


    function countNumber(a, n){
        let count = 0;
        for (let i=0; i<a.length; i++){
            if(a[i] == n){
                count++
            }
        }
        return count
    }

    console.log(countNumber([4,7,9,10,7,14,12,4,7,27], 9))