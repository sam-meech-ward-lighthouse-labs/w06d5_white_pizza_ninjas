class Hair {

  constructor() {
    this.colour = 'pink?';
  }

  getCut() {

  }
}

console.log(typeof Hair);
console.log(Object.getOwnPropertyNames(Hair.prototype));

const curly = new Hair();
console.log(curly);

console.log(curly.__proto__ === Hair.prototype);

curly.getCut();


Object.defineProperty(curly, 'property1', {
  value: 42,
  writable: false
});


class Hair {

  constructor(colour) {
    this.colour = colour;
  }

  getCut() {
    this.colour;
  }
}

function makeHair(colour) {

  return {
    getCut() {
      colour;
    }
  }
}