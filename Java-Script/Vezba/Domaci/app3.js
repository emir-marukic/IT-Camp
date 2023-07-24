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

const person = {
  firstName: "Emir",
  lastName: "Marukic",
  language: "",
  setLanguage: function (language) {
    this.language = language;
  },
  setNickName: function () {
    return `${this.firstName.slice(0, 2)}${this.lastName
      .slice(0, 2)
      .toLowerCase()}`;
  },
};

person.setLanguage("English");
// 1.
person.removeLenguage = function (lang) {
  //   const position = this.lang.indexOf(lang);
  //   if (position !== -1) {
  //     this.lang.splice(position, 1);
  //   }
  // 2.

  const newArr = this.lenguage.filter((language) => language !== lang);
  this.language = newArr;
};

person;
this.removeLenguage();
console.log(person);
console.log(person.setNickName());
