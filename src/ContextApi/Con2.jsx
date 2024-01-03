import React from "react";
import Con3 from "./Con3";
import { useContext } from "react";
import { FirstName , LastName } from "./Appp";
const Con2 = () => {
    const fname = useContext (FirstName);
    const lname = useContext (LastName);
    
    console.log(fname,lname);
    return (
        <h1>{fname}  {lname}</h1>
    )
};

export default Con2;