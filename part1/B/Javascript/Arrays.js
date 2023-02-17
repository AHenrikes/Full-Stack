
const a = [1, -1, 3]

a.push(5)

console.log(a.length) // 4 is printed
console.log(a[1])     // -1 is printed

a.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})

// FOREACH --->
// One way of iterating through the items of the array is using forEach as seen in the example.
// forEach calls the function for each of the items in the array, always passing the individual item as an argument.


// PUSH --->
// adds one or more elements to the end of an array and returns the new length of the array.
// In the previous example, a new item was added to the array using the method PUSH
// ---------------------------------------------------------------------------------------------->


const b = [1, -1, 3]

const b2 = b.concat(5)  // creates new array

console.log(b)  // [1, -1, 3] is printed
console.log(b2) // [1, -1, 3, 5] is printed


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); // ["a", "b", "c", "d", "e", "f"] is printed

// CONCAT --->
// In React code, it is preferable to use the method concat, which creates a new array with the added item.
// used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// ---------------------------------------------------------------------------------------------->


const c = [1, 2, 3]

const m1 = c.map(value => value * 2)
console.log(m1) // [2, 4, 6] is printed

// MAP --->
// Based on the old array, map creates a new array, for which the function given as a parameter is used to create the items
// Map can also transform the array into something completely different:

const m2 = c.map(value => '<li>' + value + '</li>')
console.log(m2)  // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed 

// Here an array filled with integer values is transformed into an array containing strings of HTML
// ---------------------------------------------------------------------------------------------->


const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed

// Individual items of an array are easy to assign to variables with the help of the destructuring assignment.
// The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// first and second will receive the first two integers of the array as their values. The remaining integers are "collected"
// ---------------------------------------------------------------------------------------------->
