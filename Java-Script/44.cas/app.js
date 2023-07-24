const radnik = {
  firstName: "Emir",
  lastName: "Marukic",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  adresa: {
    ulica: "hercegovacka",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      // vraca Dzenan Kosuta zivi u ulici Avnoja u Novom Pazaru.
      return `${radnik.fullname()} zivi u ulici ${this.ulica} u ${this.grad}`;
    },
  },
};
// console.log(radnik.fullname());
// console.log(radnik.adresa.getAdress());

const godine = [
  { starost: 17 },
  { starost: 17 },
  { starost: 22 },
  { starost: 27 },
  { starost: 22 },
  { starost: 19 },
];

const punoletan = godine.filter((year) => year.starost > 17);

// console.log(punoletan);

const newArr = punoletan.map((year) => year.starost);

// console.log(newArr);

// ... (spread) operator
// Spread operatot nam sluzi za kloniranje niza ili objekta

const punoletni = [20, ...newArr, 30];
console.log(punoletni);

const radnik2 = {
  ...radnik,
  firstName: "Tarik",
  adresa: {
    ...radnik.adresa,
    ulica: "avnoja",
  },
};

console.log(radnik2);
