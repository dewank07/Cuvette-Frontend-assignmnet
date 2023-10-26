import React, { useContext } from "react";
import "./CompareGraph.css";
import graphComp from "../../assets/compare.png";
import compicon from "../../assets/compicon.png";
import StatsDatacontext from "../../context/StatsData/StatsDataContext";
import Graph from "../Graph/graph";
const CompareGraph = () => {
  const stats = useContext(StatsDatacontext);
  return (
    <div className='container-compare'>
      <div className='upper-wrapper'>
        <div className='wrapper-text'>
          <div className='compare-heading'>Comparison Graph</div>
          <div className='compare-subhead'>
            <p>
              <strong>You scored {stats.StatsData.per}% percentile</strong>{" "}
              which is lower than the average percentile{" "}
              {100 - stats.StatsData.per}% of all the engineers who took this
              assessment
            </p>
          </div>
        </div>
        <div className='ImgaeLogo'>
          <img src={compicon} alt='compicon' />
        </div>
      </div>
      <div className='graphRender'>
        <Graph val={stats.StatsData.per} />
        {/* <img src={graphComp} alt='graph comp' className='graphcomp' /> */}
      </div>
    </div>
  );
};

export default CompareGraph;
