// A comp that renders input for adding name and number
const PersonForm = ({ onSubmit, newName, onNameChange, newNumber, onNumberChange }: any) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input placeholder='add name' value={newName} onChange={onNameChange} required/>
    </div>

    <div>
      number: <input placeholder='add number' value={newNumber} onChange={onNumberChange} required/>
    </div>

    <button type='submit'>Add</button>
  </form>
);
export default PersonForm
