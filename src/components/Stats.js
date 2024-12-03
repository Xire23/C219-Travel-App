function Stats({ items }) {
    const total = items.length;
    const packed = items.filter((item) => item.packed).length;
    const percentage = total === 0 ? 0 : Math.round((packed / total) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything!"
            : `You have ${total} items in the list. You already packed ${packed} (${percentage}%).`}
        </em>
      </footer>
    );
  }

export default Stats;