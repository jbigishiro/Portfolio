import React from "react"
import { Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./Home"
import Blogs from "./Blogs"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"
import NavBar from "./NavBar"
import img from "./justin.jpg"

function App() {
  return (
    
   <div id="main">
      <div id="nav" >
      <img src={img} alt="Justin" id="img1"/>
        <NavBar />
      </div >
      <div id="content">
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>  
      </div>
      <footer id="footer">
      © 2023 Justin || Contact me at <u>justin.rvd@gmail.com</u>
      </footer> 
    </div> 
  );
}

export default App;
