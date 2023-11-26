import React from "react"
import { Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./Home"
import Blogs from "./Blogs"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"
import NavBar from "./NavBar"

function App() {
  return (
    
   <div>
      <NavBar />
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>     
    </div> 
  );
}

export default App;
