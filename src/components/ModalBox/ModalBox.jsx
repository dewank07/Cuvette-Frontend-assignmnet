import React, { useContext, useState } from "react";
import "./ModalBox.css";
import { RiCloseLine } from "react-icons/ri";
import modalcontext from "../../context/modal/modalContext";
import UpdateScore from "../UpdateScore/UpdateScore";

const ModalBox = () => {
  const cntxt = useContext(modalcontext);

  return (
    <>
      <div className='darkBG' onClick={() => cntxt.setModalOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <button
            className='closeBtn'
            onClick={() => cntxt.setModalOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>

          <UpdateScore />
          {/* {Form} */}
        </div>
      </div>
    </>
  );
};

export default ModalBox;
