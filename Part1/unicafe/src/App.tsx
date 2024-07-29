import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={ onClick }>{ text }</button>

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistic = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = ((good - bad) / all).toFixed(1)
  const positive = `${Math.round((good / all) * 100)} %`

  return all === 0 ? (
    <tbody>
      <tr>
        <td>
          No feedback given
        </td>
      </tr>
    </tbody>

  ) : (
    <tbody>
      <StatisticLine text=' Good ' value={ good } />
      <StatisticLine text=' Neutral ' value={ neutral } />
      <StatisticLine text=' Bad ' value={ bad } />
      <StatisticLine text=' All ' value={ all } />
      <StatisticLine text=' Average ' value={ average } />
      <StatisticLine text=' Positive ' value={ positive } />
    </tbody>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (state, setState) => () => setState(state + 1)

  return (
    <div id='parentCtn' className='w-96 h-[350px]'>
      <h1>Give feedback</h1>

      <div id='buttonCtn'>
        <Button onClick={ increment(good, setGood) }  text='Good' />
        <Button onClick={ increment(neutral, setNeutral) }  text='Neutral' />
        <Button onClick={ increment(bad, setBad) }  text='Bad' />
      </div>

      <table>
        <tbody>
          <tr>
            <td>
              <h2>Statistics</h2>
            </td>
          </tr>
        </tbody>

        <Statistic good={ good } neutral= { neutral } bad= { bad } />
      </table>
    </div>
  )
}

export default App