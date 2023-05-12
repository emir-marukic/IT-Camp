// // // const prom1 = "Sta ako zelimo da se data recenica ispise u \ndva odvojena reda";
// // // console.log(prom1);
// // const prom2 =
// //   "Sta ako zelimo da se data recenica ispise u dva odvojena reda kada kucamo,\
// //    ali njen prikaz ce izgledati u jednom redu.";
// // console.log(prom2);

// // let br1 = 7;
// // let br2 = 13;
// // let zbir = br1 + br2;
// // console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + (br1 + br2));
// // // DRUGI NACIN
// // //console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + zbir);

// // // Resenje preko back-ticks

// // console.log(`Zbir brojeva ${br1} i ${br2} je ${br1 + br2}`);

// // Zapisivanje navodnika se vrsi bez ikakvih problema kroz back-ticks sintaksu.

// // Zapisivanje stringa u vise redova je ispravna sintaksa kroz back-ticks navode.

// let recenica = "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'";

// // replace() metoda menja specifican karakter (niz karaktera) nekim drugim (koji saljemo kroz drugi argument).
// // to se sve postize pravljenjem novog stringa

// let recenica2 = recenica.replace("promenljivo", "lepse");
// console.log(recenica.replace("promenljivo", "lepse"));
// console.log(recenica);

// let recenica3 =
//   "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'. Sta ako se rec promenljivo nadje na jos nekom mestu?";

// let recenica4 = recenica3.replace("promenljivo", "lepse");
// console.log(recenica4);

//  replace() metoda menja samo prvi pronadjeni argument u datom stringu.
//  Medjutim koriscenjem regular expression mozemo zameniti dati argument gde god se nadje u stringu novim
//  Sintaksa:
//  1 - Regular expression i (insensitive) menja rec drugom bez obzira na njen zapis
//  (bilo da je ispisano velikim ili malim slovima)

//  2 - toUpperCase() metoda pretvara ceo string u velika slova, bez obzira na to kako je prethodno ispisan i koliko ima karaktera

//  3 - toLowerCase() metoda pretvara ceo string u mala slova, bez obzira na to kako je prethodno ispisan i koliko ima karaktera
// let recenica5 = recenica3.replace(/promenljivo/g, "lepse");

// console.log(recenica5);

// let recnica6 =
//   "Zelimo zameniti rec 'promenljivO' sa recju 'lepse'. Sta ako se rec promenljivo nadje na jos nekom mestu?";

// let recenica7 = recnica6.replace(/promenljivo/gi, "lepse");
// console.log(recenica7);

// console.log("Data recenica treba biti ispisana velikim slovima".toUpperCase());
// console.log("Data recenica treba biti ispisana velikim slovima".toLowerCase());

// concat() metoda spaja dva ili vise stringova u jedan.
// Nismo ograniceni slanjem argumenata.
// Dodavanje se vrsi onim redosledom kako saljemo argumente.

// let a = "Prvi deo ";
// let b = "nase recenice";
// let d = ".";
// let c = a.concat(b, d);
// console.log(c);

// Sve metode za stringove prave novi string ne vrsi se modifikacija postojeceg.

recenica = (novaRecenica) => {
  if (novaRecenica.length < 9) {
    const recenica1 = novaRecenica.replace(/a/g, "B");
    return "Ovo je navodobijena recenica ".concat(recenica1);
  } else {
    return "Recenica je nedovoljne duze za dalje ispitivanje";
  }
};
console.log(recenica("ananas"));
console.log(recenica("ananasasdsadsa"));
