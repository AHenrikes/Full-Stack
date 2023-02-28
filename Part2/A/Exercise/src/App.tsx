
const Courses = ({ course }: any)  => (
  <>
    {course.map((param1: any) => {
      const total = param1.parts.reduce((sum: number, parts: any) => sum + parts.exercises, 0)

      return (
        <div key={param1.id}>
          <h2>{param1.name}</h2>

          <ol>
            {param1.parts.map((param2: any) => (
              <li key={param2.id}>
                {param2.name} {param2.exercises}
              </li>
            ))}
          </ol>

          <ol><strong>total of {total} exercises</strong></ol>
        </div>
      )
    })}
  </>
)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },

        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },

        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },

        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 

    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      <Courses course={courses} />
    </>
  )
}

export default App