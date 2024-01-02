import React from 'react';
import PizzaBanner from '../assets/aboutUs.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div 
      className='aboutTop' style={{ backgroundImage: `url(${PizzaBanner})` }}></div>
      <div className='aboutBottom'>
      <h1> ABOUT US </h1>
      <p> 
      We're more than just a pizzeria. We're passionate creators of pizza perfection. 
      Our story is a journey of flavor, quality, and tradition, and we're excited to share it with you.
      We are a team of pizza enthusiasts dedicated 
      to crafting the finest cheese pizza you've ever tasted. 
       With years of experience and a true love for the craft, 
       we set out to create a pizzeria that would deliver unforgettable pizza experiences.</p>

</div>
    </div>
  )
}

export default About
