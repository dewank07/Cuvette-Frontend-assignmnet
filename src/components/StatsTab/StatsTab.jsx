import React, { useContext } from "react";
import "./StatsTab.css";
import statsicon1 from "../../assets/statsicon (1).png";
import statsicon2 from "../../assets/statsicon (2).png";
import statsicon3 from "../../assets/statsicon (3).png";
import StatsDatacontext from "../../context/StatsData/StatsDataContext";
const StatsTab = () => {
  const stats = useContext(StatsDatacontext);
  return (
    <div className='container-stats'>
      <div className='text'>Quick Statistics</div>
      <div className='wrapper-stats'>
        <div className='item'>
          <div className='icon'>
            <img src={statsicon1} alt='stats' />
          </div>
          <div className='data'>
            <div className='numbers'>{stats.StatsData.rank}</div>
            <div className='sub-text'>Your Rank</div>
          </div>
        </div>

        <div className='item'>
          <div className='icon'>
            <img src={statsicon2} alt='stats' />
          </div>
          <div className='data'>
            <div className='numbers'>{stats.StatsData.per}%</div>
            <div className='sub-text'>Percentile</div>
          </div>
        </div>

        <div className='item'>
          <div className='icon'>
            <img src={statsicon3} alt='stats' />
          </div>
          <div className='data'>
            <div className='numbers'>{stats.StatsData.ans}/15</div>
            <div className='sub-text'>Correct Answers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsTab;
