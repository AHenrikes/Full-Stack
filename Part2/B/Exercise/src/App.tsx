import { useState } from 'react'

// comp for search input of person list
const Filter = ({ value, onChange  }: any) => (
  <>
    filter shown with: <input placeholder='Search' value={value} onChange={onChange} />
  </>
)

// input comp that handles personForm
const PersonForm = ({ onSubmit, newName, onNameChange, newNumber, onNumberChange }: any) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input  placeholder='add name' value={newName} onChange={onNameChange} />
    </div>

    <div>
      number: <input  placeholder='add number' value={newNumber} onChange={onNumberChange} />
    </div>

    <button type="submit">Add</button>
  </form>
)

// comp to render the list of person
const Persons = ({ name, number }: any) => (
  <li>{name} {number}</li>
)

const App = () => {
  // State that stores/add the list of ppl
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  // States that for adding names/numbers into person state
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // A functin that handles adding new names/numbers into person list
  // has a function that alerts if there are duplicates in person list
  const addNew = (event: any) => {
    event.preventDefault()
    if(persons.some(e => e.name === newName || e.number === newNumber)) {
      alert(`${newName} or ${newNumber} is already added to phonebook`)
      return
    }
    setPersons([...persons, {name: newName, number: newNumber, id: persons.length + 1}])
    setNewName('')
    setNewNumber('')
  }

  // function that filteres persons list on search
  const filteredSearch = filter ? persons.filter((event) => event.name.toLowerCase().includes(filter.toLowerCase())) : persons

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        <Filter 
          value={filter}
          onChange={(e: any) => setFilter(e.target.value)}
        />
      </div>

      <div>
        <h3>Add a new</h3>

        <PersonForm 
          onSubmit={addNew}
          newName={newName}
          onNameChange={((e: any) => setNewName(e.target.value))}
          newNumber={newNumber}
          onNumberChange={((e: any) => setNewNumber(e.target.value))}
        />
      </div>

      <div>
        <h3>Numbers</h3>

        <ul>
          {filteredSearch.map((persons: any) => (
            <Persons key={persons.id} name={persons.name} number={persons.number} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App