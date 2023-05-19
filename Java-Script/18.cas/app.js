// Za ekstraktovanje (uzimanje jednog karaktera) mozemo iskoristiti 1 od 3 nacina

// charAt(index) metoda uzima jedan argument () taj argument predstavlja index i vraca nam karakter
//koji zauzima tu poziciju

// charCodeAt(index) metoda uzima jedan argument () taj argument predstavlja kod i vraca nam karakter
//koji zauzima tu poziciju

// string[index] nacin pristupa nekom karakteru iz stringa.

// let recenica = "Recenica za uzimanje karaktera.";

// console.log(recenica.charAt(4));
// console.log(recenica.charCodeAt(4));
// console.log(recenica[4]);

// console.log(recenica.charAt(100)); - rezultat karaktera koji ne postoji daje ""
// console.log(recenica[100]); - rezultat karaktera koji ne postoji daje undefined

// Za ekstraktovanje (uzimanje nekoliko karaktera) mozemo iskoristiti 1 od 3 metode:

// slice() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argument je
// pocetni index za duzimanje isecka, drugi argument je index do kojeg idemo.
// Drugi argument se ne ukljucuje!
// Drugi argument nije obavezan. Ako ga izostavimo, dobicemo string od prvog argumenta do kraja
// slice() metoda omogucava koriscenje negativnih indeksa.

// let recenica = "Recenica za uzimanje karaktera.";

// console.log(recenica.slice(12, 20));
// console.log(recenica.slice(12));
// console.log(recenica.slice(-10, -1));

// substring() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argument je
// pocetni index za duzimanje isecka, drugi argument je index do kojeg idemo. Ova metoda ne podrzava negativne indexe.

// console.log(recenica.substring(12, 20));
// console.log(recenica.substring(12));

//substr() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argument je
// pocetni index za duzimanje isecka, drugi argument je duzina tog isecka.

// let recenica = "Recenica za uzimanje karaktera.";

// console.log(recenica.substr(3, 10));

// split() metoda nam sluzi da neki string pretvorimo u niz od jednog ili vise elemenata.
// Ako split metodu primenimo na neki string bez da joj posaljemo argument, dobicemo niz od samo jednog elementa
// (cela recenica je taj element)
let recenica = "Recenica za uzimanje karaktera.";

// console.log(recenica.split());

// Slanje nekog argumenta znaci da taj argumnt predstavlja karakter gde ce se deliti elementi niza.

// console.log(recenica.split(" ")); - svaka rec predstavlja element niz

// console.log(recenica.split("")); - svaki karakter predsavlja jedan element niza
// console.log(recenica.split("*")); // dobili smo niz od jenog elementa (cela recenica)

/* Zadatak: Izracunava duzine reci 
   Napisi funkciju koja prima jean string kao argument i vraca broj krakatera u najduzoj reci u tom stringu.
   Pretpostavi da su reci odvojene samo jednim razmakom.Na primer za ulazni string "Danas je divan dan." funkcija treba da vrati broj 5.
 */

// myFunc = (str) => {
//   const nizReci = str.split(" ");
//   let najduzaRec = nizReci[0];
//   for (let i = 0; i < nizReci.length; i++) {
//     if (nizReci[i].length > najduzaRec.length) {
//       najduzaRec = nizReci[i];
//     }
//   }
//   return najduzaRec;
// };
// console.log(myFunc("recenica za uzimanje karaktera"));
