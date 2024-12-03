function Item({ id, quantity, description, packed, onDeleteItem, onUpdateItem }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => onUpdateItem(id)}
        />
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {description} ({quantity})
        </span>
        <button onClick={() => onDeleteItem(id)}>❌</button>
      </li>
    );
  }
export default Item;