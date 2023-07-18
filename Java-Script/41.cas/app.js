const a = [
  [1, 2, 1, 21],
  [2, 5, 3, 2],
  [5, 2, 7, 1],
  [52, 3, 2, 1],
];

// const nestedLoop = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`Row ${i + 1}`);
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(`${arr[i][j]}`);
//     }
//   }
//   return "";
// };
// console.log(nestedLoop(a));

// const output = (arr) => {
//   arr.forEach((element, index) => {
//     console.log(`row ${index + 1}`);
//     element.forEach((el) => {
//       console.log(el);
//     });
//   });
//   return "";
// };
// console.log(output(a));

// console.log(!55); // false
// console.log(!!55); // true

// const prom = !(55 + "");
// console.log(typeof (55 + ""));
// console.log(prom);

// Rekurzivna funkcija

// Rekurzivna funkcija je funkcija koja zahteva izvrsavanje same sebe unutar definisanja funkcije.
// Pomocu rekurzivne funkcije mozemo postici efekat petlje.

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// function petlja(n) {
//   console.log(n);
//   if (n - 1 > 0) {
//     petlja(n - 1);
//   }
// }

// petlja(10);

// const aritmetickaSredina = (callback) => {
//   console.log("Ovo je glavna funkcija");
//   callback(3, 4, 5);
// };
// const avarage = (a, b, c) => {
//   console.log(a + b + c) / 3;
// };

// console.log(aritmetickaSredina(avarage));

// Closure funkcije

// function zbir() {
//   const a = 5;
//   const b = 3;
//   return a + b;
// }
// console.log(zbir());

// Poznata je cinjenica da kada se izvrsi neka funkcija
// sve njene lokalne promenljive garbage collector i one prestaju da postoje u memomriji
// Medjutim to nije slucaj za funkcije koje unutar sebe sadrze closure funkciju.

// Closure su funkcije koje imaju pravo da pristupe promenljivima iz druge funkcije

const proizvod = () => {
  const x = 5;
  const y = 10;
  const closure = () => {
    console.log(x * y);
  };
  closure();
};
proizvod();

// Napraviti funkciju koja vraca niz prestupnih godina u segmentu [pocetnaGodina, krajnjaGodina]

const leapYears = (from, to) => {
  const leapYears = [];
  for (let i = from; i <= to; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapYears.push(i);
    }
  }
  return leapYears;
};
console.log(leapYears(1990, 2020));
