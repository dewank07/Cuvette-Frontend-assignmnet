import React from "react";
import "./MainBox.css";
import UpdateTab from "../UpdateTab/UpdateTab";
import StatsTab from "../StatsTab/StatsTab";
import CompareGraphTab from "../CompareGraphTab/CompareGraph";
import SyllabusTab from "../SyllabusTab/SyllabusTab";
import QuestionTab from "../QuestionTab/QuestionTab";

const MainBox = () => {
  return (
    <div className='wrapper-main '>
      <div>Skill Text</div>
      <div className='inner-wrapper'>
        <div className='wrapper-left'>
          <UpdateTab />
          <StatsTab />
          <CompareGraphTab />
        </div>
        <div className='wrapper-right'>
          <SyllabusTab />
          <QuestionTab />
        </div>
      </div>
    </div>
  );
};

export default MainBox;
