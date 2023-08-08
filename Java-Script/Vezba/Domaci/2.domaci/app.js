const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: 50,
    dnevnaKarta: 200,
    mesecnaKarta: 2000,
  },
};
// Napraviti funkciju koja ce povecati vrednost satne, dnevne i mesecne karte za po 20%.
// Za bilo koji objekat koji ima properties: satnaKarta, dnevnaKarta i mesecnaKarta.
// Nakon toga je primeniti za automobil objekat i ispisati automobil nakon toga.

function percentPrice() {
  const satnaKarta = this.garaza.satnaKarta * 1.2;
  const dnevnaKarta = this.garaza.dnevnaKarta * 1.2;
  const mesecnaKarta = this.garaza.mesecnaKarta * 1.2;
  console.log(typeof automobil.garaza.mesecnaKarta);
  return {
    satnaKarta: satnaKarta,
    dnevnaKarta: dnevnaKarta,
    mesecnaKarta: mesecnaKarta,
  };
}

console.log(percentPrice.call(automobil));
