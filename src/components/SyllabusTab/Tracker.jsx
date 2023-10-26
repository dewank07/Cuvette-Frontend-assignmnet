import React from "react";
import "./SyllabusTab.css";
const Tracker = ({ headingText, percentage, color }) => {
  return (
    <div className='conatiner-tracker'>
      <div className='heading-tracker'>{headingText}</div>
      <div className='tracking-box'>
        <div className={`track-outer ${color}`}>
          <div className={`track-inner value${percentage} ${color}`}></div>
        </div>
        <div className={`track-value ${color}`}>{percentage}%</div>
      </div>
    </div>
  );
};

export default Tracker;
