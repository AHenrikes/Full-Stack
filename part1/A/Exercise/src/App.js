
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

function App() {
  const course = 'Half Stack application development'

  return (

    <div>
      <Header course={course}/>
      <Content />
      <Total paraG='Number of exercise ' />
    </div>
  )
}

export default App