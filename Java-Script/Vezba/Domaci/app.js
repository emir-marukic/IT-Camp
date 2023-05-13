// Domaci:
// 1.
// Ispisati sve brojeve od 1 do 10 koji su parni

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

// 1.
// let i = 1;
// while (i < 11) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }
//-------------------------------

// 2.

// let n = +prompt("Unesite korektan broj ");
// let k = +prompt("Unesite korektan broj ");

// if (isNaN(n) || isNaN(k)) {
//   console.log("Niste uneli korektan broj");
// } else if (n <= k) {
//   while (n <= k) {
//     console.log(n);
//     n++;
//   }
// } else if (k < n) {
//   while (k <= n) {
//     console.log(k);
//     k++;
//   }
// } else {
//   console.log("Uneli ste iste brojeve");
// }

//-------------------------------
// Domaci zadaci:

// 1.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25.

// 2.  Задатак: Фудбалски терен
//     Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
//     од линије терена r. Напиши програм који одређује дужину ограде.
//     Улаз: У три реда стандардног улаза налазе се три цела броја:
//     • d - дужина терена у метрима (90 ≤ d ≤ 120)
//     • s - ширина терена у метрима (45 ≤ s ≤ 90)
//     • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)
//-------------------------------

// let duzina = +prompt("Unesite duzinu ");
// let sirina = +prompt("Unesite sirinu ");
// let rastojanje = +prompt("Unesite rastojanje ");
// const duzinaOgrade = 2 * duzina + 2 * sirina + 8 * rastojanje;

// if (isNaN(duzina) || isNaN(sirina) || isNaN(rastojanje)) {
//   console.log("Niste uneli dimenzije");
// } else if (duzina <= 89 || duzina >= 120) {
//   console.log("Niste uneli korektne dimenzije za duzinu");
// } else if (sirina <= 44 || sirina >= 90) {
//   console.log("Niste uneli korektne dimenzije za sirinu");
// } else if (rastojanje <= 2 || rastojanje >= 10) {
//   console.log("Niste uneli korektne dimenzije za rastojanje");
// } else {
//   console.log("Treba nam" + duzinaOgrade + "metara za ogradjivanje terena.");
// }
// //-------------------------------
// let i = +prompt("Unesite broj u intervalu 12 - 16");
// if (isNaN(i)) {
//   console.log("Niste uneli korektan broj");
// } else if (i >= 12 && i <= 16) {
//   for (i; i >= 1; i--) {
//     console.log(i * i - 25);
//   }
// } else {
//   console.log("Morate uneti broj u intervalu od 12 - 16");
// }
// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.
//-------------------------------
// const recenica = prompt("Unesite neku rec");
// let novaRecenica = "";
// let length = recenica.length;
// for (let i = 0; i < length; i++) {
//   if (i === length - 1) {
//     novaRecenica += recenica[i].toUpperCase();
//   } else if (recenica[i + 1] === " ") {
//     novaRecenica += recenica[i].toUpperCase();
//   } else {
//     novaRecenica += recenica[i];
//   }
// }
// console.log(novaRecenica);
//-------------------------------
// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5
// -------------------------------
// let recenica2 = "Mama ima momu";
// let brojac = 0;
// for (let i = 0; i < recenica2.length; i++) {
//   if (recenica2[i] === "M" || recenica2[i] === "m") {
//     brojac++;
//   }
// }
// console.log(brojac);
//-------------------------------
// Domaci zadaci:
//-------------------------------

//  1. Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

// let recenica = prompt("Unesite recenicu :");
// let novaRecenica = "";
// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === " ") {
//     continue;
//   } else {
//     novaRecenica += recenica[i];
//   }
// }
// console.log(novaRecenica);
//-------------------------------

// 2. Napraviti novu recenicu gde ce umesto slova "a" pisati "t".
// Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

// let recenica = prompt("Unesite recenicu :");
// let novaRecenica = "";

// for (let i = 0; i < recenica.length; i++) {
//   if (
//     (recenica[i] === "a" && recenica[i + 1] === "n") ||
//     (recenica[i] === "A" && recenica[i + 1] === "N")
//   ) {
//     novaRecenica += "d";
//   } else if (recenica[i] === "a" || recenica[i] === "A") {
//     novaRecenica += "t";
//   } else {
//     novaRecenica += recenica[i];
//   }
// }
// console.log(novaRecenica);
//  3. Na osnovu date recenice napraviti i ispisati novu recenicu tako da:
//-------------------------------
// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	ostali karakteri se ne menjaju.

// const recenica = prompt("Unesite recenicu :");
// let novaRecenica = "";
// for (let i = 0; i < recenica.length; i++) {
//   if (
//     recenica[i] === "a" ||
//     recenica[i] === "e" ||
//     recenica[i] === "i" ||
//     recenica[i] === "o" ||
//     recenica[i] === "u"
//   ) {
//     novaRecenica += recenica[i].toUpperCase();
//   } else {
//     novaRecenica += recenica[i];
//   }
// }
// console.log(novaRecenica);
// Domaci zadaci:
//-------------------------------
// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument, funkcija ga racuna kao 0.
//-------------------------------
// function kvadrat(num1 = 0, num2 = 0) {
//   return num1 * num1 + num2 * num2;
// }
// console.log(kvadrat(4, 5));
//-------------------------------
// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.
// function aritmetickaSredina(num1 = 1, num2 = 1, num3 = 1) {
//   //   return (num1 + num2 + num3) % 3 === 0;
//   return (num1 + num2 + num3) / 3;
// }
// console.log(aritmetickaSredina(4, 8, 12));
//-------------------------------
// 3. Napraviti funkciju povrsina koja uzima dve vrednosti.
//-------------------------------
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.
//-------------------------------
// function broj(num1 = 0, num2 = 0) {
//   if (isNaN(num1) || isNaN(num2)) {
//     return "Morate uneti tacne vrednosti";
//   } else if (num1 <= 0 || num2 <= 0) {
//     return "Ne mozete uneti negativne vrednosti";
//   } else if (num1 === num2) {
//     return "Povrsina kvadrata je " + num1 * num2;
//   } else {
//     return "Povrsina pravougaonika je " + num1 * num2;
//   }
// }
// console.log(broj(2, 3));
//-------------------------------
// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet.
// Zadatak: Zamena reči
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti. Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati rezultujući string. Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da vrati "Danas je # dan.".
// Zadatak: Brojanje karaktera
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu. Ignoriši prazne prostore. Na primer, za ulazni string "Hello, World!", funkcija treba da vrati broj 12.

myFunc = (recenica) => {
  let malaSlova = recenica.toLowerCase();
  let velikaSlova = recenica.toUpperCase();
  let zamenaReci = recenica.replace(/skola/g, "fakultet");
  let polaVelikaPolaMala = "";
  for (let i = 0; i < recenica.length; i++) {
    if (i < recenica.length / 2) {
      return (polaVelikaPolaMala += recenica[i].toUpperCase());
    } else {
      return (polaVelikaPolaMala += recenica[i].toLowerCase());
    }
  }
  let novaRecenica =
    velikaSlova + " " + malaSlova + " " + polaVelikaPolaMala + " " + zamenaReci;
  return novaRecenica;
};

console.log(myFunc("na vrh brda vrba mrda skola"));
