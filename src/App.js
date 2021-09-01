import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 class="color">Hello Dojo!</h1>
        <h3>Things I need to do:</h3>
        <p>* Learn 3/4 of React's Backbone</p>
        <p>* Climb this Mt. Everest of a MERN stack</p>
        <p>* Run a marathon of all-nighters learning React</p>
        <p>* Feed the dogs JSX</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;