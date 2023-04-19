import './App.css';
import Profile from './portfolioComponents/Home/Profile';
import Navbar from './portfolioComponents/Home/Navbar';
import AboutMe from './portfolioComponents/About/AboutMe';
import Contact from './portfolioComponents/Contact/Contact';
import Project from '../src/portfolioComponents/Projects/Project'
// const express = require('express')
// const app = express();
function App() {
  return (
    <>
    <Navbar />
      <Profile/>
      <AboutMe/>
    <Contact/>
    
    {/* <Project/> */}
    </>
  );
}

export default App;
