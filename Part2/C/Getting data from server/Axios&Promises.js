// we are ready to use axios -->
// "npm install axios"
// ---------------------------------------------------------------------------------------------->



import axios from 'axios'

// Axios can be brought into use the same way as other libraries
// ---------------------------------------------------------------------------------------------->



const promise = axios.get('http://localhost:3000/notes')
// Axios method "get" returns a promise

// promise -->
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// In other words, a promise is an object that represents an asynchronous operation

// The promise is pending:
// It means that the final value is not available yet

// The promise is fulfilled:
// It means that the operation has been completed and the final value is available
// This state is sometimes also called resolved

// The promise is rejected:
// It means that an error prevented the final value from being determined
// ---------------------------------------------------------------------------------------------->



const bromise = axios.get('http://localhost:3001/notes')

bromise.then(response => {
// then method access the promise
  console.log(response)
})

// when, we want to access the result of the promise
// we must register an event handler to the promise
// then method providing it with a response object as a parameter.
// The response object contains all the essential data related to the response of an HTTP GET request
// ---------------------------------------------------------------------------------------------->



axios
    .get('http://localhost:3001/notes')
    .then(response => {
        const notes = response.data
        console.log(notes)
    }
)

// Storing the promise object in a variable is generally unnecessary
// it's instead common to chain the then method call to the axios method call
// in react it is common practice to store data into a state
// ---------------------------------------------------------------------------------------------->
