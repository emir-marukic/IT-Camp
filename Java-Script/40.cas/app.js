// const numbers = [1, 2, 3, 4];

// const sumEvenDouble = (arr) => {
//   return arr
//     .filter((num) => num % 2 === 0)
//     .map((value) => value * 2)
//     .reduce((prev, curr) => prev + curr);
// };

// console.log(sumEvenDouble(numbers));

// const fibonacciArr = () => {
//   let arr = [1, 1];
//   let i = 2;
//   while (arr[i - 2] + arr[i - 1] <= 4000000) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//     i++;
//   }
//   const even = arr
//     .filter((value) => value % 2 === 0)
//     .reduce((prev, curr) => prev + curr);
//   return even;
// };
// console.log(fibonacciArr());

// const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9];

// const mostFreq = (arr) => {
//   let count = 0;
//   let highest;
//   let mostFreq = 1;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > mostFreq) {
//       mostFreq = count;
//       highest = arr[i];
//     }
//   }
//   count = 0;
//   return highest;
// };
// console.log(mostFreq(arr1));

// every() Array iterator metoda nam sluzi za proveri da li je svaki element niza prosao test.
// Ova metoda vraca boolean.

const godine = [17, 22, 18, 22, 19];

// const isAdult = godine.every((element) => element >= 18);
// console.log(isAdult);

// some() metoda proverava da li je bar jedan element niza prosao test.
// Metoda vraca boolean true/false

const isAnyAdult = godine.some((student) => student > 17);
console.log(isAnyAdult);
