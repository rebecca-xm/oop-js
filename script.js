"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties available on all the instances created
  this.firstName = firstName;
  this.birthYear = birthYear;

  //! Avoid creating methods inside of a constructor function
  //! it's an awful practice performance-wise
  // this.calcAge = function() {
  //     const currYear =  new Date().getFullYear()
  //     console.log(currYear - this.birthYear)
  // }
};

// A new empty object is created
// The function is called, the this keyword is set to point at the new empty object
// The newly created object is linked to prototype
// The function automatically returns the empty object from the beginning (which no longer needs to be so)

const rebecca = new Person("Rebecca", 1991);
console.log(rebecca); // Person {firstName: 'Rebecca', birthYear: 1991}
// rebecca is an instance of Person
console.log(rebecca instanceof Person); // true

const daniela = new Person("Daniela", 1959);
const giuseppe = new Person("Giuseppe", 1953);
console.log(daniela, giuseppe);

console.log(Person.prototype);

Person.prototype.calcage = function () {
  const currYear = new Date().getFullYear();
  console.log(currYear - this.birthYear);
};
// this method can now be used on the desired object
// even though it's not really on the object itself
// the access is granted by the prototypal inheritance

rebecca.calcage();

console.log(rebecca.__proto__ === Person.prototype); // true
// the object prototype property is the same prototype property of the Person constructor function
console.log(Person.prototype.isPrototypeOf(rebecca)); // true
// this confirms one more time that Person.prototype is indeed the prototype of rebecca
console.log(Person.prototype.isPrototypeOf(Person)); // false
// the fact that the property is called prototype does not mean it is indeed the prototype of Person
// because it is actually not
// it's the prototype of the linked objects

Person.prototype.species = "Homo Sapiens";
// the new property will be inside of [[Prorotype]], not the object itself
console.log(rebecca.hasOwnProperty("firstName")); // true
console.log(rebecca.hasOwnProperty("species")); // false
