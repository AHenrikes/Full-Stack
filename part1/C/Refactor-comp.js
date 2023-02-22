
const Aisplay = (props) => {
    return (
      <div>{props.counter}</div>
    )
}

// The component displaying the value of the counter is as follows.
// ---------------------------------------------------------------------------------------------->


const Bisplay = ({ counter }) => {
    return (
      <div>{counter}</div>
    )
}

// The component only uses the counter field of its props.
// This means we can simplify the component by using destructuring.
// ---------------------------------------------------------------------------------------------->


const Cisplay = ({ counter }) => <div>{counter}</div>

// Contains only one return statement.
// So we can simplify it even more
// Now its a oneliner
// ---------------------------------------------------------------------------------------------->


const Autton = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
}

// Not simplyfied


const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
)

// Simplyfied


const Cutton = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

// Simplyfied further
// ---------------------------------------------------------------------------------------------->
