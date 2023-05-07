import React from "react";
import './SquareStyle.css';

function Square(props){
   // console.log(props)
   return <div className={`Square-container ${props.border} ${props.state==='X' ? "X-color" : "Y-color"}`} id={props.id}>
      {props.state}
   </div>
};

export default Square;