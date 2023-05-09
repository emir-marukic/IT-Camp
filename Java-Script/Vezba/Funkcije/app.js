// Napisati JavaScript funkciju koja na osnovu operacije koju odaberemo izvršava sabiranje,
// oduzimanje, množenje ili deljenje dva broja iz HTML forme, kao što je prikazano na slici, i
// rezultat izvršavanja prikazuje u tekstualnom polju.

// function ime(ime1, ime2) {
//   if (
//     ime1 === "Emir" ||
//     ime1 === "emir" ||
//     ime2 === "Emir" ||
//     ime2 === "emir"
//   ) {
//     return "Emir je bolji support!!";
//   }
// }
// console.log(ime("Maja", "emir"));
//----------------------------------------
// Napišite funkciju koja prima niz brojeva i vraća najveći broj u nizu.

// function niz(num) {
//   let max = [0];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > max) {
//       max = num[i];
//     }
//   }
//   return max;
// }

// let broj = [1, 2, 3, 20, 5, 6, 7];
// console.log(niz(broj));
//----------------------------------------
// Napišite funkciju koja prima niz riječi i vraća novi niz koji sadrži samo one riječi koje počinju sa slovom "a".
// function nizReci(rec) {
//   let noviNiz = [];
//   for (let i = 0; i < rec.length; i++) {
//     if (rec[i] === "a" || rec[i] === "A") {
//       noviNiz += rec[i];
//     }
//   }
//   return noviNiz;
// }

// let niz = ["Ananas", "Kruska", "Pero", "Peci"];

// console.log(nizReci(niz));

// Napišite funkciju koja prima niz riječi i vraća novi niz koji sadrži samo one riječi koje su duže od 5 slova.

// function niz(rec) {
//   let noviNiz = [];
//   for (let i = 0; i < rec.length; i++) {
//     if (rec.length >= 5) {
//       return rec;
//     }
//     noviNiz += rec[i];
//   }
// }

// const arr = ["auto", "matematika", "srpski", "engleski"];

// console.log(niz(arr));
//----------------------------------------
/* Define a function called rant which accepts a string argument called message.  
   The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).
   For example, rant("I hate beets") should print out:

I HATE BEETS
I HATE BEETS
I HATE BEETS*/
// function rant(message) {
//   console.log(message.toUpperCase());
//   console.log(message.toUpperCase());
//   console.log(message.toUpperCase());
// }
// console.log(rant("I hate beets"));
//----------------------------------------
/*  In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.
    Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.
    If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

   isSnakeEyes(1,1) //Snake Eyes!
   isSnakeEyes(1,5) //Not Snake Eyes!
   isSnakeEyes(4,5) //Not Snake Eyes!

   Hint: Normally a function will return a value, but for the sake of having this work with the Udemy
   interpreter we will be using console.log() instead of return, to print the output. */

// isSnakeEyes = (num1, num2) => {
//   if (num1 === 1 && num2 === 1) {
//     return `${num1},${num2} is Snake Eyes`;
//   } else {
//     return `${num1},${num2} is not Snake Eyes`;
//   }
// };
// console.log(isSnakeEyes(1, 1));
// console.log(isSnakeEyes(1, 2));
//----------------------------------------
/* It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments and returns 
their product (multiply them together).  Make sure to return the value instead of printing it! */

// multiply = (num1, num2) => {
//   let total = num1 * num2;
//   return total;
// };
// console.log(multiply(2, 2));
//----------------------------------------
/* Please write a function called lastElement which accepts a single array argument.  
   The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null */

// lastElement = (arr) => {
//   if (arr.length !== 0) {
//     return arr[arr.length - 1];
//   } else {
//     return null;
//   }
// };
// console.log(lastElement([]));
