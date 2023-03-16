const ListItem = ({ text, onDelete, position }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => onDelete(position)}>Delete</button>
    </div>
  )
}

export default ListItem;