// 3. Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4. Podrazumeva se da uneti string nema vodeće razmake.

// const rec = "Pera ima devojku";
// const third = (recenica) => {
//   const prviRazmak = recenica.indexOf(" ");
//   const prvaRec = recenica.slice(0, prviRazmak);
//   return prvaRec.length;
// };
// console.log(third(rec));

// Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje

// const a = (recenica) => {
//   const splitRecenica = recenica.split(" ");
//   const prvaRec = splitRecenica[0];
//   const drugaRec = splitRecenica[splitRecenica.length - 1];
//   const B = `${prvaRec} ${drugaRec}`;
//   //   return prvaRec.concat(" ", drugaRec);
//   return B;
// };
// console.log(a("Svuda podji kuci dodji"));

// const strLength = (str, num) => {
//   let newStr = str.slice(0, num);
//   if (newStr.length >= str.length) {
//     return str;
//   } else {
//     return newStr;
//   }
// };
// console.log(strLength("Pera ima devojku", 10));

// const strLength = (str, m, num) => {
//   let newStr = str.substr(m, num);
//   return newStr;
// };
// console.log(strLength("Pera ima devojku", 6, 7));

const ifChar = (str, char) => {
  let newStr = "";
  let i = 0;
  while (i < str.length) {
    if (str[i] !== char) {
      newStr += str[i];
    }
    i++;
  }
  return newStr;
};

console.log(ifChar("Madagaskar", "a"));
