// Domaci zadaci:
// 1. Prebrojavanje reči
// Napiši funkciju koja prima jedan string kao argument i vraća broj reči u tom stringu. Pretpostavi da su reči odvojene samo jednim razmakom. Na primer, za ulazni string "Ovo je primer." funkcija treba da vrati broj 3.

// 2. Obrtanje stringa
// Napiši funkciju koja prima jedan string kao argument i vraća taj string u obrnutom redosledu. Na primer, za ulazni string "hello" funkcija treba da vrati "olleh".

// 3.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.

// 1. Prebrojavanje reči
// Napiši funkciju koja prima jedan string kao argument i vraća broj reči u tom stringu.
// Pretpostavi da su reči odvojene samo jednim razmakom. Na primer, za ulazni string "Ovo je primer." funkcija treba da vrati broj 3.

//----------------------

// function myFunc(string) {
//   const howMany = string.split(" ");
//   let brojac = 0;
//   for (let i = 0; i < howMany.length; i++) {
//     brojac++;
//   }
//   return brojac;
// }

// console.log(myFunc("Ovo je primer."));
// console.log(myFunc("Ovo je neki drugi primer"));

//----------------------

// 2. Obrtanje stringa
// Napiši funkciju koja prima jedan string kao argument i vraća taj string u obrnutom redosledu. Na primer, za ulazni string "hello" funkcija treba da vrati "olleh".

// function reverseString(str) {
//   let reverseStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   return `Ovo je nasa nova obrnuta recenica ${reverseStr}`;
// }

// console.log(reverseString("hello"));

//----------------------

// 3.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.

// function howMany(str) {
//   let brojac = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(parseInt(str[i]))) {
//       brojac++;
//     }
//   }
//   return `Broj cifara u stringu je : ${brojac}`;
// }

// console.log(howMany("koliko je 20 km u grame"));
//----------------------
// Domaci zadaci:
// Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec "skola", neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil" neka se vrati boolean true;
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca".
// Inace vratiti duzinu datog stinga.
//----------------------

// myFunc = (recenica) => {
//   if (recenica.startsWith("Automobil")) {
//     return true;
//   } else if (recenica.match("skola")) {
//     return recenica.indexOf("skola");
//   } else if (recenica % 2 === 0) {
//     let reci = recenica.split(" ");
//     let brojac = 0;
//     for (let i = 0; i < reci.length; i++) {
//       if (reci[i] === "kuca") {
//        brojac++;
//       }
//     }
//   } else {
//     return recenica.length;
//   }
// };
// console.log(myFunc("Automobil je brzo sredstva."));
// console.log(myFunc("skola je jako dobra."));
// console.log(myFunc("Danas je lep dan ."));
// console.log(myFunc("Ovo je neka random recenica."));

// 3.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.
//----------------------

lowerCase = (recenica) => {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++) {
    const karakter = recenica[i];
    if (karakter >= "a" && karakter <= "z") {
      brojac++;
    }
  }
  return brojac;
};

console.log(lowerCase("ASTERIKS I obeliks"));
