import React, { useState } from "react";
const App = () => {
  const purple = "yellow";
  const [bg, setBg] = useState(purple);
  const bgChange = () => {
    let newBg = "brown";
    setBg(newBg);
  };
  return (
    <div style={{ backgroundColor: bg }}>
      <button onClick={bgChange}> Bg Change</button>
    </div>
  );
};
export default App;
