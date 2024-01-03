import React from 'react';
import ReactDOM from 'react-dom';
import UseEffectExample from './Hooks/UseEffectExample';
// import "./index.css"
// import Heading10 from './Heading';
// import sum from './Calc';
// import Card from './Cards';
// import Sdata from './Sdata';
// import Mapex from './mapexmaple';
// import Ifelseex from './if-else';
// import App from './Hooks/UseStateExample';
// import App from './App';
import Apps from './TODOAPP/Apps';
import "./index.css";
// import Appp from './ContextApi/Appp';
// import APICallBackExample from './APICallBack/APICallBackExample';
// import AxiosExample from './Axios/AxiosExample';


// let curDate = new Date(2020,5,5,2);
// curDate = curDate.getHours();
// let greeting="";
// const cssStyle={};
// if(curDate >= 1 && curDate<12){
//   greeting = "Good Morning";
//   cssStyle.color="green";
// }
// else if(curDate >=12 && curDate<19){
//   greeting = "Good Afternoon";
//   cssStyle.color="orange";
// }
// else{
//   greeting = "Good Night";
//   cssStyle.color="black";
// }
ReactDOM.render(
  <>
  {/* <Card
  imgsrc={Sdata[0].imgsrc}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].link}
  />
  <Card
  imgsrc={Sdata[1].imgsrc}
  title={Sdata[1].title}
  sname={Sdata[1].sname}
  link={Sdata[1].link}
  />
  <Card
  imgsrc={Sdata[2].imgsrc}
  title={Sdata[2].title}
  sname={Sdata[2].sname}
  link={Sdata[2].link}
  /> */}
  {/* <Mapex /> */}
  {/* <Ifelseex/> */}
  <Apps/>
  {/* <APICallBackExample /> */}
  {/* <AxiosExample/> */}
  </>,
  document.getElementById('root')
  
)
