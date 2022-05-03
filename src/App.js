import "./styles.css";
import React, { useState } from "react";

import Counter from "./counter";
export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>total count: {count}</h1>
      <Counter name="Fang" increment={increment} decrement={decrement} />
      <Counter name="Dave" increment={increment} decrement={decrement} />
    </div>
  );
}
