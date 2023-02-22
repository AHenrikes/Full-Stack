import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

let counter = 1

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App counter={counter} />
    </React.StrictMode>,
  )
};

// The re-rendering command has been wrapped inside of the refresh function to cut down on the amount of copy-pasted code.
// ---------------------------------------------------------------------------------------------->


// refresh()
// counter += 1
// refresh()
// counter += 1
// refresh()

// Now the component renders three times
// ---------------------------------------------------------------------------------------------->


setInterval(() => {
  refresh()
  counter += 1
}, 1000)

// The setInterval() method, offered on the Window and Worker interfaces,
//  repeatedly calls a function or executes a code snippet,
//  with a fixed time delay between each call.
// ---------------------------------------------------------------------------------------------->


// Making repeated calls to the render method is not the recommended way to re-render components.
