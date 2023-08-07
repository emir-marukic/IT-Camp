const person = {
  firstName: "Nedim",
  lastName: "Huseinovic",
  age: 18,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

// console.log(person.fullName());

// const person2 = {
//   firstName: "Emir",
//   lastName: "Marukic",
//   age: 18,
// };

// Postoje 3 metode koje mozemo koristiti za izvrsavanje neke funkcije (metode) za odredjeni objekat.
// 1. call()
// 2. apply()
// 3. bind()

// Prvo dolazimo do funkcije cije izvrsavanje zelimo, to moze biti funkcija koja predstavlja metodu nekog objekta, a moze biti i fukcija koja  je definisana u global scope.
// Nakon toga, na tu funkciju primenjujemo call metodu ciji je prvi argument predstavlja objekat kojem zelimo izvrsavanje funkcije, a potencijalno drugi, treci itd. su argumenti glavne funkcije
// console.log(person.fullName.call(person2));

// const restoran = {
//   specijalitet: "Becka snicla",
//   zadovoljstvoGostiju: "zadovoljni",
//   lokacija: "Avnoja bb",
// };

// function poruka(mesto) {
//   return `Nas vecerasnji specijalitet je bila ${this.specijalitet}. Gosti su bili veoma ${this.zadovoljstvoGostiju}.
// Nalazimo se na lokaciji ${this.lokacija} u ${mesto}`;
// }

// console.log(poruka.call(restoran, "Novom Pazaru"));

// const restoran2 = {
//   specijalitet: "Lovacka snicla",
//   zadovoljstvoGostiju: "nezadovoljni",
//   lokacija: "Stevana Nemanje, 26",
// };

// console.log(poruka.apply(restoran, ["Beogradu"]));

// Prvo dolazimo do funkcije cije izvrsavanje zelimo, to moze biti funkcija koja predstavlja metodu nekog objekta,
// a moze biti i fukcija koja  je definisana u global scope.
// Nakon toga, na tu funkciju primenjujemo apply metodu ciji je prvi argument predstavlja objekat kojem zelimo
// izvrsavanje funkcije, a potencijalno drugi argument je niz elemenata (gde svaki element predstavlja argument glavne metode)
// console.log(poruka.apply(restoran, ["Beogradu"]));

// const bindFunc = poruka.bind(restoran2);
// console.log(bindFunc("Sarajevu"));

// const firstName = person.firstName;
// console.log(firstName);

// Destructuring //

const { firstName } = person;

const { lastName, age } = person;
console.log(firstName);
