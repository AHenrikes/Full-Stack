
<button onClick={() => setCounter(counter + 1)}> 
  plus
</button>

// <button onClick={setCounter(counter + 1)}> 
//   plus
// </button>

// Event Handlers are Functions
// this event handler is a function call.
// removing the function from it will cause errors
// In many situations this is ok, but not in this particular situation.

// Usually defining event handlers within JSX-templates is not a good idea.
// Here it's ok, because our event handlers are so simple.
// ---------------------------------------------------------------------------------------------->


import { useState } from "React";

const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const increaseByOne = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)

    return (
      <div>
        <div>{counter}</div>

        <button onClick={increaseByOne}>
            plus
        </button>

        <button onClick={setToZero}>
            zero
        </button>
      </div>
    )
}

// Here, the event handlers have been defined correctly.
// ---------------------------------------------------------------------------------------------->
