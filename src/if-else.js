import React from "react";

const Ifelseex = () => {
  const name = "kihan";
  const Ifelseexp = () => {
    if (name == "kishan") {
      return <h1>Nandi</h1>;
    } else {
      return <h1>Anshu Bhadaj</h1>;
    }
  };
  return (
    <>
      <h1>jgsfgl</h1>
      {/* <Ifelseexp /> */}
       {name == "kishan" ? <h1>Nandi</h1>: <h1>Anshu Bhadaj</h1>}
    </>
  );
};
export default Ifelseex;
