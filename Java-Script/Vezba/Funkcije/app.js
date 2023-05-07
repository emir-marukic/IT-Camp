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

function niz(rec) {
  let noviNiz = [];
  for (let i = 0; i < rec.length; i++) {
    if (rec.length >= 5) {
      return rec;
    }
    noviNiz += rec[i];
  }
}

const arr = ["auto", "matematika", "srpski", "engleski"];

console.log(niz(arr));
