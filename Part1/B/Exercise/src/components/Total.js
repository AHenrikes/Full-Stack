import React from 'react';

const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (acc, part) => acc + part.exercises, 0
  )

  return (
    <div>
      <p>Total number of exercises: {totalExercises}</p>
    </div>
  )
};

export default Total;
