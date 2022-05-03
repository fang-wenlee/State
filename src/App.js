import "./styles.css";
import React, { useState } from "react";
import CounterPage from "./counterPage";
import Counter2 from "./components/counter2";
export default function App() {
  //this is use for Counter 2
  const [votes, addVotes] = useState(0);

  return (
    <div className="App">
      <CounterPage />
      <h2>Sum: {votes} </h2>
      <Counter2 name="Counter Sample 1: " votes={votes} addVotes={addVotes} />
      <Counter2 name="Counter Sample 2: " votes={votes} addVotes={addVotes} />
    </div>
  );
}
