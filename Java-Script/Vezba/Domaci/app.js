// Domaci:
// 1.
// Ispisati sve brojeve od 1 do 10 koji su parni

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

// 1.
// let i = 1;
// while (i < 11) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }
//-------------------------------

// 2.

// let n = +prompt("Unesite korektan broj ");
// let k = +prompt("Unesite korektan broj ");

// if (isNaN(n) || isNaN(k)) {
//   console.log("Niste uneli korektan broj");
// } else if (n <= k) {
//   while (n <= k) {
//     console.log(n);
//     n++;
//   }
// } else if (k < n) {
//   while (k <= n) {
//     console.log(k);
//     k++;
//   }
// } else {
//   console.log("Uneli ste iste brojeve");
// }

//-------------------------------
// Domaci zadaci:

// 1.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25.

// 2.  Задатак: Фудбалски терен
//     Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
//     од линије терена r. Напиши програм који одређује дужину ограде.
//     Улаз: У три реда стандардног улаза налазе се три цела броја:
//     • d - дужина терена у метрима (90 ≤ d ≤ 120)
//     • s - ширина терена у метрима (45 ≤ s ≤ 90)
//     • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)
//-------------------------------

// let duzina = +prompt("Unesite duzinu ");
// let sirina = +prompt("Unesite sirinu ");
// let rastojanje = +prompt("Unesite rastojanje ");
// const duzinaOgrade = 2 * duzina + 2 * sirina + 8 * rastojanje;

// if (isNaN(duzina) || isNaN(sirina) || isNaN(rastojanje)) {
//   console.log("Niste uneli dimenzije");
// } else if (duzina <= 89 || duzina >= 120) {
//   console.log("Niste uneli korektne dimenzije za duzinu");
// } else if (sirina <= 44 || sirina >= 90) {
//   console.log("Niste uneli korektne dimenzije za sirinu");
// } else if (rastojanje <= 2 || rastojanje >= 10) {
//   console.log("Niste uneli korektne dimenzije za rastojanje");
// } else {
//   console.log("Treba nam" + duzinaOgrade + "metara za ogradjivanje terena.");
// }
// //-------------------------------
// let i = +prompt("Unesite broj u intervalu 12 - 16");
// if (isNaN(i)) {
//   console.log("Niste uneli korektan broj");
// } else if (i >= 12 && i <= 16) {
//   for (i; i >= 1; i--) {
//     console.log(i * i - 25);
//   }
// } else {
//   console.log("Morate uneti broj u intervalu od 12 - 16");
// }
// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.
//-------------------------------
const recenica = prompt("Unesite neku rec");
let novaRecenica = "";
let length = recenica.length;
for (let i = 0; i < length; i++) {
  if (i === length - 1) {
    novaRecenica += recenica[i].toUpperCase();
  } else if (recenica[i + 1] === " ") {
    novaRecenica += recenica[i].toUpperCase();
  } else {
    novaRecenica += recenica[i];
  }
}
console.log(novaRecenica);
//-------------------------------
// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5
// -------------------------------
let recenica2 = "Mama ima momu";
let brojac = 0;
for (let i = 0; i < recenica2.length; i++) {
  if (recenica2[i] === "M" || recenica2[i] === "m") {
    brojac++;
  }
}
console.log(brojac);
