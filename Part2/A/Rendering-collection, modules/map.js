// Understanding how the array method map works is crucial

const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      important: true
    }
]

const result = notes.map(note => note.id)
console.log(result) // [1, 2, 3]

// map always creates a new array
// ---------------------------------------------------------------------------------------------->
