// Functional component

import { useState } from "react";

export default function User({ name }) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>Instagram: @aks__g</h4>
    </div>
  );
}
