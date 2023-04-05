// let num1 = +prompt("Unesite prvi broja");
// let num2 = +prompt("Unesite drugi broja");

// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Morate uneti korektne brojeve");
// } else if (num1 < num2) {
//   for (num1; num1 <= num2; num1++) {
//     console.log(num1);
//   }
// } else if (num1 === num2) {
//   console.log("Uneli ste iste brojeve");
// } else {
//   for (num2; num2 <= num1; num2++) {
//     console.log(num2);
//   }
// }

// switch (new Date().getDay()) {
//   case 0:
//   case 6:
//     console.log("Zelim vam ugodan vikend");
//     break;
//   default:
//     console.log("Danas je radni dan");
// }

let n = +prompt("Unesite broj");
let sum = 0;
let nums = 0;
for (let i = 1; i < n; i++) {
  if (i % 5 === 0) {
    sum += i;
    nums += 1;
  }
}
console.log(sum);
console.log(nums);
// 1.
// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbit broja deljivog sa 4 i broj 14.
//2.
//Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
//Iteracija se vrsi 3 do 17.

//https://www.znanje.org/knjige/computer/algoritmi/88_quiz/ciklicna_for_0.php
