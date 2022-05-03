import React, { useState } from "react";

function Counter2(props) {
  console.log(props);
  const { name, votes, addVotes } = props;

  const [count, setCouont] = useState(0);
  const increment = () => {
    setCouont(count + 1);
    addVotes(votes + 1);
  };
  const decrement = () => {
    setCouont(count - 1);
    addVotes(votes - 1);
  };
  return (
    <>
      <h1>
        {name} : Vote: {count}
      </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
export default Counter2;
