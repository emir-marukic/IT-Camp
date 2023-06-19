// Math.min(x,y,z...,n) - vraca najmanji broj od prosledjenih.

// console.log(Math.min(2, 5, 1, -9, 10, 26));

// Math.max(x,y,z,...,n) - vraca najveci broj od prosledjenih.

// console.log(Math.max(2, 5, 1, -9, 10, 26));

// const nizBrojeva = [2, 5, 1, -9, 10, 26];

// Nacin da dobijemo najamnji (najveci) elemnt NIZA je da na vec postojecu metodu Math.min/max dodamo jos .apply
// getMax = (niz) => {
//   let max = 0;
//   for (let i = 0; i < niz.length; i++) {
//     if (niz[i] > max) {
//       max = niz[i];
//     }
//   }
//   return max;
// };
// console.log(getMax(nizBrojeva));

// Math.random() metoda vraca random broj izmedju 0(ukljucujuci) i 1 (ne ukljucujuci)

// Broj izmedju 0 i 1 (realan broj)
// console.log(Math.random());

// // 0 ili 1
// console.log(Math.round(Math.random()));

// 0 ili 20
// console.log(Math.round(Math.random() * 20));

//50 i 100

// console.log(Math.round(Math.random() * 50) + 50);

// const obimKruga = (poluprecnik) => parseInt(2 * poluprecnik * Math.PI);

// console.log(obimKruga(2));

rastojanje = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(rastojanje(12, 12, 3, 3));
