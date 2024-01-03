import React from "react";
function Card(props) {
  return (
    <>
      {/* <Heading10 /> 
     <div>
     <h1>Hello Sir, <span style={cssStyle}> {greeting}</span></h1>
     <ul>
       <li>sum of 2 number is: { sum(10,2) } </li>
     </ul>
     </div> */}
      <div className="cards">
        <div className="card">
          <img
            style={{ height: 200, width: 200 }}
            src={props.imgsrc}
            alt="myPic"
            className="card__img"
          />
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a
              style={{ height: 200, width: 200 }}
              href={props.link}
              target="_blank"
            >
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;