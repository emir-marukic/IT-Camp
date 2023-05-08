// const zbirKvadrata = function (a, b) {
//   if (a === b) {
//     return "Povrsina kvadrata iznosi: " + a * b;
//   } else {
//     return "Povrsina pravougaonika iznosi: " + a * b;
//   }
// };
// console.log(zbirKvadrata(2, 4));

// // Arrow function:
// const kvadratBroja = (a) => {
//   return a ** 2;
// };
// console.log(kvadratBroja(4));

// Ako arrow function ima samo jedan parametar nije neophodno stavljati ga u zagradama .
// Ako funkcija vraca neki jednostavan izraz (prethodno  nije bilo dodatnog koda) mozemo izostaviti
// viticaste zagrade i return keyword

// 2.Primer
// const kvadratBroja = (a) => {
//   a ** 2;
// };

// const provera = () => {
//   const broj = +prompt("Unesite neki broj :");
//   if (isNaN(broj)) {
//     return "Uneta vrednost nije broj";
//   } else if (broj === 0) {
//     return "Uneta je nula";
//   } else if (broj < 0) {
//     return "Unet je negativan broj";
//   } else {
//     return "Unet je pozitivan broj";
//   }
// };
// provera(); // takodje se izvrsava
// console.log(provera()); // ispisujemo u konzoli radi provere

// const radnoVreme = (sat, minut) => {
//   if (sat > 8 && sat < 17 && minut < 60) {
//     return "Da";
//   } else {
//     return "Ne";
//   }
// };

// console.log(radnoVreme(14, 53));
// console.log(radnoVreme(17, 01));
