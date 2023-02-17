import React from 'react'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => {
        return (
          <div key={part.name}>
            <span>{part.name} </span>
            <span>{part.exercises}</span>
          </div>
        );
      })}
    </div>
  )
}

export default Content
