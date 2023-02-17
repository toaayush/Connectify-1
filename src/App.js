import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Friends from "./components/Friends";
import Messages from "./components/Messages";
import Myprofile from "./components/Myprofile";
import Explore from "./components/Explore";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import LandingPageNavbar from "./components/LandingPageNavbar";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Help from "./components/SlidebarComponents/Help";
import Aboutus from "./components/SlidebarComponents/Aboutus";
import Signup from "./components/Signup";
import Connect from "./components/Connect";


function App() {
  const navigate = useNavigate()
  const [login, setLogin] = useState(false)
  const [openmenu, setOpenmenu] = useState(false);
  useEffect(() => {
    if(!login){
      navigate("/landingpage", { replace: true })
    }
     // eslint-disable-next-line
  }, [])
  const handleLogIn = (()=>{
    setLogin(true)
    setOpenmenu(false);
})
  const handleSignUp = (()=>{
    setLogin(true)
    setOpenmenu(false);
})
  const handleLogOut = (()=>{
    setLogin(false)
    setOpenmenu(false);
})
  const changeSlidebar = () => {
    if (!openmenu) {
      setOpenmenu(true);
    } else {
      setOpenmenu(false);
    }
    // console.log(openmenu);
  };
  return (
    <div className="App">
        {login?<Navbar openmenu={openmenu} changeSlidebar={changeSlidebar} login={login} handleLogOut={handleLogOut}/>:<LandingPageNavbar/>}
        <Routes>
          <Route exact path="/" element={<Home openmenu={openmenu}/>} key='home'/>
          <Route exact path="/friends" element={<Friends openmenu={openmenu}/>} key='friends'/>
          <Route exact path="/explore" element={<Explore openmenu={openmenu}/>} key='explore'/>
          <Route exact path="/messages" element={<Messages openmenu={openmenu}/>} key='messages'/>
          <Route exact path="/myprofile" element={<Myprofile openmenu={openmenu}/>} key='myprofile'/>
          <Route exact path="/landingpage" element={<LandingPage openmenu={openmenu} login={login}/>} key='landingpage'/>
          <Route exact path="/loginpage" element={<Login openmenu={openmenu} handleLogIn={handleLogIn} login={login}/>} key='loginpage'/>
          <Route exact path="/connect" element={<Connect login={login} openmenu={openmenu} />} key='connect'/>
          <Route exact path="/signuppage" element={<Signup openmenu={openmenu} handleSignUp={handleSignUp} login={login}/>} key='signuppage'/>
          <Route exact path="/help" element={<Help />} key='loginpage'/>
          <Route exact path="/aboutus" element={<Aboutus />} key='loginpage'/>
        </Routes>
    </div>
  );
}

export default App;
