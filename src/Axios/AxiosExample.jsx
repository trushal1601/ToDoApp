import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample = () => {

  const [num, setNum] = useState();
  const [data, setData] = useState();

  const pikachuResponse = async () => {
    const res = await axios.get(" https://pokeapi.co/api/v2/location");
    console.log("ok:", res.data.results);
    setData(res.data.results);
    
  };

  const getLocationDetail = async() =>{
        data?.map((items)=>{
            console.log("okok",items.url)
            
        })
  }
  useEffect(() => {
    pikachuResponse();
    getLocationDetail();
  }, []);

  return (
    <>
      {data?.map((item) => {
        return (
          <>
            <h1>{item.name}</h1>
          </>
        );
      })}
      <h1>you choose {num} value</h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default AxiosExample;
