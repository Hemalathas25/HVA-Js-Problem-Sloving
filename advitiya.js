{/*
IIT Ropar is hosting its tech fest, Advitiya, on the 16-th, 17-th, and 18-th of February.

Mehul, looking for a vacation, decides to visit Ropar in the month of February.
Mehul learned of Advitiya, and found out that there are no registration fees — even accommodation is being provided to the participants for free!
Team Advitiya is very welcoming, so Mehul definitely wants to attend the fest.

Mehul will visit Ropar on date N (which is between 1 and 18) of February. Will he be able to enjoy the fest?

Print "ADVITIYA" if N is one of the days on which Advitiya is running, and "WAITING FOR ADVITIYA" otherwise.

Input Format
The first line contains a single integer N, the date on which Mehul decided to visit Ropar.

Output Format
Print a single line containing the answer: "ADVITIYA" if Mehul visits on the right date, and "WAITING FOR ADVITIYA" otherwise.
Both strings are to be printed without the quotes.

Each character of the output may be printed in either uppercase or lowercase, i.e, the strings ADVITIYA, advitiya, and AdViTiYa will all be treated as equivalent.

Constraints
1≤N≤18

Sample 1:
Input Output
5       WAITING FOR ADVITIY

Explanation:
Advitiya starts on 16-th, but Mehul is visiting on the 5-th which is too early.

Sample 2:
Input  Output
17       ADVITIYA

Explanation:
Advitiya runs from 16-th to 18-th, so Mehul does get to attend the fest.
*/ }


/*function checkAdvitiyaDay(day) {
    const advitiyaDays = [16, 17, 18];
    if(advitiyaDays.includes(day)) {
        return "ADVITIYA";
    } else {
        return "WAITING FOR ADVITIYA";
    }
}

const N = parseInt(prompt("Enter the visit date (between 1 and 18): "));

console.log(checkAdvitiyaDay(N)); */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkAdvitiyaDay(day) {
    const advitiyaDays = [16, 17, 18];
    
    if (advitiyaDays.includes(day)) {
        return "ADVITIYA";
    } else {
        return "WAITING FOR ADVITIYA";
    }
}

rl.question("Enter the visit date (between 1 and 18): ", (answer) => {
  const N = parseInt(answer);
  console.log(checkAdvitiyaDay(N));
  rl.close();
});