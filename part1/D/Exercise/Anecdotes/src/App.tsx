import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  const next = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const vote = () => {
    const newVote = [...votes]
    newVote[selected] += 1
    setVote(newVote)
  }

  const mostVotes = Math.max(...votes)
  const mostVotedIndex = votes.indexOf(mostVotes)

  return (
    <div id='parentCtn'>
      <div className='grid w-96 h-96 gap-5'>
        <h1 className='text-2xl font-bold'>Anecdote of the day</h1>
        
        <p>{anecdotes[selected]}</p>

        <p>has {votes[selected]} votes</p>

        <button onClick={vote}>vote</button>

        <button onClick={next}>Next anecdotes</button>
      </div>

      <div className='grid w-96'>
        <h2 className='text-2xl font-bold'>Anecdote with the most votes</h2>

        <p>{anecdotes[mostVotedIndex]}</p>

        <p>has {mostVotes} votes</p>
      </div>
    </div>
  )
}

export default App