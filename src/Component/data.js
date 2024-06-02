import React, { useState } from "react";

const DataC = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    if (count < 20) {
      setCount(count + 1);
    }
    else {
      alert("count always return max 20")
    }
  };

  const handleSub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      alert("count do not  return negative value ")
    }
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleAdd}>Add</button>
      <br />
      <button onClick={handleSub}>Sub</button>
    </div>
  );
};

export default DataC;
