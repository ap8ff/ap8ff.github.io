import * as React from "react";
import { useState } from "react"
import "./cube.scss";

 const Cube = () => {
    let { cubeAngle1, setCubeAngle1 } = useState(0);
    let { cubeAngle2, setCubeAngle2 } = useState(90);
    let { cubeAngle3, setCubeAngle3 } = useState(180);
   
    return <div id="cube">
        <div className="side1"><p> TEXT 1</p></div>
       
    </div>
 }
export default Cube;