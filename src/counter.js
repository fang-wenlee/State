import React, { useState } from "react";

function Counter(props) {
  //console.log(props);
  const { name, increment, decrement } = props;
  const [votes, setVotes] = useState(0);

  const handleIncrement = () => {
    setVotes(votes + 1);
    increment();
  };
  const handleDecrement = () => {
    setVotes(votes - 1);
    decrement();
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h2>
        {name} Counter: {votes}
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}
export default Counter;
