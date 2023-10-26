import React, { useState } from "react";
import "./Sidebar.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { BsFileEarmarkBarGraph } from "react-icons/bs";

const Sidebar = () => {
  const [nav, setNav] = useState(2);
  return (
    <div className='sidebar'>
      <div className='wrapper'>
        <div
          className={nav === 1 ? "item active" : "item"}
          onClick={() => {
            setNav(1);
          }}
        >
          <div className='icon'>
            <MdOutlineSpaceDashboard />
          </div>
          <div className='content'>Dashboard</div>
        </div>
        <div
          className={nav === 2 ? "item active" : "item"}
          onClick={() => {
            setNav(2);
          }}
        >
          <div className='icon'>
            <SlBadge />
          </div>
          <div className='content'>Skill Test</div>
        </div>
        <div
          className={nav === 3 ? "item active" : "item"}
          onClick={() => {
            setNav(3);
          }}
        >
          <div className='icon'>
            <BsFileEarmarkBarGraph />
          </div>
          <div className='content'>Internship</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
