import React from "react";
import { Image } from "react-bootstrap";
import "../Styles/AboutMe.scss";
import PentaWorkerImage from "../images/Penta-Construction-Management-Software-homeslider.jpg";
export default  function AboutMe () {
    return (
      <div id="aboutMe">
        
        <Image src={PentaWorkerImage} alt="Construction Management Software and ERP"></Image> 
        <h1>Construction Management Software and ERP</h1>
      </div>
    )
}