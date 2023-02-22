
// DESTRUCTURING EXAMPLES --->

const Allo = (props) => {
    const name = props.name
    const age = props.age

    props = {
        name: 'Arto Hellas',
        age: 35,
    }

    const bornYear = () => new Date().getFullYear() - age
  
    return (
      <div>
        <p>Hello {name}, you are {age} years old</p>

        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
};
// CODE EXAMPLE (OPTIMIZED)
// ---------------------------------------------------------------------------------------------->

const AornYear = () => new Date().getFullYear() - age

const BornYear = () => {
  return new Date().getFullYear() - age
}
// CODE EXAMPLE (BOTH MEAN THE SAME)
// ---------------------------------------------------------------------------------------------->


const Bello = (props) => {
    const { name, age } = props
    const bornYear = () => new Date().getFullYear() - age

    props = {
        name: 'Arto Hellas',
        age: 35,
      }

    return (
      <div>
        <p>Hello {name}, you are {age} years old</p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
}
// CODE EXAMPLE (Destructed)
// ---------------------------------------------------------------------------------------------->


const Cello = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age

    return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
}

// CODE EXAMPLE (Destruction Optimized)
// ---------------------------------------------------------------------------------------------->


const Dello = (props) => {
    const { name, age } = props
}

const Hello = ({ name, age }) => {}
// CODE EXAMPLE (BOTH MEAN THE SAME)
// ---------------------------------------------------------------------------------------------->
