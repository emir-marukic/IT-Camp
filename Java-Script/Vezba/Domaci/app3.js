// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.
// const niz = ["emir", "nedim", "selver", "ajsa", "asija", "anastasija"];

// const velikaSlova = niz.map((element) => element.toUpperCase());
// console.log(velikaSlova);
//-----------------
// 2. Napraviti novi niz koji sadrzi element na kubni stepen postojeceg niza:

// const brojevi = [1, 2, 3, 4, 5];

// const kubniStepen = brojevi.map((num) => num ** 3);

// console.log(kubniStepen);
//-----------------
// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// const brojevi = [1, 2, 3, 4, 5];

// const kvadratniKoren = brojevi.map((num) => Math.sqrt(num).toFixed(2));
// console.log(kvadratniKoren);
//-----------------

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

// const brojevi = [-3, 2, -5, 4, 0];

// const razlika = brojevi.map((num) => {
//   if (num > 0) {
//     return num ** 2;
//   } else {
//     return num * -1;
//   }
// });
// console.log(razlika);
//-----------------

// 1. Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija je duzina <= 6.

// const niz = ["emir", "nedim", "selver", "ajsa", "asija", "anastasija"];

// const lessThen6 = niz.filter((name) => name.length <= 6);

// console.log(lessThen6);
//-----------------

//  2. Napraviti novi niz koji filtrira postojeci i vraca novi
//  sa onim elementima ciji je tip "boolean".

// const niz = [
//   "emir",
//   "nedim",
//   "selver",
//   "ajsa",
//   "asija",
//   "anastasija",
//   true,
//   false,
// ];

// const isBoolean = niz.filter(
//   (element) => element === true || element === false
// );

// console.log(isBoolean);

//-----------------

// 3. Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value > 2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

// const niz = [10, 20, 3, 4, 6, 2, 12];

// const transformedArr = (arr) => {
//   const newArr = arr
//     .filter((element) => element > 2)
//     .map((value) => {
//       if (value < 8) {
//         return (value * 4) / 2;
//       } else {
//         return value * 7;
//       }
//     })
//     .filter((value) => value < 10);
//   return newArr;
// };
// console.log(transformedArr(niz));
//-----------------

// 4. Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.

// const milje = [10, 20, 3, 4, 6, 2, 12];

// const milesToKm = (arr) => {
//   const totalDistanceInKilometers = arr.map((value) =>
//     (value * 1.60934).toFixed(2)
//   );
//   return totalDistanceInKilometers;
// };
// console.log(milesToKm(milje));
//-----------------

// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// Go to the editor

// Expected Output :
// [4, 5, 8, 10, 12, 13]

// const array1 = [1, 0, 2, 3, 4];
// const array2 = [3, 5, 6, 7, 8, 13];

// const sum = (arr1, arr2) => {
//   const result = arr1.map((value, index) => value + arr2[index] || 0);
//   return result;
// };

// console.log(sum(array1, array2));

// Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.

// const int = [1, 2, 62, -65, 5, 12, -62, 4, 5, 36, 24];

// const incOrDec = (arr) => {
//   const sum = arr.reduce((prev, curr) => prev + curr);
//   if (sum >= 0) {
//     return `Integers are positive ${sum}`;
//   } else {
//     return `Integers are negative ${sum}`;
//   }
// };
// console.log(incOrDec(int));

//  Write a JavaScript program to find the longest string in a given array.

// const arr = ["Emir", "Emina", "Lahina", "Mirsada", "Ramiz"];

// const longestString = (arr) => {
//   let longestStr = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longestStr.length) {
//       longestStr = arr[i];
//     } else if (longestStr.length === arr[i].length) {
//       return (longestStr = `${longestStr}  ${arr[i]}`);
//     }
//   }
//   return longestStr;
// };
// console.log(longestString(arr));

// const int = [1, 2, 62, -65, 5, 12, -62, 4, 5, 36, 24];

// // const even = int.filter((num) => num % 2 === 0);
// // console.log(even);

// const prvaPolovina = int.filter((element, index) => index.length / 2);
// console.log(prvaPolovina);
//-----------------

// 1. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = (arr) => {
//   const even = arr
//     .filter((element) => element % 2 === 0)
//     .map((element) => element * 2)
//     .reduce((prev, curr) => prev + curr);
//   return even;
// };

// console.log(even(nums));

// 2. Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// const swapChar = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let lowerCase = str[i].toLowerCase();
//     let upperCase = str[i].toUpperCase();

//     if (str[i] === lowerCase) {
//       newStr += upperCase;
//     } else {
//       newStr += lowerCase;
//     }
//   }
//   return newStr;
// };
// console.log(swapChar("Emir"));

// 1. Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se jagoda nalazi unutar tog niza. Ako se jagoda ne nalazi unutar niza, funkcija neka vrati taj niz poredjan abecedno, s tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalazi.

function ifStrawberry(str) {
  let niz = str.split(" ");
  let pozicija = niz.indexOf("jagoda");

  if (pozicija !== -1) {
    return `Jagoda se nalazi na poziciji ${pozicija}.`;
  } else {
    niz.sort();
    niz.unshift(10);
    niz.push(100);
    return niz;
  }
}

//---------------

// 2. We have the following arrays : Go to the editor

// const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const order = ["st", "nd", "rd", "th"];

// const colors = (arr) => {
//   const newColorOrder = arr.map((element, index) => {
//     const suffix = order[index] || order[3];
//     return `${index + 1}${suffix} choice is ${element}.`;
//   });
//   return newColorOrder;
// };
// console.log(colors(color));

// Domaci

// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).

// const student = {
//   ime: "Emir",
//   prezime: "Marukic",
//   brIndeksa: 28,
//   ocene: [1, 5, 10, 6, 2, 4, 3, 8, 6, 1],
//   prosek: function () {
//     const ocene = this.ocene.reduce((prev, curr) => prev + curr, 0);
//     const prosek = ocene / this.ocene.length;
//     return prosek;
//   },
// };
// console.log(student.prosek());

// Domaci:
// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

// const person = {
//   firstName: "Emir",
//   lastName: "Marukic",
//   language: "",
//   setLanguage: function (language) {
//     this.language = language;
//   },
//   setNickName: function () {
//     return `${this.firstName.slice(0, 2)}${this.lastName
//       .slice(0, 2)
//       .toLowerCase()}`;
//   },
// };

// person.setLanguage("English");
// // 1.
// person.removeLenguage = function (lang) {
//   //   const position = this.lang.indexOf(lang);
//   //   if (position !== -1) {
//   //     this.lang.splice(position, 1);
//   //   }
//   // 2.

//   const newArr = this.lenguage.filter((language) => language !== lang);
//   this.language = newArr;
// };

// person;
// this.removeLenguage();
// console.log(person);
// console.log(person.setNickName());
//----------------

// const automobil = {
//   marka: "Audi",
//   model: "Q7",
//   boja: "Bela",
//   pogon: "quattro",
//   menjac: "Automatik",
//   km: 240000,
//   vlasnik: ["062321552", "063930630"],
//   garaza: {
//     parking: "JKP Servis",
//     vikend: "od 17h free",
//     satnaKarta: "50",
//     dnevnaKarta: "200",
//     mesecnaKarta: "2000",
//     platiZa: function (datum1, datum2) {
//       const d1 = new Date(datum1);
//       const d2 = new Date(datum2);
//       const razlika = d2.getTime() - d1.getTime();
//       const razlikaDana = razlika / (1000 * 3600 * 24);
//       // console.log("brdana", razlikaDana);
//       return razlikaDana * this.dnevnaKarta;
//     },
//   },
// };

// console.log(automobil.garaza.platiZa(14, 22));

// //---------------------------

// //  2. Write a JavaScript program to sort an array of JavaScript objects:

// const library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     libraryID: 1254,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     libraryID: 4264,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];
<<<<<<< HEAD

// const sorted = library.sort((a, b) => a.title.localeCompare(b.title));
// console.log(sorted);

//-----------------

// Domaci:
// 1. Write a JavaScript function to retrieve all the values of an object's properties.

// retrieveAllValues = (arr) => {
//   const allValues = arr.map((values) => values);
//   return allValues;
// };

// console.log(retrieveAllValues(library));

// 2. Napraviti niz objekata, gde ce svaki objekat sadrzati:
// ime, prezime, starost, bojaOciju, bojaKose, polozenC.
//  Napraviti funkciju koja pravi novi niz koji ce sadrzati one elemente cija boja ociju je braon i koji nisu polozili C.

// const arr = [
//   {
//     ime: "Anastasija",
//     prezime: "Milovic",
//     starost: 17,
//     bojaOciju: "braon",
//     polozenC: false,
//   },
//   {
//     ime: "Merjem",
//     prezime: "Sinanovic",
//     starost: 17,
//     bojaOciju: "plava",
//     polozenC: true,
//   },
//   {
//     ime: "Emir",
//     prezime: "Marukic",
//     starost: 22,
//     bojaOciju: "braon",
//     polozenC: true,
//   },
//   {
//     ime: "Ajsa",
//     prezime: "Medjedovic",
//     starost: 18,
//     bojaOciju: "braon",
//     polozenC: false,
//   },
//   {
//     ime: "Ajla",
//     prezime: "Lomnicanin",
//     starost: 22,
//     bojaOciju: "braon",
//     polozenC: true,
//   },
//   {
//     ime: "Asija",
//     prezime: "Sijaric",
//     starost: 19,
//     bojaOciju: "plava",
//     polozenC: false,
//   },
// ];

// 2. Napraviti niz objekata, gde ce svaki objekat sadrzati:
// ime, prezime, starost, bojaOciju, bojaKose, polozenC.
//  Napraviti funkciju koja pravi novi niz koji ce sadrzati one elemente cija boja ociju je braon i koji nisu polozili C.

// const nisuPoloziliC = (arr) => {
//   const poloziliC = arr.filter(
//     (el) => el.bojaOciju === "braon" && el.polozenC === false
//   );
//   return poloziliC;
// };
// console.log(nisuPoloziliC(arr));
=======

// const sorted = library.sort((a, b) => a.title.localeCompare(b.title));
// console.log(sorted);

// 2. Nacin

// const sortByTitle = (arr) => {
//   const titleArr = arr.map((el) => el.title);
//   titleArr.sort();

//   const library2 = [];
//   titleArr.forEach((title) => {
//     const element = arr.find((obj) => obj.title === title);
//     library2.push(element);
//   });
// };

const movies = [
  { title: "Inception", rating: 8, budget: "230M" },
  { title: "Interstelar", rating: 5, budget: "200M" },
  { title: "Godfather", rating: 9, budget: "280M" },
  { title: "Home Alone", rating: 4, budget: "300M" },
  { title: "Bad boys", rating: 8, budget: "180M" },
];

// 1. Nacin

// const movies2 = movies.map((movie) => {
//   return {
//     title: movie.title,
//     budget: movie.budget,
//   };
// });
// console.log(movies2);

// 2.
const movies2 = movies.map((movie) => {
  return {
    title: movie.title,
    budget: movie.budget,
  };
});
console.log(movies2);
>>>>>>> 4816993bfdd0c1439671c252bf288a2449aaef8f
