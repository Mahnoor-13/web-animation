import React from "react";
import web from "../src/images/img3.jpg"
import "./index.css"
import Common from "./Common"

const About = () => {
  return (
    <>
     <Common name="About page" imgsrc={web} visit="/contact" btname="Contact us"/>
    </>
  );
};

export default About;
