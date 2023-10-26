import React from "react";
import "./Navbar.css";
import CuvetteLogo from "../../assets/logo.png";
import avatarImg from "../../assets/avatar.png";

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='Logo'>
        <img src={CuvetteLogo} alt='Cuvette logo' />
      </div>
      <div className='userBox'>
        <div className='avatar'>
          <img src={avatarImg} alt='avatar' />
        </div>
        <div className='avatarName'>Siddharth Jain</div>
      </div>
    </div>
  );
};

export default Navbar;
