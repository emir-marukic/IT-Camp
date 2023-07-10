// 3. Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value > 2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

// const third = (arr) => {
//   const arr2 = arr
//     .filter((value) => typeof value === "number" && value >= 2)
//     .map((value) => {
//       if (value < 8) {
//         return value * 2;
//       } else {
//         return value * 7;
//       }
//     })
//     .filter((value) => value < 10);
//   return arr2;
// };
// console.log(third([1, 2, 3, 5, 7, 9, 11]));

//----------------------
// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of
// each individual index value from the given arrays.

// const array1 = [1, 0, 2, 3, 4];
// const array2 = [3, 5, 6, 7, 8, 13];

// const fifth = (arr1, arr2) => {
//   const longerArr = arr1.length > arr2.length ? arr1 : arr2;
//   const shorterArr = arr2.length >= arr1.length ? arr1 : arr2;
//   const arr3 = longerArr.map(
//     (value, index) => value + (shorterArr[index] || 0)
//   );
//   return arr3;
// };
// console.log(fifth(array1, array2));
// console.log(fifth(array2, array1));

// const parni = (arr) => {
//   const filteredSum = arr
//     .filter((value) => value % 2 === 0)
//     .reduce((prev, curr) => prev + curr);
//   return filteredSum;
// };
// console.log(parni([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// const parni2 = (arr) => {
//   const parni = arr % 2 === 0 ? arr : 0;
//   const sum = parni.reduce((prev, curr) => prev + curr);
//   return sum;
// };
// console.log(parni2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const mostFrequent = (arr) => {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = i; i < arrLength; j++) {}
  }
  console.log(arrLength[j]);
};
console.log(mostFrequent("a", "a", 2, 2, "c", "c"));
