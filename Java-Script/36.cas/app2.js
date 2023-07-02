// JavaScript Array Iteration metode

// Array Iteration metode prolaze kroz svaki element niza.

// forEach() metoda poziva callback funkciju (koja predstavlja argument forEach() metode jednom za svaki element niza)

// const brojevi = [2, 4, 6, 8, 10, 12];

// brojevi.forEach((element, index, arr) => {
//   //   console.log(element, index, arr);
//   console.log(element);
// });

// callback funkcija moze imati 3 argumenta
// 1. vrednost elementa
// 2. index(pozicija) elementa
// 3. ceo niz na koji se primenjuje metoda

// Preko petlje napraviti novi niz koji ce imati sve elemente orginalnog niza

let niz = [1, 2, 3, 4, 5, 6];

// const clone = (arr) => {
//   const newArr = [];
//   for (let nums of arr) {
//     newArr.push(nums);
//   }
// };
// console.log(clone(niz));

// const brojevi2 = [];
// niz.forEach((element) => {
//   brojevi2.push(element);
// });
// console.log(brojevi2);
