// 1. Operatori poredjenja

// == Proverava da li su jednake vrednosti 2 strane

console.log(5 == 5);
console.log(5 == "5"); //imaju istu vrednost, ali im je razlicit tip
console.log("leva" == "desna");

// === Proverava jednakost tipa i vrednosti dve strane.

console.log(5 === "5");
console.log(10 === 10);

// != Proverava razlicitost leve i desne strane.
console.log(5 != "5");
console.log(5 != 4);

// !== Proverava razlicitost tipa ili vrednosti leve i desne strane.
console.log(5 !== "5");
console.log("sreda" !== "Sreda");

// > vece
console.log(4 > 6);

// < manje

console.log(4 < 6);

// >= vece ili jednako

console.log(5 >= 5);

// <= manje ili jednako

console.log(5 <= 19);

// ? Ternary operator
const isSunny = false;

const doINeedSunGlasses = isSunny ? "Da" : "Ne";
console.log(doINeedSunGlasses);

// 2. Logicki operatori

// && logicko i kada moraju biti zadovoljeni svi poduslovi
console.log(5 === "5" && 4 <= 6); // false

// || ili kada je barem jedan uslov zadovoljen
console.log(5 === "5" || "sreda" === "Sreda"); // false
console.log(5 == "5" || "sreda" === "Sreda"); // true

// ! logicko not Vraca boolean koji ce da bude suprotne vrednosti od promenljive
console.log(!isSunny);

// 3. Tipovni operatori.

//typeof - za ispitavanje tipa promenljive
console.log(typeof 123);

//instanceof - operator za ispitivanje da li neka promenljiva pripada odredjenom tipu
console.log(123 instanceof Object);

console.log(typeof [1, 2, 3]);
console.log([1, 2, 3] instanceof Array);
