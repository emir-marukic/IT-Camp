// for (let i = 1; i < 6; i++) {
//   console.log(i);
// }

// while petlja se takodje koristi za iteraciju kroz neki objekat i izvrsavnje odredjenog koda.
// let i = 1;
// while (i < 6) {
//   console.log(i);
//   i++;
// }

// // do while petlja se koristi za iteraciju kroz neki objekat , s tim sto u ovakvoj petlji imamo prvi izvrsavanje koda pa tek onda ispitivanje uslova.
// let j = 5;
// do {
//   console.log(j);
//   j++;
// } while (j < 11);

// Traziti od korisnika da unese neki broj.
//  Na osnovu te vrednosti izvrsiti ispis kvadrata brojeva 1 do tog unetog broja:

// let broj = +prompt("Unesite broj");
// let i = 0;
// while (i < broj) {
//   console.log(i ** 2);
//   i++;
// }

// Traziti unos brojeva od korisnika sve dok ne unese nulu

let broj = +prompt("Unesite broj ");

while (broj !== 0) {
  broj = +prompt("Unesite neku vrednost");
}
