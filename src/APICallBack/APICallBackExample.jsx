import React, { useEffect, useState } from "react";


const APICallBackExample = () =>{
    const [data,setData] = useState([]);
    const getCoviData = async () =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const actualData = await res.json();
        console.log("data:",actualData);
        setData(actualData);
        console.log("frf",data.title);
    }
    useEffect(() =>{
        getCoviData();
    },[])
    return(
        <>
        <h1>hello</h1>
        {
            data.map((item) =>{
                return(
                    <>
                    <a> Title: {item.title}</a>
                   <br/>
                    <a> UserId: {item.userId}</a>
                    <br/>
                    </>
                )
            })
            
        }
        
        </>
    )
}

export default APICallBackExample;