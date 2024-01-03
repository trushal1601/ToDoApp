import React from "react";
import { FirstName } from "./Appp";
const Con3 = () => {
   return (
    <FirstName.Consumer >{(fname) =>{
        return <h1>{fname}</h1>
    }}</FirstName.Consumer>
   )
};

export default Con3;