console.log("Prvi cas javascript-a");
console.log("Nova poruka");

tekst = document.querySelector("#paragraph");
console.log(tekst);

tekst.innerHTML = "<em>Da li se vidi paragraf</em>";

// TIPOVI PODATAKA//
//Postoje:
// 1. Primitivni (vrednosti) tipovi podataka i
// 2. Neprimitivne (referentni) tipovi podataka.

// Za promeveru tipa odredjene promenljive (varijable) se koristi typeOf operator.

//Primitivni (vrednosti) tipova podataka:
// 1. string - promenljiva koja je zapisana unutar navodnika (obicnih ili duplih)

console.log("Neki string");
console.log(typeof "Neki string");

// 2. number - brojevi mogu biti zapisani sa ili bez decimalnog zareza (.)
console.log(56);
console.log(typeof 56);

//3. BigInt - brojevi koji su iznad ogranicenja za number tip podatka.
console.log(BigInt(1231321315151151));
console.log(typeof BigInt(1231321315151151));

//4. boolean - logicki entitet koji ima dve vrednosti true i false
console.log(true);
console.log(typeof true);

//5. undefined - Promenljiva koja je definisana u memoriji ali joj nije dodeljna vrednost ima:
// tip: undefined i
// vrednost: undefined

let a;
console.log(a);
console.log(typeof a);

// 6. null - Nepostojeca ili nekorektna promenljiva ima vrednost null
//Tip promenljive cija je vrenost null u JavaScriptu je object

b = null;
console.log(typeof b);

// 7.Symbol - Koristi se za promenljive koje su anonimne ili jedinstvene.
c = Symbol("IT CAMP");
console.log(typeof c);

//Svi tipovi podataka koji nisu primitivni su tipa object.
//Promenljive koje mogu sadrzati vise (od jedne) vrednosti su referentnog (neprimitivnog) tipa.

// 1. Array (niz) - Struktura podataka za skaldistenje vise vrednosti (te vrednosti mogu biti razlicitog tipa).

niz = ["Emir", 21, true];
console.log(niz);
console.log(typeof niz);

// 2. Object (objekat) - Struktura podataka za skaldistenje vise vrednosti (te vrednosti mogu biti razlicitog tipa).
// Te vrednosti su prikazane u key:value (name:value) paru

object = {
  ime: "Emir",
  prezime: "Marukic",
  godine: 21,
  punoletan: true,
};

console.log(object);
console.log(typeof object);

// 3. Set - Struktura podataka za skladistenje vise vrednosti koja ne dozvoljava vise vrednosti koja  ne dozvoljava duplikate. Slicna je nizu (Array), a sintaksta za pravljenje seta je:

set = new Set(["Asija", "Melida", "Dino", 19, 31, 25, "Dino"]);
// Svako novo pojavljivanje elementa u setu se nece primeniti
console.log(set);

// 4. Map - Struktura podataka za skladistenje vise vrednosti i slicna je objektu. Sintaksa za pravljenje mape je

map = new Map([
  ["banane", 160],
  ["jagode", 260],
  ["kruske", 140],
  ["ananas", 289],
]);
console.log(map);
