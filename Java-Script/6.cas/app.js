//Ispisati brojeve od 1 do 10 u konzoli

// Za ispis vise brojeva je mnogo jednostavnije da koristimo neku petlju.

// for (let i; i < 11; i++) {
//blok koda za izvrsavnanje u svakoj iteraciji

// 1: je deo koda koji se izvrsaba samo na pocetku petlje i predstavlja definisanje iteratora
// 2: predstalja uslov za iizvrsaanje petlje
// 3: predstavlja promenu vrednosti iteratora

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 1.
// for (let i = 1; i < 11; i++) {
//   if (i !== 2 && i !== 5) {
//     console.log(i);
//   }
// }

// continue keywoard koristimo kada zelimo da izbegnemo neki slucaj i da se osvrnemo na narednu iteraciju

// 2.

// for (let i = 1; i < 11; i++) {
//   if (i === 2 || i === 5) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// break koristimo kada zelimo da prekinemo petlju

// for (let i = 1; i < 11; i++) {
//   if (i % 7 === 0) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 2; i < 21; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*  1. Ispisati neparne brojeve od 1 do 20 na dva nacina 
    2. Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5 
    3. Ispisati dvosturku vrednosti prirodnih brojeva
    4. Suma neparnih prirodnih brojeva od 10 do 20 
*/

for (let i = 6; i < 15; i++) {
  console.log(i * 2);
}
