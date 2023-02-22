import { useState } from 'react'

// function App() {
//   const [counter, setCount] = useState(0)

//   const handleClick = () => {
//     console.log('clicked')
//   }

//   return (
//     <>
//       <div>{counter}</div>

//       <button onClick={handleClick}>
//         plus
//       </button>
//     </>
//   )
// }

// export default App
// ---------------------------------------------------------------------------------------------->


// BETTER OPTIMIZED CODE

// function App() {
//   const [counter, setCount] = useState(0)


//   return (
//     <>
//       <div>{counter}</div>
// 
//       <button onClick={() => console.log('clicked')}>
//         plus
//       </button>
//     </>
//   )
// }

// export default App
// ---------------------------------------------------------------------------------------------->


// ADDING setCounter to event Handler

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <div>{counter}</div>

      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>

      <button onClick={() => setCounter(0)}>
        Zero
      </button>
    </>
  )
}

export default App