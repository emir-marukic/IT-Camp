// Kondicionali:

if ("prvi uslov") {
  // blok koda za iszvrsavanje u slucaju da je zadovoljen prvi uslov
} else if ("drugi uslov") {
  // blok koda za iszvrsavanje u slucaju da je zadovoljen drugi uslov
} else {
  // blok koda koji ce se izvrsiti u slucaju da sve prethodno nije zadovoljeno
}

const godine = 21;
if (godine >= 18) {
  console.log("Punoletni ste");
} else {
  console.log("Maloletni ste");
}

// 2.zadatak
// Na osnovu dve promeljive x i y napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule, a inace ispisuje poruku:
// Deljenje je nemoguce

let x = 16;
let y = 2;

console.log(x / y);

if (y === 0) {
  console.log("Deljenje je nemoguce");
} else {
  console.log(x / y);
}

let brojGodina = 40;

if (brojGodina < 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina >= 12 && brojGodina < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina >= 18 && brojGodina < 40) {
  console.log("Vi ste punoletni");
} else {
  console.log("Vi ste zrela osoba");
}
