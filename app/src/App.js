import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/section/About';
import Experience from './components/section/Experience';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/section/Portfolio';
import Skills from './components/section/Skills';
import Hello from './components/test'

class App extends Component {
  constructor(props) {
      super(props);
    }

  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Footer /> 
        {/*<Hello firstName="squall" lastName="leonhart" showCorrect="true" />*/}
      </div>
    );
  }
}

export default App;
