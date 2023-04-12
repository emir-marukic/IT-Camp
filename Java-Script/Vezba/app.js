/* 
 # 1- Ispisati prirodne brojeve od 1 do 5. //
 # 2- Ispisati prirodne brojeve od 4 do 8. //
 # 3- Ispisati prirodne brojeve od 8 do 16. //
 # 4- Ispisati prirodne brojeve od 15 do 27.//
 # 5- Ispisati prirodne brojeve od 1 do n. //
 # 6- Ispisati prirodne brojeve od k do n. //
 # 7- Ispisati prirodne brojeve od a do b.
 # 8- Ispisati prirodne brojeve od c do d.
 # 9- Ispisati prirodne brojeve od 9 do 5 unazad.
 # 10- Ispisati prirodne brojeve od 10 do 6 unazad.
 # 11- Ispisati dvostruku vrijednost prirodnih brojeva od 1 do 5.
 # 12- Ispisati dvostruku vrijednost prirodnih brojeva od 6 do 14.
 # 13- Ispisati dvostruku vrijednost prirodnih brojeva od 8 do 16.
 # 14- Ispisati trostruku vrijednosti prirodnih brojeva od 15 do 27.
 # 15- Ispisati trostruku vrijednosti prirodnih brojeva od k do n. //
 # 16- Ispisati trostruku vrijednosti prirodnih brojeva od a do b.
 # 17- Ispisati dvostruku vrijednost prirodnih brojeva od 8 do 16 unazad.
 # 18- Ispisati dvostruku vrijednost prirodnih brojeva od 10 do 6 unazad.
 # 19- Suma prvih 5 prirodnih brojeva.
 # 20- Suma dvostruke vrijednosti prvih 5 prirodnih brojeva.
 # 21- Suma prvih n prirodnih brojeva.
 # 22- Suma dvostruke vrijednosti od 1 do 2*n.
 # 23- Suma prirodnih brojeva od k do n.
 # 24- Suma parnih prirodnih brojeva od 1 do 5.
 # 25- Suma neparnih prirodnih brojeva od 1 do 5.
*/
// 1.
// for (let i = 1; i < 6; i++) {
//   console.log(i);
// }
// 2.
// for (let i = 4; i < 9; i++) {
//   console.log(i);
// }
// 3.
// for (let i = 8; i < 17; i++) {
//   console.log(i);
// }
// 4.
// for (let i = 15; i < 28; i++) {
//   console.log(i);
// }
// 5.
// let n = +prompt("Unesite broj");
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }
// 6.
// let i = +prompt("Unesite prvi broj");
// let n = +prompt("Unesite drugi broj");

// for (i; i <= n; i++) {
//   console.log(i);
// }
// 7.

// for (let i = 99; i >= -99; i--) {
//   console.log(i);
// }

// 8.
// for (let i = 1; i < 6; i++) {
//   console.log(i * 2);
// }
// 14- Ispisati trostruku vrijednosti prirodnih brojeva od 15 do 27.

// for (let i = 15; i < 28; i++) {
//   console.log(i * 3);
// }

// 16- Ispisati trostruku vrijednosti prirodnih brojeva od a do b.

// let a = prompt("Unesite broj");
// let b = prompt("Unesite broj");
// for (a; a <= b; a++) {
//   if (isNaN(a) || isNaN(b)) {
//     console.log("Niste uneli broj");
//   } else {
//     console.log(a * 3);
//   }
// }

// # 20- Suma dvostruke vrijednosti prvih 5 prirodnih brojeva

// let suma = 0;
// for (let i = 1; i < 6; i++) {
//   console.log(i * 2);
//   suma += i;
// }
// console.log(suma);

// let n = +prompt("Unesite broj");
// let suma = 0;
// for (let i = 1; i <= n; i++) {
//   console.log(i * 2);
//   suma += i * 2;
// }
// console.log(suma);

// Suma parnih prirodnih brojeva od 1 do 5.
// let suma = 0;
// for (let i = 0; i < 6; i += 2) {
//   suma += i;
// }
// console.log(suma);

// Suma neparnih brojeva od 1 do 5.

// let suma = 0;

// for (let i = 1; i < 6; i += 2) {
//   suma += i;
// }
// console.log(suma);

// Prebrojati brojeve djeljive sa 5 u intervalu od 1 do n.
// let n = +prompt("Unesite broj");
// let brojac = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 5 === 0) {
//     brojac++;
//   }
// }
// console.log(brojac);

// Proizvod parnih 10 do 20.

// let proizvod = 1;
// for (let i = 10; i <= 20; i++) {
//   if (i % 2 === 0) {
//     proizvod *= i;
//   }
// }
// console.log(proizvod);

let n = +prompt("Unesite broj");
let proizvod = 1;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     proizvod *= i;
//   }
// }
// console.log(proizvod);
