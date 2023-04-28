// let broj = +prompt("Unesite neki broj: ");

// for (let i = broj; broj >= 1; i--) {
//   console.log(i, i * i, i - 25);
// }

// if (isNaN(broj) || broj < 12 || broj > 16) {
//   console.log("Niste uneli tacan broj ");
// } else {
//   for (let i = broj; broj >= 1; i--) {
//     console.log(i, i * i, i - 25);
//   }
// }

// Svaki karakter neke recenice neka se ispise jedan ispod drugog

// const recenica =
//   "U ponedeljak je naredni dan, to znaci da je nas sledeci cas u sredu";

// for (let i = 0; i < recenica.length; i++) {
//   console.log(recenica[i]);
// }

// Na osnovne unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog.
// Dok ako je neki drugi karakter = "a", neka se ispise broj 5.
// A u slucaju da je karakter jednak "s", neka se ne ispise nista.

// let recenica = prompt("Unesite neku recenicu");

// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === "a") {
//     console.log(5);
//   } else if (recenica[i] === "s") {
//     continue;
//   } else {
//     console.log(recenica[i]);
//   }
// }

// Metoda toLowerCase() pretvara ceo string u mala slova:
// Metoda toLowerCase() pretvara ceo string u velika slova:
// console.log("MALA SLOVA".toLowerCase());
// console.log("velika slova".toUpperCase());

// let recenica0 =
//   "ZeLiMo Datu ReCeNicu PrikaZati MALIM, isto TakO i VeLiKim slOvima";

// console.log(recenica0.toLowerCase());
// console.log(recenica0.toUpperCase());

//Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.

const recenica = "treba nam nova recenica gde svaka rec pocinje velikim slovom";
const recenica1 = "";
for (let i = 0; i < recenica.length; i++) {
  if (recenica1 === 0) {
    recenica1 += recenica[i].toUpperCase();
  } else if (recenica[i - 1] === " ") {
    recenica1 += recenica[i].toUpperCase;
  } else {
    recenica1 += recenica[i];
  }
}
