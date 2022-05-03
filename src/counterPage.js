import React, { useState } from "react";
import Counter from "./components/counter";

function CounterPage() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>This is a parent Component: {count}</h1>
      <Counter name="Fang" increment={increment} decrement={decrement} />
      <Counter name="Dave" increment={increment} decrement={decrement} />
    </>
  );
}

export default CounterPage;
