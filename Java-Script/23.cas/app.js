//1-2
//2-1 etc..

// shuffle = (recenica) => {
//   let str = "";
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica.length % 2 !== 0 && i === recenica.length - 1) {
//       str += recenica[i];
//     } else if (i % 2 !== 0) {
//       str += recenica[i - 1];
//     } else if (i % 2 === 0) {
//       str += recenica[i + 1];
//     }
//   }
//   return str;
// };
// console.log(shuffle("Pera ima devojku"));

shuffleStr = (str1, str2) => {
  let newStr = "";
  let duzina;
  //   if(str1.length > str2.length){
  //     duzina = str1.length
  //   }else{
  //     duzina = str2.length
  //   }
  duzina = str1.length > str2.length ? str1.length : str2.length;
  for (let i = 0; i < duzina; i++) {
    if (!str1[i]) {
      // !str1[i] umesto str1[i] === undefined
      newStr += str2[i];
    } else if (str2[i] === undefined) {
      newStr += str1[i];
    } else {
      newStr += str1[i] + str2[i];
    }
  }
  return newStr;
};

console.log(shuffleStr("PERA", "sladoled"));
