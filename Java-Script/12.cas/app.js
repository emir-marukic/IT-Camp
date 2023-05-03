// const recenica = prompt("Unesite neku rec ");
// let brojac = 0;
// for (let i = 0; i < recenica.length; i++) {
//   if (!isNaN(recenica[i]) && recenica[i] !== " ") {
//     brojac++;
//   }
// }
// console.log(brojac);

const recenica = prompt("Napisite recenicu ");
let novaRecenica = "";
for (let i = 0; i < recenica.length; i++) {
  if (recenica[i] === " ") {
    continue;
  } else {
    novaRecenica += recenica[i];
  }
}
console.log(novaRecenica);
