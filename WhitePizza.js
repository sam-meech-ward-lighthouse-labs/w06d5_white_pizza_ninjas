// WhitePizza

function WhitePizza(toppings = ['cheese'], crust = 'thin', sliceOrWhole = 'slice') {
  // this = {};

  this.toppings = toppings;
  this.crust = crust;
  this.sliceOrWhole = sliceOrWhole;

  // this.__proto__ = WhitePizza.prototype;

  // return this;
}

WhitePizza.prototype.cook = function() {
  console.log(`🍕 I'm cooked ${this.toppings}`);
}
WhitePizza.prototype.sauce = 'white';

const mushroomAndArugula = new WhitePizza(['mushroom', 'arugula'], 'whole wheat', 'whole');

console.log(mushroomAndArugula);
console.log(mushroomAndArugula.__proto__);
mushroomAndArugula.cook();

// console.log(mushroomAndArugula);
// console.log(mushroomAndArugula.__proto__);
// console.log(mushroomAndArugula.__proto__ === WhitePizza.prototype);
// console.log(WhitePizza.prototype.__proto__ === Object.prototype);