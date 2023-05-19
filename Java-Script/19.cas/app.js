// zbirCifara = (a) => {
//   let jedinica = a % 10;
//   let desetica = Math.floor((a / 10) % 10);
//   let stotina = Math.floor(a / 100);
//   return jedinica + desetica + stotina;
// };

// console.log(zbirCifara());

// function zbirCifara(broj) {
//   const brString = broj.toString();
//   const brNiz = brString.split("");
//   let brojac = 0;
//   for (let i = 0; i < brNiz.length; i++) {
//     brojac += Number(brNiz[i]);
//   }
//   return brojac;
// }
// console.log(zbirCifara(379));

// Search metoda:

// indexOf() metoda nam vraca poziciju karaktera ili niza (niza karaktera) koji smo poslali kao argument
// Ako se taj neki argument nalazi vise puta unutar stringa dobijamo poziciju prvog pojavljivanja tog argumenta
// Ako se argument ne nadje uutar stringa rezultat ce biti -1

// const recenica = "Danas je lep dan.";
// console.log(recenica.indexOf("d"));
// console.log(recenica.indexOf("dan"));
// console.log(recenica.indexOf("nas"));

// lastInedOf() metoda nam vraca poziciju poslednjeg pojavljivanja karaktera
// (niza karaktera) koje smo poslali kao argument
// Ako se argument ne nadje unutar stringa rezultat ce biti -1

// const recenica = "danas je lep dan.";
// console.log(recenica.lastIndexOf("dan"));
// console.log(recenica.lastIndexOf("lep"));
// console.log(recenica.lastIndexOf("noc"));

// Obe metode prihvataju drugi argument, koji oznacava poziciju od koje pocinje trazenje.
// Napomena. Brojac se ne resetuje, ako krenemo od drugog arugmenta da trazimo i brojanje ide od drugog argumenta.

// console.log(recenica.indexOf("dan", 6));
// console.log(recenica.indexOf("danas", 6));

// search() metoda takodje vraca poziciju trazenog stringa,
// s tim sto kod ove metode ne mozemo poslati drugi argument
// Ako se argument ne nadje unutar stringa rezultat ce biti -1

// const recenica = "danas je lep dan.";

// console.log(recenica.search("dan"));
// console.log(recenica.search("noc"));

// startsWith() metoda proverava da li neki string pocinje argumentom kojim joj saljemo
// Funkcija vraca boolean (true/false)
// Opciono mozemo poslati drugi argument koji ce da bude index od kojeg zelimo da trazimo poziciju nekog stringa.

// const recenica = "danas je lep dan.";
// console.log(recenica.startsWith("Danas"));
// console.log(recenica.startsWith("je", 6));

// endsWith() metoda proverava da li neki string zavrsava argumentom kojim joj saljemo
// Funkcija vraca boolean (true/false)
// Opciono mozemo poslati drugi argument koji predstavlja ukupnu duzinu posmatranja datog stringa

// const recenica = "danas je lep dan.";
// console.log(recenica.endsWith("dan", 15)); // false
// console.log(recenica.endsWith("dan", 16)); // true

// myFunc = (str, start, end) => {
//   let newStr = str.slice(start, end + 1); // prvi nacin
//   let newStr2 = str.substr(start, end + 1 - pocetak); //drugi nacin
//   return newStr;
// };
// console.log(myFunc("Hello, World!", 7, 11));

myFunc = (str, start, end) => {
  let newStr = "";
  for (let i = start; i <= end; i++) {
    newStr += str[i];
  }
  return newStr;
};
console.log(myFunc("Hello, World!", 7, 11));
