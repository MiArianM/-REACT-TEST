import { useState } from "react";
import "../Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount % 5 === 0) {
      alert(`Count is now ${newCount}, which is a multiple of 5!`);
    }
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    if (newCount % 5 === 0) {
      alert(`Count is now ${newCount}, which is a multiple of 5!`);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button className="GoBut" onClick={increment}>
        +
      </button>
      <button className="GoBut" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
