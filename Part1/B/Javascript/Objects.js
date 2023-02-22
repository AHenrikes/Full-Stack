
// There are a few different ways of defining objects in JavaScript. One very common method is using object literals, which happens by listing its properties within braces:

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },

    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

// The values of the properties can be of any type, like integers, strings, arrays, objects...
// The properties of an object are referenced by using the "dot" notation, or by using brackets:

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed

// You can also add properties to an object on the fly by either using dot notation or brackets:

object1.address = 'Helsinki'
object1['secret number'] = 12341

// The latter of the additions has to be done by using brackets because when using dot notation, secret number is not a valid property name because of the space character.
// ---------------------------------------------------------------------------------------------->
