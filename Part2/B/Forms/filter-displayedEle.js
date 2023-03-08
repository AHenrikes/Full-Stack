// Add some new functionality to our application that allows us to only view the important notes



const App = (props) => {
    const [notes, setNotes] = useState(props.notes) 
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)  
    // ...
}

// add a piece of state to the App component that keeps track of which notes should be displayed
// ---------------------------------------------------------------------------------------------->



const Bapp = (props) => {
    ///...
    const [showAll, setShowAll] = useState(true)

    // ...

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)
    // The definition uses the conditional operator
    // Filtering is done with the help of the array filter method
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  

  return (
    <div>
        {/* //... */}
      <ul>
        {notesToShow.map(note =>
            <Note key={note.id} note={note} />
        )}
      </ul>
      {/* // ... */}
    </div>
  )
}

// change the component so that it stores a list of all the notes to be displayed in the notesToShow variable
// The items on the list depend on the state of the component
// ---------------------------------------------------------------------------------------------->



const Capp = (props) => {
    //....
    const [showAll, setShowAll] = useState(true)

    // ...

  return (
    <div>
        <h1>Notes</h1>

        <div>
            <button onClick={() => setShowAll(!showAll)}>
                {/* The displayed notes (all versus important) are controlled with a button */}
                {/* The event handler toggles the value of showAll from true to false and vice versa */}

                show {showAll ? 'important' : 'all' }
                {/* The text of the button depends on the value of the showAll state */}
            </button>
        </div>

        <ul>
            {/* //... */}
        </ul>
      {/* // ...     */}
    </div>
  )
}

// add functionality that enables users to toggle the showAll state of the application from the user interface
// ---------------------------------------------------------------------------------------------->
