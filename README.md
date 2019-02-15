# Prototypes

* They're kind of like cousins of classes... maybe?
* They are **not** classes
* Classes use prototypes
* Every object has a [[Prototype]]
* a [[Prototype]] is an object
* end of the line of [[Prototypes]] is `null`

```js
const chair = {
  legs: 4
};
```

```js
class Chair {
  constructor() {
    this.legs = 4;
  }
}
const chair = new Chair();
```

```js
function Chair() {
  this.legs = 4;
}
const chair = new Chair();
```

## How does property lookup work in JavaScript?

```js
const donkey = {
  hair: 'gray or grey',
  ears: 2,
  legs: true,
  friend: "shrek",
  makeSound() {
    console.log("bray");
  }
};
```

donkey.hair; 
Javascript will go to the donkey object, find the hair property and get the value for hair.

donkey.shout; 

1. Javascript goes to donkey, 
2. tries to find shout, 
3. can't find shout, 
4. tries to find shout on the [[Prototype]],
5. repeat step 3 and 4 until shout is found or
6. tell's you to watch yourself.

### [[Prototype]], __proto__, .prototype

* [[Prototype]] the idea of the prototype 
* `.__proto__` a way of accessing an object's [[Prototype]]
  - `Object.getPrototypeOf()`
  - `Object.setPrototypeOf()`
  - `Object.Create()`
* `.prototype`

### `.prototype` & functions

* every single `function` in JavaScript, has a property called `prototype`
* pretty much every time you see `Somthing.prototype`, the thing to the left of the dot is a function.
* the `.prototype` property is an object, an empty object.
* if we create a new object from the constructor function `new Thing();`, that function's `.prototype` will be the new object's [[Prototype]].
* Object, Array, String, Number, etc. are all functions. They are all **constructor** functions.

----

you can set properties to be non enumerable, but by default they will  shop up in a for loop (they will be enumerable)