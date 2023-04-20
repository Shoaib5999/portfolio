import './App.css';
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import Profile from './portfolioComponents/Home/Profile';
import Navbar from './portfolioComponents/Home/Navbar';
import AboutMe from './portfolioComponents/About/AboutMe';
import Contact from './portfolioComponents/Contact/Contact';
import Project from '../src/portfolioComponents/Projects/Project'
// const express = require('express')
// const app = express();
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
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
