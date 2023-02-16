import React from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage.css'

const LandingPage = () => {
  const navigate = useNavigate();
  const gotologin = (()=>{
    navigate("/loginpage", { replace: true })
  })
  
  return (
    <div>
      <button className="connectWithConnectify" onClick={gotologin}>Connect</button>
    </div>
  );
};

export default LandingPage;
