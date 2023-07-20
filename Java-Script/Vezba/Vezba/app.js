// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message
//  "Good Work" if the input matches the guess number otherwise "Not matched".
// const shuffle = () => {
//   const guess = +prompt("Unesite neki broj od 1-10 :");
//   const rng = Math.floor(Math.random() * 10) + 1;
//   if (!isNaN(guess)) {
//     if (guess === rng) {
//       return `Good Work! u guessed ${guess} and the number is ${rng} `;
//     } else {
//       return `Not matched, number was ${rng}`;
//     }
//   } else {
//     return `U didnt enter valid number`;
//   }
// };
// console.log(shuffle());

// Write a JavaScript program to calculate the days left before Bajram.

// const bajram = () => {
//   const today = new Date();
//   const currentYear = today.getFullYear();
//   const bajramDate = new Date(currentYear, 5, 28);
//   const timeDiff = bajramDate.getTime() - today.getTime();
//   const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
//   return `There is ${daysLeft} day before bajram`;
// };
// console.log(bajram());
// console.log(new Date());
//----------------------------------

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

// const java = (str) => {
//   if (str.startsWith("Java") || str.startsWith("java")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(java("Java Script"));

// Write a JavaScript program to convert letters of a given string alphabetically.

// const alphabet = (str) => {
//   const arr = str.split("");
//   let newStr = arr.sort();
//   return newStr;
// };
// console.log(alphabet("emir"));

// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

// let str = "Papaja";
// console.log(str.slice(str.length - 4, 0));

// const shuffle = (str) => {
//   newStr = "";
//   let lastThree = str.slice(-3);
//   let rest = str.slice(0, -3);
//   return lastThree + rest;
// };
// console.log(shuffle(str));

// function repeatStr(n, s) {
//   let newStr = "";
//   for (let i = 0; i < n; i++) {
//     newStr += s;
//   }
//   return newStr;
// }
// console.log(repeatStr(2, "hello"));

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// function abbrevName(name) {
//   const split = name.split(" ");
//   const firstName = split[0];
//   const lastName = split[1];
//   return `${firstName[0]}.${lastName[0]}`;
// }

// console.log(abbrevName("Emir Marukic"));
