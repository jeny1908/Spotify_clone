// src/App.js
import React, { useContext } from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { Playercontext } from './context/Playercontext';


function App() {

  const { audioref , track} = useContext(Playercontext);

  return (
    <div className="app-container">
      <div className="main-content">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioref} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;