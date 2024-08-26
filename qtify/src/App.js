import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section'

function App() {
  const searchData=[];
  return (
    <div className="App">
    <Navbar searchData={searchData} />
    <Hero />
    <Section title = "Top Albums" />
    </div>
  );
}

export default App;
