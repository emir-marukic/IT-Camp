// const nearestTo100 = (num1, num2) => {
//   let firstCounter = 0;
//   let secondCounter = 0;
//   if (num1 < 100) {
//     for (let i = num1; i < 100; i++) {
//       firstCounter++;
//     }
//   } else {
//     for (let i = num1; i > 100; i--) {
//       firstCounter++;
//     }
//   }
//   if (num2 < 100) {
//     for (let i = num2; i < 100; i++) {
//       secondCounter++;
//     }
//   } else {
//     for (let i = num2; i > 100; i--) {
//       secondCounter++;
//     }
//   }
//   if (firstCounter > secondCounter) {
//     return `${num2} is higher then ${num1}`;
//   } else if (firstCounter === secondCounter) {
//     return `Is equal to 100`;
//   } else {
//     return `${num1} is higher then ${num2}`;
//   }
// };

// console.log(nearestTo100(101, 101));

// Math methods

// Sintaksa za bilo koju matematicku metodu je sledeca:

// Math.method(number)

// Number to Integer

// Postoje  razlicite metode za dobijanje celog broja slanjem broja sa decimalnim zapisom :

// Math.round(x) - vraca blizi ceo broj broju x.

// console.log(Math.round(2.52131));

// Math.ceil(x) - vraca sledeci ceo broj broja x.

// Math.floor(x) - vraca prethodni ceo broj broja x

// console.log(Math.floor(3.9324));

// Math.trunc(x) - vraca ceo broj odstranjujuci decimalni ostatak

// console.log(Math.trunc(1.23123123));

// Math.sign(x) - metoda vraca:
// 1 ako je x positivan broj
// 0 ako je x nula
// -1 ako je x negativan broj

//Math.pow(x,y) - vraca broj x stepenovan brojem y

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(6, 2)); // 36

// Math.sqrt(x) - vraca kvadratni koren broja x

// console.log(Math.sqrt(9));
// console.log(Math.sqrt(25));

// Math.abs(x) vraca apsolutnu vrednost x.

// console.log(Math.abs(124));
// console.log(Math.abs(-124));

// Math.sin() vraca sinus (vrednost izmedju -1 i 1) nekog ugla x (datog u radijanima).

// console.log(Math.sin(Math.PI));

// Math.cos() vraca kosinus (vrednost izmedju -1 i 1) nekog ugla x (datog u radijanima).

// console.log(Math.cos(Math.PI));

nearest100 = (num1, num2) => {
  let n1 = Math.abs(num1 - 100);
  let n2 = Math.abs(num2 - 100);
  if (isNaN(num1) || isNaN(num2)) {
    return "Niste uneli tacan broj";
  } else if (n1 > n2) {
    return "Drugi je veci";
  } else if (n1 === n2) {
    return "Ista udaljenost";
  } else {
    return "Prvi je veci";
  }
};
console.log(nearest100(95, 105));
