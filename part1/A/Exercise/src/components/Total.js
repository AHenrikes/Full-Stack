
import React from 'react'

const Total = ({ paraG }) => {
    const exercise = [10, 7, 14]

    return (

        <div>
            <p> {paraG} {exercise.reduce((total, number) => total + number)} </p>
        </div>
    )
};
  
export default Total
