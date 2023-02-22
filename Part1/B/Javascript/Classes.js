
// CLASS --->
// Classes are a template for creating objects.
// They encapsulate data with code to work on that data. 
// Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

// In the following example we have a "class" declaration called Person and two objects:

class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }

    greet() {
      console.log('hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()   // hello, my name is Adam...

const janja = new Person('Janja Garnbret', 23)
janja.greet()   // hello, my name is Janja...
// ---------------------------------------------------------------------------------------------->
