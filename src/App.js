import React, { useState } from 'react';
import './App.css';
import { firstBand, secondBand } from './components/bandValues'

import Select from "react-select";

export default function App() {
  const [firstBandOption, setFirstBandOption] = useState(null)
  const [secondBandOption, setSecondBandOption] = useState(null);

  const handleFirstBand = firstBandOption => {
    setFirstBandOption(firstBandOption)
    console.log('firstBand:', firstBandOption.value)
  }

  const handleSecondBand = secondBandOption => {
    setSecondBandOption(secondBandOption);
    console.log('secondBand:', secondBandOption.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Resistor Calculator</h3>
      </header>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{}}>
          <h4>Resistor Parameters</h4>
          <p>1st Band of Color</p>
          <Select
            defaultValue={firstBand[0]}
            options={firstBand}
            value={firstBandOption}
            onChange={handleFirstBand}
            maxMenuHeight={500}
          />
          <p>2nd Band of Color</p>
          <Select
            defaultValue={secondBand[0]}
            options={secondBand}
            value={secondBandOption}
            onChange={handleSecondBand}
            maxMenuHeight={500}
          />
        </div>
        <div>
          <h4>Output</h4>
          <p></p>
        </div>
      </div>
    </div>
  );
}
