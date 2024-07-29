import React, { useState, useEffect } from 'react';
import userServices from './services/api';
import Filter from './components/filter';
import Inputform from './components/input';
import './app.css'

interface User {
  name: string;
  number: string;
  id: string;
}

export const Notification = ({ className, children }: { className: string, children: string }) => {
  return (
    <h2 className={className}>
      {children}
    </h2>
  );
};

export default function App() {
  const [user, setUser] = useState<User[]>([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [msgNotification, setMsgNotification] = useState('');
  const [requestType, setRequestType] = useState('');

  useEffect(() => {
    userServices.getAll()
      .then(promises => setUser(promises.data))

      .catch(error => console.log(error));
  }, []);

  const filteredSearch = filter ? user.filter((values: User) => values.name.toLowerCase().includes(filter.toLowerCase())) : user;

  const addUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const visualNotification = (request: string, message: string) => {
      setRequestType(request);
      setMsgNotification(`${message}: ${newName}`);
    };

    const defaultState = () => {
      setMsgNotification('');
      setRequestType('');
    };

    setTimeout(() => defaultState(), 4000);

    const currentUser = user.find(user => user.name === newName);

    if (currentUser && currentUser.number !== newNumber) {
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace old number with new number?`);

      if (confirmUpdate) {
        const updateUser = { ...currentUser, number: newNumber };

        userServices
          .update(currentUser.id, updateUser)

          .then(response => {
            setUser(user.map(u => u.id === currentUser.id ? response.data : u));
            setNewName('');
            setNewNumber('');
            visualNotification('success', `Updated user`);
          })

          .catch(err => {
            visualNotification(`failed`, `Cannot find user`)
            console.error('Error while updating user')
          })
      }

    } else if (currentUser) {
      alert(`${newName} is already added to phonebook`);

    } else {
      const newUser = { name: newName, number: newNumber, id: (user.length + 1).toString() };

      userServices
        .create(newUser)

        .then(response => {
          setUser([...user, response.data]);
          setNewName('');
          setNewNumber('');
          visualNotification(`success`, `Added`)
        })

        .catch(error => console.log(`Error creating user`, error));
    }
  }

  const removeUser = (id: string) => {
    userServices
      .remove(id)

      .then(() => {
        const updatedUser = user.filter(u => u.id !== id);
        setUser(updatedUser);
      })

      .catch(error => console.log(`Error deleting user ${id}: ${error}`));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification className={requestType}>{msgNotification}</Notification>

      <Filter
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
      />

      <h2>Add number</h2>
      <Inputform
        onSubmit={addUser}
        newName={newName}
        onNameChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}
        newNumber={newNumber}
        onNumberChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewNumber(e.target.value)}
      />

      <h2>Numbers</h2>
      <ul>
        {filteredSearch.map((person: User) => (
          <li key={person.id}>{person.name} {person.number}
            <button onClick={() => { window.confirm(`Delete ${person.name} ?`) && removeUser(person.id) }}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
