import PropTypes from 'prop-types';;

// conditional rendering
const Card = ({ title, desc, onRemove }) => {
  return (
    <div>
      <h3>{title}</h3>
      {
        desc ? <p>{desc}</p> : null
      }
      <button onClick={onRemove}>Remove Card</button>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
}

export default Card;