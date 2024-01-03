import React, { createContext } from "react";
import Con1 from "./Con1";

const FirstName = createContext();
const LastName = createContext();
const Appp = () => {
  return (
    <>
      
      <FirstName.Provider value={"Trushal"}>
        
        
      
      <LastName.Provider value={"Prajapti"}>
        <Con1 />
      </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};
export default Appp;
export { FirstName,LastName};
