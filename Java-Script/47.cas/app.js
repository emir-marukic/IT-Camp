const person = {
  firstName: "Hana",
  lastName: "Plojovic",
  age: 12,
};

console.log(person);

// Svi objekti u JavaScriptu su povezani sa nekim prototype objektom, pa mozemo reci da svaki objekat ima prototip
// Prototip objekat sadrzi odredjena svojstva i metode.

// Construktor funkcija za pravljenje objekata:

function User(firstName, lastName, score) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.score = score;
}

User.prototype.incrementScore = function () {
  this.score++;
};

const ilhan = new User("Ilhan", "Buhic", 5);
const asija = new User("Asija", "Sijaric", 5);
const ajsa = new User("Ajsa", "Lomnicanin", 5);
const merjem = new User("Merjem", "Sinanovic", 5);
const emir = new User("Emir", "Marukic", 5);

ilhan.incrementScore();
emir.incrementScore();

console.log(emir);
console.log(ilhan);

setTimeout(() => {
  console.log("1");
}, 2000);

setTimeout(() => {
  console.log("2");
}, 1000);

setTimeout(() => {
  console.log("3");
}, 1000);

console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
