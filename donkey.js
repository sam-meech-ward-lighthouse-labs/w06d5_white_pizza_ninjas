const donkey = {
  name: "donkey",
  hair: 'gray or grey',
  ears: 2,
  legs: true,
  friend: "shrek",
  makeSound() {
    console.log(`${this.name} is braying`);
  }
};

const ogre = {
  name: "shrek",
  layers: true,
  colour: 'green',
  horns: 2,
  girlfriend: "cameron diaz",
  eat() {
    console.log(`${this.name} is eating onions`);
  }
};

Object.prototype.fart = function() {
  console.log(`${this.name} 🌬️💩`);
}

// var things = [1];
// things.fart();

for (var i in []) {
  console.log(i);
}

donkey.__proto__ = ogre;

// donkey.fart();

// donkey.toString();
// console.log(donkey.layers);


// donkey.makeSound();

// ogre.eat();
// ogre.fart();