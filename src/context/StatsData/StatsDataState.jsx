import React, { useState } from "react";
import StatsDataContext from "./StatsDataContext";

const StatsDataState = (props) => {
  const data = {
    rank: 12890,
    per: 37,
    ans: 7,
  };
  const [StatsData, setStatsData] = useState(data);
  return (
    <StatsDataContext.Provider value={{ StatsData, setStatsData }}>
      {props.children}
    </StatsDataContext.Provider>
  );
};

export default StatsDataState;
