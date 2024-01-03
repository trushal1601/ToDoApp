import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);
  useEffect(() => {
    alert("clicked ");
  },[count]);
  const Press = () => {
    setCount(count + 1);
  };
  const Presss = () => {
    setCounts(counts + 1);
  };
  return (
    <>
      <button onClick={Press}> click me {count}</button>
      <button onClick={Presss}> click me {counts}</button>
    </>
  );
};
export default UseEffectExample;
