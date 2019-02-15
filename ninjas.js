
const ninjaPrototype = {
  parkour() {
    console.log(`${this.name} run on walls unempedid by obstacles`);
  }
};

function newNinja(name =  "Sam", weapon =  "nunchuk", stealth =  true, speed =  10, isMutantTurtle =  false) {
  const ninja = {};

  ninja.name = name;
  ninja.weapon = weapon;
  ninja.stealth = stealth;
  ninja.speed = speed;
  ninja.isMutantTurtle = isMutantTurtle;

  ninja.__proto__ = ninjaPrototype;

  return ninja;
}

const sam = newNinja();
const michaelangelo = newNinja("Michaelangelo", "thowing stars", true, 100, true);

sam.parkour();
michaelangelo.parkour();

console.log(sam);
console.log(michaelangelo);