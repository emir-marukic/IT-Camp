// zbirCifara = (a) => {
//   let jedinica = a % 10;
//   let desetica = Math.floor((a / 10) % 10);
//   let stotina = Math.floor(a / 100);
//   return jedinica + desetica + stotina;
// };

// console.log(zbirCifara());

// function zbirCifara(broj) {
//   const brString = broj.toString();
//   const brNiz = brString.split("");
//   let brojac = 0;
//   for (let i = 0; i < brNiz.length; i++) {
//     brojac += Number(brNiz[i]);
//   }
//   return brojac;
// }
// console.log(zbirCifara(379));
