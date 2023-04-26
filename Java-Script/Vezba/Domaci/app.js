// Domaci:
// 1.
// Ispisati sve brojeve od 1 do 10 koji su parni

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

// 1.
let i = 1;
while (i < 11) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
//-------------------------------

// 2.

let n = +prompt("Unesite korektan broj ");
let k = +prompt("Unesite korektan broj ");

if (isNaN(n) || isNaN(k)) {
  console.log("Niste uneli korektan broj");
} else if (n <= k) {
  while (n <= k) {
    console.log(n);
    n++;
  }
} else if (k < n) {
  while (k <= n) {
    console.log(k);
    k++;
  }
} else {
  console.log("Uneli ste iste brojeve");
}
