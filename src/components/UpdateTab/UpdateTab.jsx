import React, { useContext, useState } from "react";
import "./UpdateTab.css";
import htmlImage from "../../assets/html.png";
import modalcontext from "../../context/modal/modalContext";
import StatsDatacontext from "../../context/StatsData/StatsDataContext";

const UpdateTab = () => {
  const cntxt = useContext(modalcontext);
  const stats = useContext(StatsDatacontext);
  return (
    <>
      <div className='container'>
        <div className='item'>
          <div className='logoImg'>
            <img src={htmlImage} alt='html' className='htmlImage' />
          </div>
          <div className='text-content'>
            <div className='heading'>Hypertext Markup Language</div>
            <div className='small-text'>
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </div>
          </div>
        </div>
        <div
          className='btn'
          onClick={() => {
            cntxt.setModalOpen(!cntxt.modalOpen);
            stats.setStatsData({ rank: 111, per: 96, ans: 11 });
          }}
        >
          Update
        </div>
      </div>
    </>
  );
};

export default UpdateTab;
