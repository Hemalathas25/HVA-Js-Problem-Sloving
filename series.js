{/*  Series: 2, 5, 8, 11, 14, …:
You are given an integer n. Print first n terms of the series 2, 5, 8, 11, 14…
Sample Input:
7
Sample Output:
2 5 8 11 14 17 20
Explanation: The series starts with 2 and every time adds 3 to get the next term.
 */}

let n = 10;
let k = 2;
let s = "";
     s+= k;
for (let i = 1; i < n; i++) {
    k += 3;
    s+= " " + k;
}
console.log(s);