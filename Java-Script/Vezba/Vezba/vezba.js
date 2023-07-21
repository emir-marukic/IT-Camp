const dragonAndAmmo = (dragon, bullet) => {
  for (let i = 0; i < dragon; i++) {
    bullet -= 2;
    console.log(bullet);
    if (bullet < 0) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(dragonAndAmmo(3, 5));
