// Traziti unos korisnickog imena sve dok korisnik ne unese ispravno korisnicko ime
// (npr. duzina korisnickog imena mora biti najmanje 6 karaktera)

// let ime = prompt("Unesite korisnicko ime");
// let i = 0;
// while (ime.length > 7) {
//   ime = prompt("Unesite korisnicko ime");
// }

//Funkcije predstavljaju deo kod koji ce se izvristi samo u slucaju njihovog pozivanja.
// Koristimo ih da bi nas kod bio reusable (isti kod resava vise problema slicnog tipa).

// Funkciju mozemo napraviti na dva nacina:
// 1. Preko function keyword;
// 2. Arrow function

// 1.
function myFunction() {
  // kod unutar funkcije
}

// 2.
// const myFunction2 = () => {
//   // kod unutar funkcije
// };

// function greeting() {
//   console.log("Greetings");
// }

// greeting();

// Parametar definisanja funkcije mozemo joj proslediti parametre koji su neophodni za izvrsavanje koda date funkcije
// Dok prilikom pozivnanja funkcije to sto saljemo funkciji se zovu argumenti.

// function greeting2(ime) {
//   console.log("Greetings " + ime);
// }
// greeting2("Emir");

// function sabiranje() {
//   const prom1 = 3;
//   const prom2 = 5;
//   // Kada se izvrsi cela logika funkcije, kranji rezultat treba vratiti u return keyword (rezervisanoj reci)
//   return prom1 + prom2;
//   // Kod koji se nadje nakon return u function scope-u se nece primeniti
// }
// sabiranje();

// function sabiranje(broj1, broj2) {
//   return broj1 + broj2;
// }
// console.log(sabiranje(1, 5));
// Dodeljivanje defaultne vrednosti se moze izvrsiti na dva nacina:

//1.
// function sabiranje(broj1, broj2) {
//   if (broj2 === undefined) {
//     return broj1;
//   } else {
//     return br1 + br2;
//   }
// }
// console.log(sabiranje(2));
function sabiranje(br1, br2 = 0) {
  return br1 + br2;
}
