// keys() metoda vraca Array Iterator Object kljuceva nekog niza
// const grupa = ["Emir", "Ajsa", "Selver", "Asija"];
//                  0       1        2        3

// const kljucevi = grupa.keys();
// console.log(kljucevi);

// for (let kljuc of kljucevi) {
//   console.log(kljuc);
// }

// entries() metoda vraca Array Iterator Object key/value parova nekog niza

// const parovi = grupa.entries();

// for (let par of parovi) {
//   console.log(par);
// }

// callBack funkcija predstavlja funkciju koju saljemo kao argument neke metode (funkcije)

// function glavnaFunkcija(callback) {
//   console.log("Pocetak posla glavne funkcije");
//   callback();
//   console.log("Kraj posla glavne funkcije");
// }
// function pomocna() {
//   console.log("Ovo je radnja iz callback funkcije");
// }
// glavnaFunkcija(pomocna);

// Napraviti glavnu funkciju koja ima callback funkciju, i jos 2 argumenta (broja), callback funkcija
// treba da ispise prvi broj stepenovan drugim i da se to izvrsi unutar glavnu funkcije

// const glavnaFunkcija = (callback, num1, num2) => {
//   callback(num1, num2);
// };
// stepenovanje = (num1, num2) => {
//   console.log(num1 ** num2);
// };
// glavnaFunkcija(stepenovanje, 2, 3);

const main = (callback, a, b) => {
  return callback(a, b);
};
console.log(main((a, b) => a ** b, 3, 2));
