import React from 'react'
import Part1 from './Parts/Part1'
import Part2 from './Parts/Part2'
import Part3 from './Parts/Part3'

const Content = () => {

  return (
    <div>
      <Part1 part='Fundamental of React' exercise={10} />
      <Part2 part='Using props to pass data' exercise={7} />
      <Part3 part='State of component' exercise={14} />
    </div>
  )
}

export default Content
