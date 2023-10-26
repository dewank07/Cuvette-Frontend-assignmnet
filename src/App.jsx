import { useContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainBox from "./components/MainBox/MainBox";
import ModalBox from "./components/ModalBox/ModalBox";
import modalcontext from "./context/modal/modalContext";

function App() {
  const cntxt = useContext(modalcontext);

  return (
    <>
      {cntxt.modalOpen && <ModalBox />}

      <Navbar />
      <div className='conatiner'>
        <Sidebar />
        <MainBox />
      </div>
    </>
  );
}

export default App;
