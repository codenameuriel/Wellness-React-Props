import React from 'react';
import Wheel from './Wheel.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Welcome to the Wellness Center</h1>
      {Wheel}
      <hr />
      {/** TODO: Import and render the GuidanceContainer component, provided for you. It does not need any props. */}
    </div>
  );
}

export default App;
