import { useState } from 'react'import Note from './components/Note'

const App = (props) => {  const [notes, setNotes] = useState(props.notes)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App

// To get our page to update when new notes are added
// it's best to store the notes in the App component's state.
// The component uses the useState function to initialize the piece of state stored in notes
// ---------------------------------------------------------------------------------------------->



const App = () => { 
    const [notes, setNotes] = useState([]) 
  
    // ...
}

// If we wanted to start with an empty list of notes, we would set the initial value as an empty array,
// ---------------------------------------------------------------------------------------------->



const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
  
    const addNote = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
    }

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => 
                <Note key={note.id} note={note} />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

// The event handler immediately calls the event.preventDefault() method. 
// which prevents the default action of submitting a form. 
// The default action would, among other things, cause the page to reload.
// The target of the event stored in event.target
// ---------------------------------------------------------------------------------------------->



import React, { useState } from 'react'
import Note from './components/Note'


const App = (props: any) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('add new note')

  const addNote = (event: any) => {
    event.preventDefault()
    
    const value = {
      content: newNote,
      id: notes.length +1,
      importance: Math.random() > .5
    }
    // we create a new object for the note
    // that will receive its contents

    setNotes(notes.concat(value))
    // The new note is added to the list of notes using the concat array method

    setNewNote('')
    // The event handler also resets the value of the controlled input element by
    // calling the setNewNote function of the newNote state
  }
  
  const handleChange = (event: any) => {
    setNewNote(event.target.value)
  }

  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((note: any) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input 
          placeholder={newNote}
          onChange={handleChange} />
        <button type="submit" >Save</button>
      </form>
    </>
  )
}

export default App
// ---------------------------------------------------------------------------------------------->
