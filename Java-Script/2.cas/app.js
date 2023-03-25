// Neku poruku u JavuScriptu mozemo prikazati na vise nacina:

// 1. innerHTML
naslov = document.querySelector("#naslov");
naslov.innerHTML = "Prvi nacin ispisa";

// 2. document.write - obicno se koristi za testiranje koda

// 3. Alert() - Upozorenje korisniku

// alert("Jos jedan nacin prikazivanja poruke");

// 4. console.log() - Prikazivanje nekih informacija u konzoli. Najcesce koriscen metod.

console.log("Poruka u konzoli");

// JavaScript nazivi promenljivih
// Ime promenljive u JavaScript mora poceti:
// 1. Velikim ili malim slovom (A-Z ili a-z)
// 2. $(dolar sign)
// 3. _(donja crta)

// Broj moze biti sadrzan u nazivu promenljive, ali promenljiva ne sme poceti sa brojem.

// JavaScript je case sensitve (razlike velia i mala slova)

a = 10;
console.log(a); // 10

// Zapisivanje promenljivih koje sadrze 2 ili vise reci:

// vecernji termin - nije ispravan naziv -
// VecernjiTermin  -  Upper Camel Case
vecerniTermin = 19.3; // Lower Camel Case (Pascal Case)

// deklaracija       i      inicijalizacija

// Postoje 4 nacina za deklarisanje promenljive u JavaScriptu
// 1. Koriscenjem var rezervisane reci(keyword). Vise je ranije bila koriscena (dok nismo dobili nove dve)

var b; // dekalrisanje promenljive (obezbedjivaje lokacijske memorije za promenljivu a )
b = 10; // inicijalizacija promenljive (dodeljivanje vrednosti vec deklarisanoj promenljivoj a)

// Kroz jednu liniju koda mozemo takodje izvrsiti deklaraciju i inicijalizaciju
var b = 10;

// 2. Koriscenjem let rezervisane reci (keyword). Promenljive koje su skole menjanju vrednosti.

// let c; deklarisanje promenljive b
// c = 14; inicijalizacija promenljive b
// console.log(c);

// 3. Koriscenjem const rezervisane reci (keyword). Na ovaj nacin deklarisemo promenljive cija se vrednost nece menjati.
// Nije moguca posebna deklaracija i inicijalizacija za promenljive definisane preko const keyword
// const c;
// c = 20;

// Neophodno je odjednom izvrsiti deklaraciju i inicijalizciju
const d = 20;
console.log(d);

// 4. Koriscenjem nicega

e = 5;
console.log(e);

// Varijable (promenljive) u JavaScriptu predstavljaju kontejnere za sladistenje vrednosti
