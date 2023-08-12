// Napraviti funkciju koja sadrzi Promise koji proverava da li poslati argument funkcije ima vise od 10 samoglasnika.
// Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecanje sa porukom "String zadovoljava uslov";
// ako argument ima manje od 11 samoglasnika neka se reject_a obecanje uz poruku "String ne zadovoljava uslov";
// U svakom slucaju neka stoji poruka "Funkcija je izvrsena".

// const chain = new Promise((resolve, reject) => {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -2, -4, -6, -8];
//   if (arr.every((num) => typeof num === "number")) {
//     resolve(arr);
//   } else {
//     const errorMessage = "Dobijeni niz ima vrednosit koji nisu brojevi";
//     reject(errorMessage);
//   }
// });

// chain
//   .then((dobijeniNiz) => {
//     console.log(`Dobijeni niz je ${dobijeniNiz}`);
//     return dobijeniNiz;
//   })
//   .then((niz) => {
//     const parni = niz.filter((el) => el % 2 === 0);
//     console.log(`Niz parnih brojeva je ${parni}`);
//   })
//   .catch((poruka) => {
//     console.log(poruka);
//   });

const samoglasnik = new Promise((res, rej) => {
  let brojac = 0;
  const str =
    "Ako ova rečenica ima deset samoglasnika, onda je zadatak ispunjen.";
  const samoglasnici = ["a", "e", "i", "o", "u"];
  for (const slovo of str) {
    if (samoglasnici.includes(slovo)) {
      brojac++;
    }
  }
  if (brojac > 9) {
    res();
  } else {
    rej();
  }
});

samoglasnik
  .then(() => {
    console.log("String zadovoljava uslov");
  })
  .catch(() => {
    console.log("String ne zadovoljava uslov");
  });
