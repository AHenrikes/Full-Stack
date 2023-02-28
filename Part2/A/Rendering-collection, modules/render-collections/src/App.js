
const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        {/* A single note is rendered by accessing the objects in the array by referring to a hard-coded index number: */}
        <hr></hr>

        {/* This is, of course, not practical.
        We can improve on this by generating React elements from the array objects using the map function. */}
        {notes.map(note => <li>{note.content}</li>)}
        
        <hr></hr>

        <li>{notes[2].content}</li>
      </ul>
    </div>
  )
}

export default App;
