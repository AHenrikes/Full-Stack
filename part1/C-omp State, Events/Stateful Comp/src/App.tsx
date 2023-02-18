import { useState } from 'react'

// useState is a Hook that lets you add React state to function components.


function App() {
  const [ counter, setCounter ] = useState(0)

  // Declare a new state variable, which we'll call "counter"
  // The counter variable is assigned the initial value of state which is zero.


  setTimeout(
    () => setCounter(counter + 1), 1000
    // setCounter is assigned to a function that will be used to modify the state.
  )

  console.log('rendering...', counter)

  return (
    <>
      {counter}
    </>
  )
}

export default App

// Hooks are a new addition in React
// They let you use state and other React features without writing a class.
// Hooks don’t work inside classes. But you can use them instead of writing classes.
