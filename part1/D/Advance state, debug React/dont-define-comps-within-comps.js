
// This is the right place to define a component
const Autton = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
  
  const App = () => {
    const [value, setValue] = useState(10)
  
    const setToValue = newValue => {
      console.log('value now', newValue)
      setValue(newValue)
    }
  
    // Do not define components inside another component
    const Display = props => <div>{props.value}</div>
    return (
      <div>
        <Display value={value} />
        <Button handleClick={() => setToValue(1000)} text="thousand" />
        <Button handleClick={() => setToValue(0)} text="reset" />
        <Button handleClick={() => setToValue(value + 1)} text="increment" />
      </div>
    )
}

// don't implement components like this!
// Never define components inside of other components
// This method provides no benefits and leads to many unpleasant problems.
// ---------------------------------------------------------------------------------------------->



const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Bpp = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

// The correct way to write components 
// ---------------------------------------------------------------------------------------------->
