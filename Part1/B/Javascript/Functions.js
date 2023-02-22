
// There are two ways to reference the function;
// one is giving a name in a function declaration
// The function declaration defines a function with the specified parameters.

function product(a, b) {
    return a * b
}
// ---------------------------------------------------------------------------------------------->


// The other way to define the function is by using a function expression
// In this case, there is no need to give the function a name and the definition may reside among the rest of the code
// The function keyword can be used to define a function inside an expression.

const average = function(a, b) {
    return (a + b) / 2
}
// ---------------------------------------------------------------------------------------------->


// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;
// ---------------------------------------------------------------------------------------------->


// Before Arrow:

hello = function() {
    return "Hello World!";
}
// ---------------------------------------------------------------------------------------------->


// With Arrow Function:

hello = () => {
    return "Hello World!";
}
// ---------------------------------------------------------------------------------------------->


// Arrow Function With Parameters:

hello = (val) => "Hello " + val; 
// ---------------------------------------------------------------------------------------------->

// If there is just a single parameter, we can exclude the parentheses from the definition:
// If the function only contains a single expression then the braces are not needed.
// Arrow Function Without Parentheses:

hello = val => "Hello " + val; 
// ---------------------------------------------------------------------------------------------->


// Arrow Functions Return Value by Default:

hello = () => "Hello World!";
// ---------------------------------------------------------------------------------------------->
