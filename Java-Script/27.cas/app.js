// function trocifren(broj) {
//   if (!isNaN(broj) && broj >= 100 && broj <= 999) {
//     const stotina = Math.floor(broj / 100);
//     const jedinica = broj % 10;
//     const noviBroj = Number(`${stotina}${jedinica}`);
//     return noviBroj;
//   } else {
//     return "Argument nije trazen broj iz opsega ";
//   }
// }
// console.log(trocifren(123));

// Number Properties (Constants) Konstante //

// Number konstante ne mogu biti koriscene na varijablama
// Sledecim konstantama (Number svojstvima) mozemo pristupiti uskljucivo preko:
// Number.naziv_konstante

// MAX_VALUE - je najveci moguci broj u JaviScriptu.

console.log(Number.MAX_VALUE);

// MIN_VALUE - je najmanji moguci broj u JaviScriptu.

console.log(Number.MIN_VALUE);

// POSITIVE_INFINITY - Infinity (pozitivna beskonacnost)
// NEGATIVE_INFINITY - -Infinity (negativna beskonacnost)

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

// NaN - Not a Number vrednost

console.log(Number.NaN);
