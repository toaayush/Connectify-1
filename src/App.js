import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Friends from "./components/Friends";
import Messages from "./components/Messages";
import Myprofile from "./components/Myprofile";
import Explore from "./components/Explore";
import { useState } from "react";

function App() {
  const [openmenu, setOpenmenu] = useState(false);
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
      <BrowserRouter>
        <Navbar openmenu={openmenu} changeSlidebar={changeSlidebar}/>
        <Routes>
          <Route exact path="/" element={<Home openmenu={openmenu}/>} key='home'/>
          <Route exact path="/friends" element={<Friends openmenu={openmenu}/>} key='friends'/>
          <Route exact path="/explore" element={<Explore openmenu={openmenu}/>} key='explore'/>
          <Route exact path="/messages" element={<Messages openmenu={openmenu}/>} key='messages'/>
          <Route exact path="/myprofile" element={<Myprofile openmenu={openmenu}/>} key='myprofile'/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
