import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Friends from "./components/Friends";
import Messages from "./components/Messages";
import Myprofile from "./components/Myprofile";
import Explore from "./components/Explore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} key='home'/>
          <Route exact path="/friends" element={<Friends />} key='friends'/>
          <Route exact path="/explore" element={<Explore />} key='explore'/>
          <Route exact path="/messages" element={<Messages />} key='messages'/>
          <Route exact path="/myprofile" element={<Myprofile />} key='myprofile'/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
