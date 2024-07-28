import Router from './Router';
import React, { useEffect, video } from 'react';
import './App.css'
import videoAni from '../public/fondoAnimado.mp4'

function App() {

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    const handleMouseMove = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('navbar-item')) {
        document.body.classList.add('interactive-hover');
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('navbar-item')) {
        document.body.classList.remove('interactive-hover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src="../../public/fondoAnimado.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Router />
    </div>
  );
}

export default App