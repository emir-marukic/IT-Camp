// const first = (recenica) => {
//   if (recenica.includes("skola")) {
//     return recenica.indexOf("skola");
//   } else if (recenica.startsWith("Automobil")) {
//     return true;
//   } else if (recenica.length % 2 === 0) {
//     if (!recenica.match(/kuca/g).length) {
//       return 0;
//     } else {
//       return recenica.match(/kuca/g).length;
//     }
//   } else {
//     return recenica.length;
//   }
// };

// console.log(first("Koja se skola podrazumeva"));
// console.log(first("Automobil na prodaj"));
// console.log(first("parna recenica kuca"));
// console.log(first("parna recenica kuca ")

// second = (recenica) => {
//   let brojac = 0;
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica[i] >= "a" && recenica[i] <= "z") {
//       brojac++;
//     }
//   }
//   return brojac;
// };
// console.log(second("ASD kiriku"));
// Prvo idu velika slova pa mala
// console.log("a" > "A");
// console.log("a" > "b");

// Cesto u literaturi cemo naici na tvrdnju da je Java Script interpreterski jezik, ali to nije bas tako.
// U pozadini postoji JS masina koja vrsi poadinsko kompajliranje pre izvrsavanja koda.
// Stoga nije pogresno reci da je JS kompajliran jezik.

// Pojam hoisting u JavaScript predstavlja izvlacenje svih deklaracija  na vrhu skripte (fajla)

// Kasnije deklariranje neke promenljive je moguce preko var keyword, dok preko let i const nije dozvoljeno

veceIliManje = (recenica) => {
  let brojac = 0;
  let brojac2 = 0;
  for (let i = 0; i < recenica.length; i++) {
    let rec = recenica[i];
    if (rec >= "a" && rec <= "z") {
      brojac++;
    } else if (rec >= "A" && rec <= "Z") {
      brojac2++;
    }
  }
  if (brojac > brojac2) {
    return `U datoj recenici ima vise malih slova ${brojac}`;
  } else if (brojac2 > brojac) {
    return `U datoj recenici ima vise velikih slova ${brojac2}`;
  } else {
    return "Dati string ima jednak broj velikih i malih slova";
  }
};
console.log(veceIliManje("asd SASD"));
