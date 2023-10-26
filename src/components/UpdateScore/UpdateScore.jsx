import React, { useContext } from "react";

import HtmlLogo from "../../assets/html.png";
import "./UpdateScore.css";
import "../ModalBox/ModalBox.css";
import modalcontext from "../../context/modal/modalContext";
import StatsDatacontext from "../../context/StatsData/StatsDataContext";

const UpdateScore = () => {
  const cntxt = useContext(modalcontext);
  const stats = useContext(StatsDatacontext);
  return (
    <div className='UpdateScore-wrapper'>
      <div className='updateScore-heading'>
        <div className='UpdateScores-text'>Update Score</div>
        <div className='scoreLogo'>
          <img src={HtmlLogo} alt='htmlLogo' />
        </div>
      </div>
      <div className='update-form'>
        <div className='upadte-item'>
          <div className='update-label'>
            1. Update your <strong>Rank</strong>
          </div>
          <input
            className='input-update'
            type='number'
            onChange={(e) => {
              stats.StatsData.rank = e.target.value;
            }}
          />
        </div>
        <div className='upadte-item'>
          <div className='update-label'>
            2. Update your <strong>Percentile</strong>
          </div>
          <input
            className='input-update'
            type='number'
            onChange={(e) => {
              stats.StatsData.per = e.target.value;
            }}
          />
        </div>
        <div className='upadte-item'>
          <div className='update-label'>
            3. Update your <strong>current score (out of 15)</strong>
          </div>
          <input
            className='input-update'
            type='number'
            onChange={(e) => {
              stats.StatsData.ans = e.target.value;
            }}
          />
        </div>
      </div>

      <div className='modalActions'>
        <div className='actionsContainer'>
          <button
            className='cancelBtn'
            onClick={() => cntxt.setModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className='submitBtn'
            onClick={() => {
              stats.setStatsData({ ...stats.StatsData });
              cntxt.setModalOpen(false);
            }}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateScore;
