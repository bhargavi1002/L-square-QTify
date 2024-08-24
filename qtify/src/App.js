import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Buttons from './components/Button/Button';

function App() {
  const searchData=[];
  return (
    <div className="App">
    <Navbar searchData={searchData} />
    <Hero />
    </div>
  );
}

export default App;
