import React from 'react';
import './App.css';
import Wheel from './Wheel.js'
import Guidance from './GuidanceContainer.js'
// import { render } from '@testing-library/react';

function App() {
  
  return (
    <div className="App">
      <h1> Welcome to the Wellness Center</h1>
      {/** TODO: Import and render the Wheel component, provided for you. It does not need any props. */}
      <Wheel/>
      <hr />
      {/** TODO: Import and render the GuidanceContainer component, provided for you. It does not need any props. */}
      <Guidance/>
    </div>
  );
}

export default App;
