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
    {/* <Navbar />
      <Profile/>
      <AboutMe/>
    <Contact/> */}
    <div id="carouselExampleIndicators" class="carousel slide ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./profilephoto.jpg" class="d-block w-50" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./profilephoto.jpg" class="d-block w-50 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./profilephoto.jpg" class="d-block w-50" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    {/* <Project/> */}
    </>
  );
}

export default App;
