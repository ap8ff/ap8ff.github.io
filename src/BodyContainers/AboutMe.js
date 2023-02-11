import React from "react";
import { Image } from "react-bootstrap";
import astronomicals from "../images/pic_profile.JPG";
export default  function AboutMe () {
    return (
        <Image src={astronomicals} class="img-fluid"  alt="Welcome to my Page"></Image>
    )
}