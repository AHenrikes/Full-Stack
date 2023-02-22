
// A large part of a typical developer's time is spent on debugging and reading existing code.
// Every now and then we do get to write a line or two of new code,
// but a large part of our time is spent trying to figure out why something is broken or how something works.
// ---------------------------------------------------------------------------------------------->



// Old-school, print-based debugging is always a good idea.

const Autton = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

// If the component is not working as intended, it's useful to start printing its variables out to the console.

const Button = (props) => { 
    console.log(props)
    
    const { handleClick, text } = props
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
}

// In order to do this effectively, we must transform our function into the less compact form
// This will immediately reveal if, for instance, one of the attributes has been misspelled
// ---------------------------------------------------------------------------------------------->



// Logging output to the console is by no means the only way of debugging
// by writing the command 'debugger' anywhere in your code
// The execution will pause once it arrives at a point where the debugger command gets executed

// It is highly recommended to add the React developer tools extension
// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
// ---------------------------------------------------------------------------------------------->
