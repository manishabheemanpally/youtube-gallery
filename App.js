// src/App.js
import React from 'react';
import './App.css';
import VideoGallery from './components/VideoGallery';


function App() {
  return (
    <div className="App">
      <header>
      <img className='youtube' src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg" alt='youtube'></img>
      <input className='search' placeholder='search' type='search'/>
      <i class='fa-solid fa-magnifying-glass'></i>
      <i class='fa-solid fa-microphone-lines'></i>
      </header>
      <VideoGallery />
    </div>
  );
}

export default App;