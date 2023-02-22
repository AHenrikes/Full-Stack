import { useState } from "react"
import Statistics from "./components/Statistics"
import Button from "./components/Button"

const Total = (props) => {
  return props.total === 0 ? (
    <p className="font-light">{props.total} feedbacks</p>
  ) : (
    <p className="font-light">Total feedBacks ( {props.total} )</p>
  )
}

const App = () => {
  const [good, setGood] = useState({ value: 0, isHovered: false })
  const [neutral, setNeutral] = useState({ value: 0, isHovered: false })
  const [bad, setBad] = useState({ value: 0, isHovered: false })

  const increment = (state, setState) => () => {setState({ ...state, value: state.value + 1 })}

  const all = good.value + neutral.value + bad.value

  return (
    <div id="parentCtn" className="h-screen w-screen text-center">
      <h1 className="text-5xl font-light">Give Feedback</h1>

      <div className="grid text-center gap-10">
        <div id="btnCtn" className="grid gap-7">
          <Button
            text="Good"
            value={good.value}
            isHovered={good.isHovered}
            onMouseEnter={() => setGood({ ...good, isHovered: true })}
            onMouseLeave={() => setGood({ ...good, isHovered: false })}
            onClick={increment(good, setGood)}
          />

          <Button 
            text='Meh'
            value={neutral.value}
            isHovered={neutral.isHovered}
            onMouseEnter={() => setNeutral({ ...neutral, isHovered: true })}
            onMouseLeave = {() => setNeutral({ ...neutral, isHovered: false })}
            onClick={increment(neutral, setNeutral)}
          />

          <Button 
            text='Bad'
            value={bad.value}
            isHovered={bad.isHovered}
            onMouseEnter={() => setBad({ ...bad, isHovered: true })}
            onMouseLeave = {() => setBad({ ...bad, isHovered: false })}
            onClick={increment(bad, setBad)}
          />
        </div>

        <Total total={all}/>
      </div>

      <Statistics good={good.value} neutral={neutral.value} bad={bad.value} />
    </div>
  )
}

export default App