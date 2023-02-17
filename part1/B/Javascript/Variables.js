
// VAR --->
// wherever they occur, they are processed before any code is executed. This is called hoisting
// Duplicate variable declarations using var will not trigger an error, even in strict mode, and the variable will not lose its value
// --------------------------------------------------------------------------------------------->

// LET --->
// declares a block-scoped local variable
// allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the VAR keyword
// difference between VAR and LET is that the latter can only be accessed after its declaration is reached
// --------------------------------------------------------------------------------------------->

// CONST --->
// creates block-scoped constants
// The value of a constant can't be changed through reassignment and it can't be redeclared
// However, if a constant is an object or array its properties or items can be updated or removed. 
// ---------------------------------------------------------------------------------------------->

const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4          // causes an error
// ---------------------------------------------------------------------------------------------->
