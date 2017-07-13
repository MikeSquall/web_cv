import React, { Component } from 'react';
import './App.css';
import About from './components/section/About';
import Experiences from './components/section/Experiences';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/section/Portfolio';
import Skills from './components/section/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <About />
        <Experiences />
        <Skills />
        <Portfolio />
        <Footer /> 
      </div>
    );
  }
}

export default App;
