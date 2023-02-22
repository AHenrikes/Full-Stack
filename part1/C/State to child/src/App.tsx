import { useState } from 'react'
import Display from './Components/Display'
import Button from './Components/Button'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>

      <Button onClick={increaseByOne} text='plus' />
      
      <Button onClick={decreaseByOne} text='minus' /> 

      <Button onClick={setToZero} text='zero' /> 
    </div>
  )
}

export default App
