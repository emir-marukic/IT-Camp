// Promise (obecanje) je JavaScript objekat
// koji predstavlja mesto za rezultate async funkcije sve dok traje izvrsavanje async operacije.

// const obecanje = new Promise((resolve, reject) => {
//   const response = 200;

//   if (response === 200) {
//     return resolve();
//   } else {
//     reject();
//   }
// });

// then metoda predstavlja mesto za izvrsavanje funkcije u slucaju resolve()

// catch metoda predstavlja mesto za izvrsavanje funkcije u slucaju reject()

// obecanje.then(() => {
//   console.log("Uspesno dobijeni podaci");
// });

// obecanje
//   .catch(() => {
//     console.log("Nisu dobijeni podaci");
//   })
//   .finally(() => {
//     console.log("Izvrsava se u svakom slucaju.");
//   });

// const punoletan = new Promise((resolve, reject) => {
//   const person = {
//     firstName: "Emir",
//     lastName: "Marukic",
//     age: 16,
//   };
//   if (person.age > 17) {
//     resolve();
//   } else {
//     reject(person.age);
//   }
// });

// punoletan
//   .then(() => {
//     console.log(`Vi ste punoletni`);
//   })
//   .catch((years) => {
//     console.log(years);
//   });

const chain = new Promise((resolve, reject) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -2, -4, -6, -8];
  if (arr.every((num) => typeof num === "number")) {
    resolve(arr);
  } else {
    const errorMessage = "Dobijeni niz ima vrednosit koji nisu brojevi";
    reject(errorMessage);
  }
});

chain
  .then((dobijeniNiz) => {
    console.log(`Dobijeni niz je ${dobijeniNiz}`);
    return dobijeniNiz;
  })
  .then((niz) => {
    const parni = niz.filter((el) => el % 2 === 0);
    console.log(`Niz parnih brojeva je ${parni}`);
  })
  .catch((poruka) => {
    console.log(poruka);
  });
