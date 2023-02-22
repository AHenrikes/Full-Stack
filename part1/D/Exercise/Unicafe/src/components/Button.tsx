
const Button = ({ onClick, text, value, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
      <button
        className="hover:scale-105 transition"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} >

        {isHovered ? value : text}
      </button>
  )
}

export default Button
