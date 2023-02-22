
// const Hello = (props) => {
//   console.log(props);
//   return(
//     <div>
//       <p>
//       Hello world {props.name},
//       you are {props.age} years old

//       </p> 
//     </div> 
//   ) 
// }

const App = () => {
  // const name = 'Peter'
  // const age = '10'

  // const friends = [
  //   { name: 'Peter', age: '10'},
  //   { name: 'Maya', age: '30'}
  // ];

  const friends = ['Peter', 'Maya']

  return (
    <>
      {/* <h1>greetings</h1> */}

      {/* <p> {friends[1].name} {friends[1].age} </p>
      <p> {friends[0].name} {friends[0].age} </p> */}

      {/* <Hello name='Maya' age={26+10} />
      <Hello name={name} age={age} /> */}

      <p>{friends}</p>
    </>
  )
}

export default App
