import React from "react";

export default function Mapex() {
  const data = [
    {
      fields: {
        ID: "CU00048376",
        Gender: "M.",
        FirstName: "Benjamin",
        LastName: "Verret",
      },
    },
    {
      fields: {
        ID: "CU01499303",
        Gender: "Miss",
        FirstName: "Dianne",
        LastName: "Straka",
      },
    },
  ];
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div
              style={{ backgroundColor: "gray", width: "20%", padding: "40px",marginTop:"20px",borderRadius:10 }}
            >
              <h1>{item.fields.ID}</h1>
              <h2>{item.fields.Gender} {item.fields.FirstName}</h2> 
              {/* <h3>{item.fields.FirstName}</h3> */}
              <h4>LastName: {item.fields.LastName}</h4>
            </div>
          </>
        );
      })}
    </>
  );
}