import React from "react";

/*
function Macaron(props) {
    return (

      <div>
        <h1>Macaron no.{props.propsid}</h1>
        <h2>Macaron name : {props.propsname}</h2>
        <img src={props.propsimage} alt={props.propsname}></img>
        </div>
      
     );
  }
  */

  /*
  function Macaron(props){ //구조분해랄당1
    console.log(props) //object
    const {propsname,propsid,propsimage} = props;
    return(
        <div>
        <h1>Macaron no.{propsid}</h1>
        <h2>Macaron name : {propsname}</h2>
        <img src={propsimage} alt={name}></img>
        </div>
    )
  }
*/

function Macaron({propsname,propsid,propsimage}){ //구조분해랄당2
    return(
        <div>
        <h1>Macaron no.{propsid}</h1>
        <h2>Macaron name : {propsname}</h2>
        <img src={propsimage} alt={propsname}></img>
        </div>
    )
  }

  export default Macaron