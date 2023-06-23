// concat() metoda nam sluzi za spajaje dva ili vise niza.

const muskarci = ["Emir", "Selver"];
const devojke = ["Asija", "Dzana", "Ajsa", "Anastasija"];

// const celaGrupa = muskarci.concat(devojke);
// console.log(celaGrupa);

// Argument metode ne mora bizi niz. Moze biti i element
const celaGrupa = muskarci.concat(devojke, "Nedim");
// console.log(celaGrupa);

// slice() metoda nam vraca deo niza (onoliko)

// Prvi argument metode predstavlja poziciju u nizu odakle zelimo promene.

// Drugi argument metode predstavlja broj elemenata koji treba da se izbrisu, krenuvsi od pozicije (prvog argumenta)

// Svi sledeci argumenti potencijalno
// predstavljaju nove elemente u nizu (vrednosti koje zelimo dodati na vec definisanoj poziciji)
celaGrupa.splice(3, 0, "Merjem");

const devojke2 = celaGrupa.splice(2, 5);
// console.log(celaGrupa);

const novaGrupa = devojke2.concat(celaGrupa);
novaGrupa.splice(5, 0, "Ajla");
// console.log(novaGrupa);

novaGrupa.splice(5, 2, "Dzevdet", "Tarik", "Marija", "Alen");
// console.log(novaGrupa);

novaGrupa.splice(-3, 1, "Rifat");
// console.log(novaGrupa);

// splice() metoda vraca niz sa izbrisanim elementima

//sort() metoda vrsi sortiranje niza (abecedno)

novaGrupa.sort();
// console.log(novaGrupa);

// reverse() metoda sortira niz od poslednjeg ka prvom elementu

// Za sortiranje niza od Z do A prvo treba iskoristiti sort() metodu, pa onda reverse()
novaGrupa.sort();
novaGrupa.reverse();
// console.log(novaGrupa);

// sortiranje niza brojeva samo po sebi se ne vrsi kako bismo mi hteli:
const brojevi = [3, 23, 42, 52, 23, 42, 58, -99];
brojevi.sort();

// Potrebno je poslati funkciju koja vrsi poredjenje dva broja kako bismo
// sortirali niz od najmanjeg ka najvecem elementu:

brojevi.sort(function (a, b) {
  return a - b;
});
// console.log(brojevi);

// // Potrebno je poslati funkciju koja vrsi poredjenje dva broja kako bismo
// sortirali niz od najveceg ka najmanjem elementu (obrnuto poredjenje):
brojevi.sort((a, b) => b - a);
// console.log(brojevi);

// Sortiranje niza u random redosledu:

brojevi.sort(function () {
  return 0.5 - Math.random();
});
console.log(brojevi);

// Napraviti funkciju koja vraca najveci element nekog niza.
// Napraviti funkciju koja vraca najmanji element nekog niza.

// highest = (arr) => {
//   let highest = 0;
//   for (let num of arr) {
//     if (num > highest) {
//       return num;
//     }
//   }
// };
// const num = [1, 2, 3, 4, 5];
// console.log(highest(num));
