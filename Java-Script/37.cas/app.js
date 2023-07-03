// map() metoda kreira novi niz, na nacin da se callback funkcija (argument map metode) izvrsava za svaki element.
// Duzina novodobijenog niza je jednaka duzini orginalnog elementa.
// map() metoda ne menja orginalni niz, vec pravi novi.

// const brojevi = [2, 4, 6, 8, 10, 12];

// const brojevi2 = brojevi.map((element) => element);

// console.log(brojevi2);

// Napraviti brojevi3 koji ce sadrzati kvadrate elemenata niza brojevi.

// const brojevi3 = brojevi.map((element) => element * element);

// console.log(brojevi3);

// const studenti = [
//   "asija",
//   "ajla",
//   "selver",
//   "nedim",
//   "ajsa",
//   "emir",
//   "meryem",
//   "anastasija",
// ];

// const velikoSlovo = studenti.map(
//   (student) => student[0].toUpperCase() + student.slice(1)
// );

// console.log(velikoSlovo);

// const student3 = studenti.map((element, pozicija) => {
//   if (pozicija < 3) {
//     return element;
//   } else {
//     return "";
//   }
// });
// console.log(student3);
// Ako zelimo da iskljucimo neke elemente onda ce se na tim pozicijama dobiti undefined.

const brojevi = [2, 4, 6, 8, 10, 12];

// Napraviti novi niz mapirajuci niz brojevi, koji ce imati sve elemente iste, dok elementi na poziciji 0,3,5 ce biti kvadratirani

// const kvadBrojevi = brojevi.map((element, pozicija) => {
//   if (pozicija === 0 || pozicija === 3 || pozicija === 5) {
//     return element * element;
//   } else {
//     return element;
//   }
// });
// console.log(kvadBrojevi);

const num = [1, 4, 5, 7, 17, 28, 34, 55];
const num1 = num.map((element, index, arr) => {
  if (element % 2 === 0) {
    return element ** 2;
  } else {
    return (arr[index - 1] + num + arr[index + 1]).toFixed(2);
  }
});
console.log(num1);
