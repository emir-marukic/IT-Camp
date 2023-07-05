// Napraviti novi niz, koji ce sadrzati samo godine vece od 17

// const arrYear = [17, 17, 21, 27, 19];
// const newArr = [];
// arrYear.forEach((num) => {
//   //   num > 17 && newArr.push(num);
//   if (num >= 18) {
//     newArr.push(num);
//   }
// });
// console.log(newArr);

// filter() metoda pravi novi niz sa onim elementima koji su prosli test.

// Novi niz moze biti prazan, iste duzine kao orginalni ili imati manje elemenata
// od orginalnog niza. Zavisi od toga koliko je elemenata proslo test.

// callback funkcija vraca uslov koji neki element treba da zadovoljava kako bi prosao test (kako bi bio dodat u novom nizu)

// const arrYear = [17, 17, 21, 27, 19];

// const above18 = arrYear.filter((num) => num > 17);
// console.log(above18);

// const niz1 = [1, 2, 5, 7, 2];
// const niz2 = [5, 4, 7, 2, 5];

// const helpers = (arr1, arr2) => {
//   const helper = arr1.concat(arr2);
//   const helper2 = helper.filter((num) => num % 2 === 0);
//   helper2.unshift(10, 20);
//   return `Ceo array : ${helper}
// Izmejeni array : ${helper2}`;
// };
// console.log(helpers(niz1, niz2));

// const student = [
//   "Anastasija",
//   "Merjem",
//   "Emir",
//   "Nedim",
//   "Selver",
//   "Ajla",
//   "Asija",
// ];

// const student2 = student.filter((name) => {
//   if (name[1] === "e") {
//     return name;
//   }
// });
// console.log(student2);

// const student2 = student.filter((student) => student[1] === "e");
// console.log(student2);

// reduce() metoda izvrsava callback funkciju za svaki element jednom i vraca nam jednu vrednost.
// reduce() meoda se izvrsava sa leve na desnu stranu.
// callback funkcija reduce metode moze imati 4 argumenta :
// (previousValue,currentValue,index,array)

const arrYear = [17, 17, 21, 27, 19];

const suma = arrYear.reduce((prev, curr) => prev + curr);
console.log(suma);

//Mozemo dodati pocetnu vrednost, ona predstavlja drugi parametar callback funkcije.

const suma2 = arrYear.reduce((prev, curr) => prev + curr, 100);
console.log(suma2);
