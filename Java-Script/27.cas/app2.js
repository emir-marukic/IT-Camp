// JavaScript Math Object //

// JavaScript Math objekat nam dozvoljava razlicite zadatke sa brojevima.

// Math Properties (Svojstva-Konstante)

// Bilo kojoj matematickoj konstanti mozemo pristupiti:
// Math.property_name

// JavaScript nam obezbedjuje 8 razlicitih matematickih konstanti,
// kojima jedino mozemo pristupiti preko Math objekta.

// 1. Math.E
// 2. Math.PI
// 3. Math.SQRT2
// 4. Math.SQRT_2
// 5. Math.LN2
// 6. Math.LN10
// 7. Math.LOG2E
// 8. Math.LOG10E

// Napravite funkciju koja trazi korisniku 7 vrednosti
// (svaka se odnosi na maksimalnu dnevnu temperaturu dana u nedelji).
// Funkcija treba da vrati temperaturu najtoplijeg dana u nedelji

highest = (num1, num2, num3) => {
  let broj =
    num1 > num2 && num1 > num3
      ? num1
      : num2 > num1 && num2 > num3
      ? num2
      : num3;
  return broj;
};

console.log(highest(22, 2, 3));
