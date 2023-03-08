// How do we access the data contained in the form's input element?
// There are many ways to accomplish this
// ---------------------------------------------------------------------------------------------->


const App = (props) => {
    const [notes, setNotes] = useState(props.notes)


    const [newNote, setNewNote] = useState('a new note...') 
    // add a new piece of state called newNote for storing the user-submitted input


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
        {/* onSubmit calls addNote function */}

          <input placeholder={newNote} />
        {/* The placeholder text stored as the initial value of the newNote state  */}


          <button type="submit">save</button>
        </form>   
      </div>
    )
}
// ---------------------------------------------------------------------------------------------->

const App = () => {
    //...

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
        // event.target.value refers to the input value of that element
    }
    
    return  (
        <form onSubmit={addNote}>
            <input
              value={newNote}
    
              onChange={handleNoteChange}
            //   We have now registered an event handler to the onChange attribute
    
            />
    
            <button type="submit">save</button>
        </form> 
    )
}


// To enable editing of the input element,
// we have to register an event handler that synchronizes the changes made to the input with the component's state
// ---------------------------------------------------------------------------------------------->



const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    important: Math.random() < 0.5,
    id: notes.length + 1,
  }
  
  setNotes(notes.concat(noteObject))
  // The new note is added to the list of notes using the concat array method

  setNewNote('')
  // The event handler also resets the value of the controlled input element
  // by calling the setNewNote function of the newNote state
}

// we create a new object for the note called noteObject
// that will receive its content from the component's newNote state. 
// ---------------------------------------------------------------------------------------------->
