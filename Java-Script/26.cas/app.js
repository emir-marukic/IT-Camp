// const first = () => {
//   const a = +prompt("Unesite prvu potencijalnu stranicu pravougaonika");
//   const b = +prompt("Unesite prvu potencijalnu stranicu pravougaonika");
//   const c = +prompt("Unesite prvu potencijalnu stranicu pravougaonika");
//   const d = +prompt("Unesite prvu potencijalnu stranicu pravougaonika");
//   if (
//     ((a === b) === c) === d ||
//     (a === b && c === d) ||
//     (a === c && b === d) ||
//     (a === d && b === c)
//   ) {
//     return "Moguce je formirati pravougaonik";
//   } else {
//     return "Nije moguce formirati pravougaonik";
//   }
// };

// const second = () => {
//   const brojSekundi = +prompt("Unesite broj sekundi");
//   const sati = Math.floor(brojSekundi / 3600);
//   const minuti = Math.floor(brojSekundi % 3600) / 60;
// };
// console.log(second());

// JavaScript globalne metode

//Globalne metode mozemo primeniti na bilp koji tip podatka:

// Pomenucemo najpoznatije globalne metode:

// 1. Number()
// 2. ParseFloat()
// 3. ParseInt()

// 1. Number() - metoda vraca broj dobijen konvertovanjme argumenta.

// console.log(Number("string")); // NaN

// console.log(Number("34")); // 34

// console.log(Number("  34  ")); // 34 - Brise razmake sa strana i prevodi string u broj

// console.log(Number("34 43")); //NaN - Razmaci izmedju vise reci nisu dozvoljeni

// console.log(Number(true)); // 1

// console.log(Number(false)); // 0

// console.log(Number("[1,2]")); // NaN

// console.log(Number("[]")); // 0

// console.log(Number({})); // NaN

//-------------------------------------
// 2. parseFloat() - metoda vraca realan broj (sa decimalnim zapisom) dobijen konvertovanjem argumenta.

// console.log(parseFloat("string")); // NaN

// console.log(parseFloat("34")); // 34

// console.log(parseFloat("34.345")); // 34.345

// console.log(parseFloat("  34  ")); // 34 - Brise razmake sa strana i prevodi string u broj

// console.log(parseFloat("34 43")); // 34 - razmaci su dozvoljeni. Parsira se samo prva vrednost

// console.log(parseFloat("3sadad4 43")); // 3 - razmaci su dozvoljeni. Parsira se samo prva vrednost

// console.log(parseFloat("sadad4 43")); // NaN - razmaci su dozvoljeni. Parsira se samo prva vrednost

// console.log(parseFloat(true)); // NaN

// console.log(parseFloat(false)); // NaN

// console.log(parseFloat("[6,2]")); // 6 - parsira vrednost prvog elementa niza

// console.log(parseFloat("[]")); // NaN

// console.log(parseFloat({})); // NaN

// 3. parseInt() - metoda vraca realan broj (ceo) dobijen kovertovanjem argumenata.

// console.log(parseInt("string")); // NaN

// console.log(parseInt("34")); // 34

// console.log(parseInt("34.345")); // 34

// console.log(parseInt("  34  ")); // 34 - Brise razmake sa strana i prevodi string u broj

// console.log(parseInt("34 43")); // 34 - razmaci su dozvoljeni. Parsira se samo prva vrednost

// console.log(parseInt("3sadad4 43")); // 3 - razmaci su dozvoljeni. Parsira se samo prva vrednost

// console.log(parseInt("sadad4 43")); // NaN - razmaci su dozvoljeni. Parsira se samo prva vrednost

// console.log(parseInt(true)); // NaN

// console.log(parseInt(false)); // NaN

// console.log(parseInt("[6,2]")); // 6 - parsira vrednost prvog elementa niza

// console.log(parseInt("[]")); // NaN

// console.log(parseInt({})); // NaN

// kmIntoM = (num) => {
//   let km = num * 1000;
//   return km;
// };
// console.log(kmIntoM(1.5));
