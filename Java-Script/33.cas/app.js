// const isArray = (arr) => Array.isArray(arr);

// const cloneArr = (arr) => {
//   const arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2[i] = arr[i];
//   }
//   // for petlja koja se koristi kod iterirajucih objekata (2. verzija)
//   return arr2;
// };
// console.log(cloneArr([1, 2, 3, 4, 5]));

// const firstN = (arr, n = 1) => {
//   for (let i = 0; i < n; i++) {
//     console.log(arr[i]);
//   }
//   return "L";
// };
// console.log(firstN([1, 4, 3, 4, 5], 4));

// Java Script array metode //

// toString() i join()

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.toString());
// // join() prihvata argument koji prestavlja karakter (niz karaktera) koji ce se naci izmedju elemenata
// // (u novodobijenom stringu).
// console.log(arr.join("*"));

// push() metoda dodaje novi (vise elemenata) na kraju niza.

const fruits = ["strawberries", "ananas", "apple", "mango"]; // push predstavlja duzinu niza sa novim elementima
// fruits.push("banana", "pear", "grape");
// console.log(fruits);

// pop() metoda brise poslednji element niza.

// fruits.pop();
// console.log(fruits);
// console.log(fruits.pop());

// shift() metoda brise prvi element niza, svi ostali elementi se vracaju za jedno mesto.

console.log(fruits.shift()); // vrednost izbrisanog elementa
console.log(fruits);

// unshift() metoda dodaje elemente (vise elemenata) na pocetku niza.

console.log(fruits.unshift("peach", "watermelon"));
console.log(fruits);

// delete metoda brise odredjeni element niza.
// Koriscenjem delete metode mozemo izbrisati zelejeni element niza, ali nije preporuka koristiti tu metodu vec pop() ili shift().

// delete metoda ostavlja prazna (undefined) polja. Ne birse se element u potpunosti.

delete fruits[fruits.length - 1];
console.log(fruits);
