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
// b) pretvara m u km
// const mToKM = (m) => m / 1000;
// console.log(mToKM(1532));
// ----------------------

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

// function trocifren(num) {
//   let str = num.toString();
//   let splNum = str.split("");
//   let jedinica = splNum[0];
//   let stotina = splNum[2];
//   if (splNum.length > 3) {
//     return "Niste uneli trocifren broj";
//   } else {
//     return jedinica + stotina;
//   }
// }
// console.log(trocifren(156));
// console.log(trocifren(1565));
//--------------------------
// const getTime = () => {
//   const date = new Date();
//   const daysOfWeek = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   const currentDay = daysOfWeek[date.getDay() - 1];
//   const currentHour = date.getHours();
//   const currentMinutes = date.getMinutes();
//   const currentSeconds = date.getSeconds();
//   const meridiem = currentHour >= 12 ? "PM" : "AM";

//   const formatedTime = `${currentHour} ${meridiem} : ${
//     currentMinutes < 10 ? "0" + currentMinutes : currentMinutes
//   } M : ${currentSeconds < 10 ? "0" + currentSeconds : currentSeconds} S`;

//   return `Today is : ${currentDay} \nCurrent time is : ${formatedTime}`;
// };

// console.log(getTime());
//---------------------
// Domaci:
// 1. Write a JavaScript function to check whether an `input` is an array or not.

// const ifInput = (arr) => Array.isArray(arr);
// console.log(ifInput([1, 2, 3]));
// console.log(ifInput("Cartoon"));
// console.log(ifInput(1, 2, 3));
// ---------------------
// 2. Write a JavaScript function to clone an array.

// const cloneArr = (arr) => {
//   let newArr = [];
//   if (Array.isArray(arr)) {
//     for (let i = 0; i < arr.length; i++) {
//       newArr += arr[i];
//     }
//   } else {
//     return "Its not array";
//   }
//   return newArr;
// };
// console.log(cloneArr(1, 2, 3));
// console.log(cloneArr([1, 2, 3]));
// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

// function firstElement(arr, n = 1) {
//   if (Array.isArray(arr)) {
//     return arr.slice(0, n);
//   } else {
//     return "It isnt array";
//   }
// }
// console.log(firstElement([1, 2, 3, 4]));

// Iz datog niza ispitati koliko elemenata je tipa string,
// koliko tipa number,
// koliko tipa boolean,
// koliko elemenata je zapravo niz?
// ---------------------

// let niz = [1, 2, 3, true, false, true, [1, 2, 3, 4], "string"];

// const howMuchElement = (arr) => {
//   let countNum = 0;
//   let countBool = 0;
//   let countArr = 0;
//   let countStr = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       countNum++;
//     } else if (typeof arr[i] === "boolean") {
//       countBool++;
//     } else if (typeof arr[i] === "string") {
//       countStr++;
//     } else if (Array.isArray(arr[i])) {
//       countArr++;
//     }
//   }
//   return `In our array we have:\n Number: ${countNum}\n Boolean: ${countBool}\n Array: ${countArr}\n String: ${countStr}`;
// };

// console.log(howMuchElement(niz));
// ---------------------
//  1. Napraviti funkciju koja vraca najveci element nekog niza.

// let niz = [1, 4, 10, 6, 7, 2];
// const arrHighest = (arr) => {
//   let highest = 0;
//   for (let nums of arr) {
//     if (nums > highest) {
//       highest = nums;
//     }
//   }
//   return highest;
// };
// console.log(arrHighest(niz));
// ---------------------

// 2. Napraviti funkciju koja vraca najmanji element nekog niza.

// let niz = [4, 4, 10, 6, 7, 200];
// const arrHighest = (arr) => {
//   let highest = Number.MAX_VALUE;
//   for (let nums of arr) {
//     if (nums < highest) {
//       highest = nums;
//     }
//   }
//   return highest;
// };
// console.log(arrHighest(niz));
// ---------------------

// 3. Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Dzevdet, Marija, Melida i Tarik ne smeju naci.

// const grupa = [
//   "Emir",
//   "Selver",
//   "Nedim",
//   "Dzevdet",
//   "Tarik",
//   "Alen",
//   "Rifat",
//   "Marija",
//   "Melida",
//   "Asija",
//   "Dzana",
//   "Ajsa",
//   "Anastasija",
//   "Merjem",
// ];

// const muskarci = grupa.slice(0, 3);
// console.log(muskarci);
// const devojke = grupa.slice(9, grupa.length);
// console.log(devojke);
// ---------------------

//4. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na neparnim mestima unutar originalnog niza.

// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// const neparni = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if ([i - 1] % 2 !== 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };
// console.log(neparni(niz));

// const brojevi = [1, 3, 5, 7, -2];
// brojevi.sort((a, b) => a - b);
// console.log(brojevi);
// const najmanji = brojevi[0];
// const najveci = brojevi.length - 1;
// console.log(najmanji);
// console.log(najveci);

// ---------------------

// Domaci:
// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]
// ---------------------
// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const even = (arr) => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// console.log(even(niz));
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)

// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// function evenNum(arr) {

//   const newArr = [];
//   for (let item of arr) {
//     if (item % 2 === 0) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }
// console.log(evenNum(niz));
// ---------------------
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)

// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// function evenNum(arr) {

//   const newArr = [];
//   for (let item of arr) {
//     if (item % 2 !== 0) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }
// console.log(evenNum(niz));
// ---------------------
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

// const niz = [1, -1, 2, -2, 3, -4, 0];

// const positiveNums = (arr) => {
//   const newArr = [];
//   for (let positive of arr) {
//     if (positive > 0) {
//       newArr.push(positive);
//     } else {
//       continue;

// 5. Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju.
// const niz = [1, -1, 2, -2, 3, -4, 0];
// const sort = (arr) => {
//   const minToMax = [...arr];
//   const maxToMin = [...arr];
//   minToMax.sort((a, b) => a - b);
//   maxToMin.sort((a, b) => b - a);

//   return `This array is going minimum to maximum : ${minToMax} \nThis array is going maximum to minimum : ${maxToMin}`;
// };
// console.log(sort(niz));
//-----------

// 6. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.

// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const star = (arr) => arr.join("*");
// console.log(star(niz));
//-----------

// const niz = [2, 5, 100];
// const nizPlus2 = niz.map((arr) => arr + arr);
// console.log(nizPlus2);
//-----------

// 2) Take an array of numbers and make them strings

// const arr = [1, 2, 3, 4];

// toString = (callback) => {
//   return callback.map(String);
// };
// console.log(toString(arr));
//-----------

// 3) Capitalize each of an array of names

// const capitalizeName = (arr) =>
//   arr.map((arr) => {
//     const rest = arr.slice(1);
//     if (arr[0]) {
//       return arr[0].toUpperCase() + rest.toLowerCase();
//     }
//   });

// const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

// console.log(capitalizeName(names));

// Write a JavaScript program to check whether a given string represents a correct sentence or not.
//  A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)

// const isItCorrect = (str) => {
//   const first = str[0];
//   const last = str[str.length - 1];
//   if (first === first.toUpperCase() && last === ".") {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isItCorrect("Dobar dan."));

// const broj = [];
// function sum(numbers) {
//   const sum = numbers.reduce((prev, curr) => prev + curr, +0);
//   return sum;
// }
// console.log(sum(broj));

// const stringToNumber = function (str) {
//   const str = +str;
//   return str;
// };

// Consider an array/list of sheep where some sheep may
// be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// function countSheeps(arrayOfSheep) {
//   const count = arrayOfSheep.filter((element) => element === true).length;
//   return count;
// }
// const sheeps = [[true, false, true, true, false, true]];

// console.log(countSheeps(sheeps));

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// const junk = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

// function findNeedle(haystack) {
//   const index = haystack.findIndex((element) => element === "needle");
//   if (index !== -1) {
//     return `Found needle at ${index}`;
//   } else {
//     `There is no such item as needle`;
//   }

//   return needle;
// }

// console.log(findNeedle(junk));

// function digitize(n) {
//   const toStr = n.toString().split("").map(Number);
//   const reverse = toStr.reverse();
//   return reverse;
// }

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//      return Math.min(...args);
//   }
// }

// function getGrade(s1, s2, s3) {
//   const student = s1 + s2 + s3;
//   const avarage = student / 3;

//   if (avarage >= 90 && avarage < 100) {
//     return "A";
//   } else if (avarage >= 80 && avarage < 90) {
//     return "B";
//   } else if (avarage >= 70 && avarage < 80) {
//     return "C";
//   } else if (avarage >= 60 && avarage < 70) {
//     return "D";
//   } else if (avarage >= 0 && avarage < 60) {
//     return "F";
//   }
// }
// console.log(getGrade(65, 70, 59));

// function sumArray(array) {
//   if (array === null) {
//     return 0;
//   } else if (array.length < 2) {
//     return 0;
//   } else {
//     array = array.sort(function (a, b) {
//       return a - b;
//     });
//     let total = 0;
//     for (let i = 1; i < array.length - 1; i++) {
//       total += array[i];
//     }
//     return total;
//   }
// }
