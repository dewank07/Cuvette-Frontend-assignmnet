import React from "react";
import "./SyllabusTab.css";
import Tracker from "./Tracker";

const SyllabusTab = () => {
  return (
    <div className='container-syllabus'>
      <div className='heading-syllabus'>Syllabus wise Analysis</div>
      <Tracker
        headingText={"HTML Tools, Forms, History"}
        percentage={80}
        color={"lightblue"}
      />
      <Tracker
        headingText={"Tags & References in HTML"}
        percentage={60}
        color={"orange"}
      />
      <Tracker
        headingText={"Tables & CSS Basics"}
        percentage={24}
        color={"red"}
      />
      <Tracker
        headingText={"Tables & CSS Basics"}
        percentage={96}
        color={"green"}
      />
    </div>
  );
};

export default SyllabusTab;
