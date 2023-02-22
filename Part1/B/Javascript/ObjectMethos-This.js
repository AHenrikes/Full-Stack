
// THIS --->
// behaves a little differently compared to other languages and has some differences between strict mode and non-strict mode
// In most cases, the value of THIS is determined by how a function is called
// The value of THIS depends on in which context it appears: function, class, or global

// When calling the method through a reference, the method loses knowledge of what the original THIS was.
// ---------------------------------------------------------------------------------------------->


const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {    console.log('hello, my name is ' + this.name)  },
}
arto.greet()  // "hello, my name is Arto Hellas" gets printed

// We can assign methods to an object by defining properties that are functions:
// ---------------------------------------------------------------------------------------------->


const barto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
}
  
barto.growOlder = function() {  this.age += 1}
console.log(barto.age)   // 35 is printed
barto.growOlder()
console.log(barto.age)   // 36 is printed

// Methods can be assigned to objects even after the creation of the object:
// ---------------------------------------------------------------------------------------------->


// Losing track of THIS when writing JavaScript code brings forth a few potential issues. 
// However, we avoid these issues by using "this-less" JavaScript.
// ---------------------------------------------------------------------------------------------->


// One situation leading to the "disappearance" of this arises when we set a timeout to call the greet function on the arto object, using the setTimeout function.

const carto = {
    name: 'Arto Hellas',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
}

setTimeout(carto.greet, 1000)  // hello, my name is undefined

// There are several mechanisms by which the original THIS can be preserved.
// One of these is using a method called bind:

setTimeout(carto.greet.bind(carto), 1000)  // hello, my name is Arto Hellas

// Calling "carto.greet.bind(carto)"" creates a new function where this is bound to point to Carto, independent of where and how the method is being called.
// ---------------------------------------------------------------------------------------------->


// Using arrow functions it is possible to solve some of the problems related to this.
// They should not, however, be used as methods for objects because then this does not work at all. 
