
const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>

            <button onClick={handleRightClick}>right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
        </div>
    )
}

// here we have the same function but now there's an array that
// shows what button was clicked
// the initial value of the array state is empty
// and appears as a <p> upon button clicked.
// Every click is stored in a separate piece of state called allClicks
// ---------------------------------------------------------------------------------------------->



const handleLeftClick = () => {
    allClicks.push('L')
    setAll(allClicks)
    setLeft(left + 1)
}

// it's also possible in JavaScript to add items to an array with the push method.
// However, don't do this. cuz the state of React components like allClicks must not be changed directly. Even if changin the state appears to work in some cases, it can lead to problems that are very hard to debug.
// ---------------------------------------------------------------------------------------------->



<p>{allClicks.join(' ')}</p>

// The join method on the allClicks array joins all the items into a single string
// ---------------------------------------------------------------------------------------------->
