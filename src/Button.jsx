const Button = ({ color = 'button', setColor }) => {
    return (
        <button
            onClick={() => setColor(color)}
            style={{ backgroundColor: color }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize">{color}
        </button>
    )
}

export default Button;