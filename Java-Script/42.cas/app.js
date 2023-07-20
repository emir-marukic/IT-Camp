// Objekti su struktura podataka koja skladisti vise vrednosti.
// Elementi su zapisani u key/value (name/value) parovima.
// key/value (name/value) parovi u JavaScript objektima se zovu svojstva (properties).

// const car = {
//   type: "Fiat",
//   model: 500,
//   color: "white",
// };

// Pristupanje nekoj vrednosti propetija mozemo izvrsiti na dva nacina

// 1. obj.propertyName

// console.log(car.type);

// 2. obj["propertyName"]

// console.log(car["type"]);

// Objekti takodje mogu imati metode.
// Metode predstavljaju fukncije koje se izvrsavaju na objekt.

// const person = {
//   firstName: "Emir",
//   lastName: "Marukic",
//   age: 22,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());

// U JaviScriptu this referencira (ukazuje) na neki objekat.
// this nije promenljiva vec rezervisana rec (keyword).
// Ne mozemo promeniti vrednost this.

// const x = person;
// console.log(x);

// Promena vrednosti svojstva

// person.firstName = "Emira";
// console.log(person);

// person.adult = true;
// console.log(person);
// console.log(x);

// Brisanje svojstva objekta:
// delete keyword brise i property name i value

// delete x.adult;
// delete x["adult"];

// console.log(x);

// Vrednost nekog property-a u objektu moze biti objekat, niz...

// Od objekta mozemo dobiti niz pomocu metode Object.values()

// const personArr = Object.values(person);

// console.log(personArr);

const shuffle = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      arr.push(str.slice(i, j + 1));
    }
  }
  return arr;
};
console.log(shuffle("dog"));
