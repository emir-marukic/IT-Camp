// function protectUser(email) {
//   const underLine = email.indexOf("_");
//   const dot = email.indexOf(".");
//   //   let indexSymbol;
//   //   if (indexSymbol === -1) {
//   //     indexSymbol = dot;
//   //   } else {
//   //     indexSymbol = underLine;
//   //   }
//   const indexSymbol = underLine === -1 ? dot : underLine;
//   const at = email.indexOf("@");
//   const surname = email.slice(indexSymbol, at);
//   return email.replace(surname, "...");
// }
// console.log(protectUser("asdsad.asd@gmail.com"));
//---------------------
prva();

function prva() {
  console.log("prva");
}

// U prvom slucaju vazi hoisting. Deklarisanje funkcija na vrhu fajla. Stoga ih ozemo pozivati pre definisanja.

druga();
const druga = () => console.log("druga");

// Za arrow funkcije ne vazi hoisting. Moramo je definisati pre koriscenja.
