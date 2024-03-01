{/* You are given an array of integers. Find the element that appears the maximum
number of times in an array. If multiple elements appear maximum number of times,
you can print any.
Sample Input:
5 4 7 11 8 4 6 11 9
Sample Output:
4
Explanation: Both 4 and 11 appear 2 times. We can print any of 4 and 11, so we print 4.
 */}

const maxArrayFq = (arr) =>{
    var mf = 0;
    var m = 0;
    var item;
    for(var i =0; i < arr.length; i++){
        for(var j = 1; j < arr.length; j++){
            if(arr[i] == arr[j])
                m++;
            if(mf < m){
                mf =m;
                item = arr[i];
            }
        }
        m = 0;
    }
return item;
}
console.log(maxArrayFq([5,4,7,11,8,4,6,11,9]));