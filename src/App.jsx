import React from 'react';
import './App.css';
import SideBar from './Components/LeftSection/SideBar';
import MainSec from './Components/RightSection/MainSec';

function App() {
  return (
    <div className='structure'>
      <SideBar />
      <MainSec />
    </div>
  );
}

export default App;
