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
// lowerCase = (recenica) => {
//   let brojac = 0;
//   for (let i = 0; i < recenica.length; i++) {
//     const karakter = recenica[i];
//     if (karakter >= "a" && karakter <= "z") {
//       brojac++;
//     }
//   }
//   return brojac;
// };
// console.log(lowerCase("ASTERIKS I obeliks"));
//----------------------

// 1.	Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'.
// Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// svaMala = (str) => {
//   const newStr = str.toLowerCase();
//   return newStr;
// };

// console.log(svaMala("WEBnSTUDY.com"));
//----------------------
// 2.	Pronaći poziciju poslednjeg razmaka u stringu. Npr. za uneto 'Pera ima devojku', rezultat je 8.
// function lastSpace(str) {
//   const newStr = str.lastIndexOf(" ");
//   return newStr;
// }
// console.log(lastSpace("Pera ima devojku"));

// 3.	Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4. Podrazumeva se da uneti string nema vodeće razmake.

// const firstChar = (str) => {
//   let splitStr = str.split(" ");
//   let newStr = splitStr[0];
//   return newStr.length;
// };
// console.log(firstChar("Pera ima devojku"));

// Domaci:
// 1.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

// revStr = (recenica, n) => recenica.slice(-n);

// console.log(revStr("Pera ima devojku", 5));
//----------------------

// Domaci:
// 1. Write a JavaScript function to hide email addresses to protect from unauthorized user.
// console.log(protectEmail("robin_singh@example.com")); (posle imena moze biti ili _ ili .)
// "robin...@example.com"

// email = (email) => {
//   const underLine = email.indexOf("_");
//   const dot = email.indexOf(".");
//   const at = email.indexOf("@");

//   if (underLine !== -1) {
//     const removeUnderLine = email.slice(underLine, at);
//     return email.replace(removeUnderLine, "...");
//   } else if (dot !== -1) {
//     const removeDot = email.slice(dot, at);
//     return email.replace(removeDot, "...");
//   }
// };
// console.log(email("robin_singh@gmail.com"));
// Domaci zadaci:
// function pretvoriSekunde() {
//   let sekunde = +prompt("Unesite sekunde :");
//   let sati = Math.floor(sekunde / 3600);
//   let minute = Math.floor((sekunde % 3600) / 60);
//   let preostaleSekunde = sekunde % 60;

//   return `Sata - ${sati}, minuta - ${minute}, sekundi - ${preostaleSekunde}`;
// }

// console.log(pretvoriSekunde());
//----------------------

// 1.
// a=int(input('Unesite prvu potencijalnu stranicu pravougaonika: '))
// b=int(input('Unesite drugu potencijalnu stranicu pravougaonika: '))
// c=int(input('Unesite trecu potencijalnu stranicu pravougaonika: '))
// d=int(input('Unesite cetvrtu potencijalnu stranicu pravougaonika: '))
//----------------------

// pravougaonik = () => {
//   let a = +prompt("Unesite prvu potencijalnu stranicu pravougaonika ");
//   let b = +prompt("Unesite prvu potencijalnu stranicu pravougaonika ");
//   let c = +prompt("Unesite prvu potencijalnu stranicu pravougaonika ");
//   let d = +prompt("Unesite prvu potencijalnu stranicu pravougaonika ");
//   if ((a === b && c === d) || (a === c && b === d) || (a === c && b === d)) {
//     return "Pravougaonik!";
//   } else {
//     return "Nije pravougaonik";
//   }
// };
// console.log(pravougaonik());
//----------------------

// Napraviti funkciju koja:
// Domaci:
// // b) pretvara m u km
// const mToKM = (m) => m / 1000;
// console.log(mToKM(1532));
//----------------------

// c) pretvara inch u cm
// const incToCm = (inch) => inch * 2.54;

// console.log(incToCm(10));
//----------------------

// 2. Napraviti funkciju koja prima jedan argument (broj) i vraca poruku da li je
// dati argument palindrom.

// isPalindrom = (num) => {
//   let str = "";
//   for (let i = num.length - 1; i >= 0; i--) {
//     str += num[i];
//   }
//   if (isNaN(num)) {
//     return "Niste uneli vazeci broj";
//   } else if (str === num) {
//     return "Palindrom";
//   } else {
//     return "Nije palindrom";
//   }
// };
// console.log(isPalindrom("12121"));
// console.log(isPalindrom("121211"));
//----------------------

// 3. Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifru desetice).

function trocifren(num) {
  let str = num.toString();
  let splNum = str.split("");
  let jedinica = splNum[0];
  let stotina = splNum[2];
  if (splNum.length > 3) {
    return "Niste uneli trocifren broj";
  } else {
    return jedinica + stotina;
  }
}
<<<<<<< HEAD

console.log(pretvoriSekunde());

pravougaonik = () => {
  let a = +prompt("Unesite prvu potencojalmu stranicu kvadrata ");
  let b = +prompt("Unesite prvu potencojalmu stranicu kvadrata ");
  let c = +prompt("Unesite prvu potencojalmu stranicu kvadrata ");
  let d = +prompt("Unesite prvu potencojalmu stranicu kvadrata ");

  if ((a === b && c === d) || (a === c && b === d) || (a === d && b === c)) {
    return "Pravougaonik";
  } else {
    return "Nije pravougaonik";
  }
};

console.log(trocifren(156));
console.log(trocifren(1565));

