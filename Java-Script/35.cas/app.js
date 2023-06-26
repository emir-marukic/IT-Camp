// let niz = [10, 20, 2, 3, 100, 2];
// let najveci = (arr) => {
//   let highest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > highest) {
//       highest = arr[i];
//     }
//   }
//   return highest;
// };
// console.log(najveci(niz));

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

// const novaGrupa = [];
// for (let person of grupa) {
//   if (
//     person === "Dzevdet" ||
//     person === "Tarik" ||
//     person === "Melida" ||
//     person === "Marija"
//   ) {
//     continue;
//   } else {
//     novaGrupa.push(person);
//   }
// }
// // console.log(novaGrupa);
// const muskarci = [];
// const devojke = [];

// for (let person of novaGrupa) {
//   if (person[person.length - 1] === "a" || person === "Merjem") {
//     devojke.push(person);
//   } else {
//     muskarci.push(person);
//   }
// }
// console.log(muskarci);
// console.log(devojke);

// Jos jedan nacin dobijanja najveceg/najmanjeg elementa iz niza.

// Math.max()
// Math.min()

// let minimum = Math.min.apply(null, [1, 3, 5, 7, -2]);
// console.log(minimum);

// let maximum = Math.max.apply(null, [1, 3, 5, 7, -2]);
// console.log(maximum);

// const fruits = ["strawberry", "mango", "banana", "apple", "mango"];

// indexOf() metoda trazi u nizu odredjeni argument i vraca poziciju istog.
// indexOf() metoda vraca -1 za argument koji se ne nalazi u nizu.
// Ako se neki argument nalazi vise puta u nizu, dobijamo index prvog pojavljanja

// console.log(fruits.indexOf("apple"));
// console.log(fruits.indexOf("pineapple"));

// lastIndexOf() metoda trazi u nizu odredjeni argument i vraca poziciju poslednjeg pojavljivanja tog argumenta.
// lastIndexOf() metoda vraca -1 za argument koji se ne nalazi u nizu.

// console.log(fruits.lastIndexOf("mango"));
// console.log(fruits.lastIndexOf("pineapple"));

// includes() metoda vraca boolean u zavisnosti od toga da li se argument nalazi u nizu.

// console.log(fruits.includes("mango"));
// console.log(fruits.includes("pineapple"));

// Array.from() vraca niz od poslatog argumenta (argument moze biti bilo koji objekat sa length svojstvom)

// const arr = Array.from("ABCDEF");
// console.log(console.log(arr));

const isEven = (str) => {
  let str1 = str.toString();
  let newStr1 = "";
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] % 2 === 0 && str1[i + 1] % 2 === 0) {
      newStr1 += str1[i] + "-";
    } else {
      newStr1 += str1[i];
    }
  }
  return newStr1;
};
console.log(isEven("245646"));
