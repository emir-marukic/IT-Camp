// Napraviti funkciju koja sadrzi Promise koji proverava da li poslati argument funkcije ima vise od 10 samoglasnika.
// Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecanje sa porukom "String zadovoljava uslov";
// ako argument ima manje od 11 samoglasnika neka se reject_a obecanje uz poruku "String ne zadovoljava uslov";
// U svakom slucaju neka stoji poruka "Funkcija je izvrsena".

const samoglasnik = new Promise((res, rej) => {
  let brojac = 0;
  const str =
    "Ako ova rečenica ima deset samoglasnika, onda je funkcija ispunjena.";
  const samoglasnici = ["a", "e", "i", "o", "u"];
  for (const slovo of str) {
    if (samoglasnici.includes(slovo)) {
      brojac++;
    }
  }
  if (brojac > 9) {
    const resPoruka = "String zadovoljava uslov";
    res(resPoruka);
  } else {
    const rejPoruka = "String ne zadovoljava uslov";
    rej(rejPoruka);
  }
});

samoglasnik
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
