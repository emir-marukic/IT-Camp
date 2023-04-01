// Za komunikaciju sa korisnikom koristimo prompt metodu:

const ime = prompt("Unesite vase ime: ");

console.log(ime);

const brojGodina = prompt("Unesite vase godine :");

console.log(brojGodina);
console.log(typeof brojGodina);

//Posto je vrednost dobijena preko prompt metode uvek string, otuda potreba da pretvorimo taj string u number tip podatka.

//Pomenucemo 2 nacina za prevodjenje stringa u broj:

// 1. Number(string)
const brojGodina2 = Number(brojGodina);
console.log(brojGodina2);
console.log(typeof brojGodina2);

//2. +string => number

const brojGodina3 = +brojGodina;

console.log(brojGodina3);
console.log(typeof brojGodina3);

const visina = +prompt("Unesite vasu visinu: ");
console.log(visina);
console.log(typeof visina);

//isNaN ispituje da li je vrenost nekog broja NaN

// console.log(NaN("56"));

const years = +prompt("Unesite broj vasih godina");
if (isNaN(years)) {
  console.log("Niste uneli broj godina");
} else if (years > 0 && years < 12) {
  console.log("Vi ste decijeg doba");
} else if (years >= 12 && years < 18) {
  console.log("Vi ste maloletni");
} else if (years >= 18 && years < 40) {
  console.log("Vi ste punoletni");
} else if (years >= 40) {
  console.log("Vi ste zrela osoba");
} else {
  console.log("Broj godina ne moze biti negativan");
}
console.log(years);

//Prazan string => 0
console.log(+""); //0
