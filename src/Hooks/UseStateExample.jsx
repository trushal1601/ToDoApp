import React, { useState } from "react";

const Apps = () => {
  let NewTime = new Date().toLocaleTimeString();
  const [count, setcound] = useState(NewTime);
  const IncNum = () => {
    NewTime = new Date().toLocaleTimeString();
    setcound(NewTime);
  };
  setInterval(IncNum, 1000);
  return (
    <>
      <h1> {count} </h1>
      {/* <button onClick={IncNum}>Click Me</button> */}
    </>
  );
};
export default Apps;
