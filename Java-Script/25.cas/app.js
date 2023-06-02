// let hex = "0123456789ABCDEF";
// 2AB = 2*16**2+10*16**1+11*16**0
// 01 = 0*2**1+1*2**0

// #A2FE12

// A2 = 10*16**1+2*16**0 = 160 + 2

// FE = 15*16**1+14*16**0 = 240 + 14 = 254

// 12 = 1*16 + 2*1 = 18

// rgb(162, 254, 18)

// num metode:

//toString() metoda vraca string (broj tipa string).
//Ova metoda se moze primeniti na bilo koji tip podatka.

// let x = 144;
// let y = x.toString();
// console.log(y);
// console.log(typeof y);

// console.log(y + 5);

//toFixed() metoda vraca broj zaokruzen na onoliko decimala koliki je argument poslat metodi ova metoda je tipa string

// z = 122.123123213;
// console.log(z);
// let broj = z.toFixed(4);
// console.log(broj);
// console.log(typeof broj);

// toPrecision() metoda vraca broj sa ukupnim brojem cigara koliko je argument poslat metodi.
// Dobijena vrednost je tip string.

// let broj2 = z.toPrecision(4);
// console.log(broj2);
// console.log(typeof broj2);

// takmicenje = (pro1, mat1, pro2, mat2) => {
//   const zbir1 = pro1 + mat1;
//   const zbir2 = pro2 + mat2;
//   if (zbir1 === zbir2) {
//     if (pro1 > pro2) {
//       return "Pobedio je drugi ";
//     } else {
//       return "Pobedio je prvi";
//     }
//   } else if (zbir1 === zbir2) {
//     return "Pobedio je prvi";
//   } else if (zbir1 >= zbir2) {
//     return "Pobedio je prvi";
//   } else {
//     return "Pobedio je drugi";
//   }
// };
// console.log(takmicenje(50, 50, 50, 50));
