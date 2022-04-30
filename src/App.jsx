
import Navigator from "./Components/Navigator/Navigator";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/education";
import "./app.scss"
import { useState } from "react";
import Menu from "./Components/Menu/Menu";
import Projects from "./Components/Projects/Projects";
function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
<div className="app">
  <Navigator  menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
  <Menu className="menu" menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
  <div className>
    <Intro/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr></hr>
    <br></br>
    <br></br>
    <br></br>
    <Education/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr></hr>
    <br></br>
    <br></br>
    <br></br>
    <Portfolio/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr></hr>
    <br></br>
    <br></br>
    <br></br>
    <Projects/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr></hr>
    <br></br>
    <br></br>
    <br></br>
    <Contact/>
  </div>
</div>
  );
}

export default App;
