import React, { useState } from "react";
import Modalcontext from "./modalContext";

const ModalState = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Modalcontext.Provider value={{ modalOpen, setModalOpen }}>
      {props.children}
    </Modalcontext.Provider>
  );
};

export default ModalState;
