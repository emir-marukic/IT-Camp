// JSON Java Script Object Notation

// JSON je format za skladistenje i prenos podataka. Najcesce se koristi kada se podaci salju sa backenda ka
// WEB stranici.
// Sintaksa je vrlo slicna JavaScript objektima:

// const person = {
//   firstName: "Emir",
//   lastName: "Marukic",
//   age: 27,
// };

// JSON.stringify() metoda koja neki JSON format pretvara u string

// const strJson = JSON.stringify(person);
// console.log(strJson);
// console.log(typeof strJson);

// JSON.parse() metoda koja od nekog stringa pokusava dobiti objekat

// const obj = JSON.parse(strJson);
// console.log(obj);

// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: ["0622222", "02033322"],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;

myCar.povecanjeBrzine = function (vrednost) {
  if (this.trenutnaBrzina + vrednost <= this.maksimalnaBrzina) {
    this.trenutnaBrzina += vrednost;
  } else {
    return "Ne brze od zivota ";
  }
};
console.log(myCar.trenutnaBrzina);
myCar.povecanjeBrzine(80);
console.log(myCar.trenutnaBrzina);
myCar.povecanjeBrzine(100);
console.log(myCar.trenutnaBrzina);
console.log(myCar.povecanjeBrzine(100));
console.log(myCar.trenutnaBrzina);

myCar.smanjenjeBrzine = function (vrednost) {
  if (this.trenutnaBrzina - vrednost >= 0) {
    this.trenutnaBrzina -= vrednost;
  }
};

myCar.koci = function () {
  this.trenutnaBrzina = 0;
};

myCar.smanjenjeBrzine(90);
console.log(myCar.trenutnaBrzina);

myCar.koci();
console.log(myCar.trenutnaBrzina);
