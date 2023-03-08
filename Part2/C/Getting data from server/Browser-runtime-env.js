// JSON Server
// https://github.com/typicode/json-server
// ---------------------------------------------------------------------------------------------->


{
    "notes": [
      {
        "id": 1,
        "content": "HTML is easy",
        "important": true
      },
      {
        "id": 2,
        "content": "Browser can execute only JavaScript",
        "important": false
      },
      {
        "id": 3,
        "content": "GET and POST are the most important methods of HTTP protocol",
        "important": true
      }
    ]
}

// file named "db.json" in the root directory
// ---------------------------------------------------------------------------------------------->


// "npm install -g json-server"
// npx json-server (--port 3001) --watch db.json
// ---------------------------------------------------------------------------------------------->


// http://localhost:3001/notes

// json-server stores all the data in the db.json file, which resides on the server
// In the real world, data would be stored in some kind of database
// ---------------------------------------------------------------------------------------------->


// first task is fetching the already existing notes
// fetch method is the modern way of fetching data, which is based on so-called promises

// Fetch -->
// https://developer.mozilla.org/en-US/docs/Web/API/fetch

// Promises -->
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// ---------------------------------------------------------------------------------------------->

// JavaScript engines are single-threaded, which means that they cannot execute code in parallel.
// As a result, it is a requirement in practice to use a non-blocking model for executing IO operations.

// JavaScript engines, or runtime environments follow the asynchronous model
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
// this requires all IO operations (with some exceptions) to be executed as non-blocking.

// Otherwise, the browser would "freeze" during, for instance, the fetching of data from a server.
// ---------------------------------------------------------------------------------------------->


// consequence of this single-threaded nature of JavaScript engines is that if some code execution takes up a lot of time, the browser will get stuck for the duration of the execution

setTimeout(() => {
    console.log('loop..')
    let i = 0
    while (i < 50000000000) {
      i++
    }
    console.log('end')
}, 5000)

// Everything would work normally for 5 seconds
// However, when the function defined as the parameter for setTimeout is run
// the browser will be stuck for the duration of the execution of the long loop.
// ---------------------------------------------------------------------------------------------->


// For the browser to remain responsive
// the code logic needs to be such that no single computation can take too long.
// ---------------------------------------------------------------------------------------------->
