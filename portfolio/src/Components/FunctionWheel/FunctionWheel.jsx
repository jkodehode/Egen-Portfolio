import { useState, useEffect } from "react";
import "./FunctionWheel.css";

function FunctionWheel() {
  return (
    <>
      <div className="mainContainer">
        <p>Function Wheel</p>
        <div className="funcBoxHead"></div>
        <div className="funcBoxBody"></div>
        <div className="funcBoxFoot"></div>
      </div>
    </>
  );
}

export default FunctionWheel;
