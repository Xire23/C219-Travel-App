import Item from "./Item.js"
function PackingList({ items, onDeleteItem, onUpdateItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              description={item.description}
              packed={item.packed}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateItem}
            />
          ))}
        </ul>
      </div>
    );
  }

export default PackingList;