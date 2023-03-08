// Version 16.8.0 of React introduces effect hooks as a new feature.
// https://reactjs.org/docs/hooks-effect.html

// The Effect Hook lets you perform side effects on function components.
// Data fetching, setting up a subscription,
// and manually changing the DOM in React components are all examples of side effects.
// ---------------------------------------------------------------------------------------------->


import { useEffect } from 'react'

const Component= () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3001/notes')

            .then(response => {
                setNotes(response.data)
            })
            
            .catch(error => {
                console.log(error)
            }
            )
    },[])

    return (
        <ul>
            {notes.map(e => (
                <li key={e.id}>{e.content}</li>
            ))}
        </ul>
    )
}

export default Component
// ---------------------------------------------------------------------------------------------->
