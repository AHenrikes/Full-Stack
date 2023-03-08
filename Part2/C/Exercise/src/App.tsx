import { useState, useEffect } from 'react';
import axios from 'axios';

interface AppT {
  name: string,
  number: number,
  id: number
}

// A comp that renders search input for person list
const Filter = ({ value, onChange }: any) => (
  <>
    filter shown with: <input placeholder='Search' value={value} onChange={onChange} />
  </>
);

// A comp that renders input for adding names/numbers
const PersonForm = ({ onSubmit, newName, onNameChange, newNumber, onNumberChange }:any) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input placeholder='add name' value={newName} onChange={onNameChange} />
    </div>

    <div>
      number: <input placeholder='add number' value={newNumber} onChange={onNumberChange} />
    </div>

    <button type='submit'>Add</button>
  </form>
);

// A comp that renders list of person
const Person = ({ name, number }: any) => (
  <li>{name} {number}</li>
)

const App = () => {
  // state to store existing/adding names and numbers
  const [user, setUser] = useState<any[]>([]);

  // state for adding name
  const [newName, setNewName] = useState('');

  // state for adding numbers
  const [newNumber, setNewNumber] = useState('');

  // state for filtered search
  const [filter, setFilter] = useState('')

  // function that fetches data from json file
  useEffect(() => {
    axios
      .get('http://localhost:3000/persons')

      .then(promises => {
        setUser(promises.data)
      })

      .catch(error => {
        console.log(error);
      })
  },[])

  // function that adds new value names/numbers into storage state
  // on submit prevents reloading
  // also alerts if there are duplicates
  const addUser = (e: any) => {
    e.preventDefault()
    if(user.some((e: any) => e.name === newName || e.number === newNumber)) {
      alert(`${newName} or ${newNumber} is already in the phonebook `)

    } else {
      const newUser = {name: newName, number: newNumber, id: user.length + 1};

      axios
        .post('http://localhost:3000/persons', newUser)

        .then(response => {
          setUser([...user, response.data])
          setNewName('')
          setNewNumber('')
        })

        .catch(error => {
          console.log(error)
        })
    }
  }

  // function for filtered search
  const filteredSearch = filter ? user.filter((values: any) => values.name.toLowerCase().includes(filter.toLowerCase)) : user ;

  return (
    <>
      <h1>Phonebook</h1>
      <Filter 
          value={filter}
          onChange={(e: any) => setFilter(e.target.value)}
      />

      <h2>Add number</h2>
      <PersonForm 
        onSubmit={addUser} 
        newName={newName}
        onNameChange={(e: any) => setNewName(e.target.value)}
        newNumber={newNumber}
        onNumberChange={(e: any) => setNewNumber(e.target.value)}
      />

      <h2>Numbers</h2>
      <ul>
        {filteredSearch.map((person: any) => (
          <Person key={person.id} name={person.name} number={person.number} />
        ))}
      </ul>
    </>
  )
}

export default App
