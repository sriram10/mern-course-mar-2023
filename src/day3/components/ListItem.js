import PropTypes from 'prop-types';

const ListItem = ({ text='', onDelete=()=>{}, position=0 }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => onDelete(position)}>Delete</button>
    </div>
  )
}

// ListItem.defaultProps = {
//   text: '',
//   onDelete: () => {},
//   position: 0
// }

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired
}
export default ListItem;