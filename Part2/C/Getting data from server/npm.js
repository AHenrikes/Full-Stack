// We could use the previously mentioned promise-based function fetch to pull the data from the server.
// That being said, we will be using the axios library instead for communication between the browser and server.

// Nowadays, practically all JavaScript projects are defined using the node package manager,
// AKA "npm" https://docs.npmjs.com/about-npm
// ---------------------------------------------------------------------------------------------->


// "npm install axios"
// what this does. It installs axios library into project dependency and from there it can be used


// "npm install json-server --save-dev"
// here '--save-dev' means (only used during development)


// npm-commands should always be run in the project root directory
// which is where the package.json file can be found
// ---------------------------------------------------------------------------------------------->


{
    // ... 
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "server": "json-server -p3001 --watch db.json"  },
}

// making a small addition to the scripts part of the package.json file
// You can now conveniently, without parameter definitions, start the json-server from the project root directory with the command

// "npm install json-server -D"
// then run -->
// "npm run server"
// ---------------------------------------------------------------------------------------------->
