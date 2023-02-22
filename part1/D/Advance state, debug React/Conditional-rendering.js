const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}  
    </button>)
  
const App = () => {
    // ...
  
    return (
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />    </div>
    )
}

// The rendering of the clicking history is handled by a new History component
// The behavior of the component depends on whether or not any buttons have been clicked