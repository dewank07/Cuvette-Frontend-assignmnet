import React, { useContext } from "react";
import "./QuestionTab.css";
import graph from "../../assets/graph.png";
import StatsDatacontext from "../../context/StatsData/StatsDataContext";
import CircularProgress from "@mui/joy/CircularProgress";
import tar from "../../assets/target.png";

const QuestionTab = () => {
  const stats = useContext(StatsDatacontext);

  return (
    <div className='container-question'>
      <div className='heading-question'>
        <div className='heading-q'>Question Analysis</div>
        <div className='correct-answer'>{stats.StatsData.ans} / 15</div>
      </div>
      <div className='subheading-question'>
        <p>
          <strong>
            You scored {stats.StatsData.ans} question correct out of 15.
          </strong>{" "}
          However it still needs some improvements
        </p>
      </div>
      <div className='question-chart'>
        <CircularProgress
          determinate
          value={(stats.StatsData.ans * 100) / 15}
          sx={{ "--CircularProgress-size": "200px" }}
          thickness={18}
        >
          <img src={tar} alt='graph' />
        </CircularProgress>
      </div>
    </div>
  );
};

export default QuestionTab;
