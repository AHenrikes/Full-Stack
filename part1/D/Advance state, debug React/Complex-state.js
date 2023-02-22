
// What if our application requires a more complex state?
// In most cases, the easiest and best way to accomplish this is by using the useState function multiple times to create separate "pieces"

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
  
    return (
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>

        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    )
}

// In the following code we create two pieces of state for the application named left and right that both get the initial value of 0.
// ---------------------------------------------------------------------------------------------->


// The component's state or a piece of its state can be of any type

{
    left: 0,
    right: 0
}

// We could implement the same functionality by saving the click count of both the left and right buttons into a single object.
// the application would look like this

const Bpp = () => {
    const [clicks, setClicks] = useState({
      left: 0, right: 0
    })
  
    const handleLeftClick = () => {
      const newClicks = { 
        left: clicks.left + 1, 
        right: clicks.right 
      }
      setClicks(newClicks)
    }
  
    const handleRightClick = () => {
      const newClicks = { 
        left: clicks.left, 
        right: clicks.right + 1 
      }
      setClicks(newClicks)
    }
  
    return (
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    )
}

// Upon button clicked, the function is called and re-renders the new state
// and the new value becomes the new state value
// ---------------------------------------------------------------------------------------------->



const handleLeftClick = () => {
    const newClicks = { 
        ...clicks, 
        left: clicks.left + 1 
    }
    setClicks(newClicks)
}

const handleRightClick = () => {
    const newClicks = { 
        ...clicks, 
        right: clicks.right + 1 
    }
    setClicks(newClicks)
}

// We can define the new state object a bit more neatly by using the object spread syntax (...)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// ---------------------------------------------------------------------------------------------->



const handleLeftClickB = () => setClicks({ ...clicks, left: clicks.left + 1 });

const handleRightClickB = () => setClicks({ ...clicks, right: clicks.right + 1 });

// Assigning the object to a variable in the event handlers is not necessary and we can simplify the function
// ---------------------------------------------------------------------------------------------->
