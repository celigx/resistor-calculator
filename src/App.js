import React, { useState } from 'react';
import './App.css';
import { firstBand, secondBand, multiplier, tolerance } from './components/bandValues'

import Select from "react-select";

export default function App() {
  const [firstBandOption, setFirstBandOption] = useState(null);
  const [secondBandOption, setSecondBandOption] = useState(null);
  const [multiplierOption, setMultiplierOption] = useState(null);
  const [toleranceOption, setToleranceOption] = useState(null);


  const handleFirstBand = firstBandOption => {
    setFirstBandOption(firstBandOption)
    console.log('firstBand:', firstBandOption.value)
  }

  const handleSecondBand = secondBandOption => {
    setSecondBandOption(secondBandOption);
    console.log('secondBand:', secondBandOption.value);
  };

  const handleMultiplier = multiplierOption => {
    setMultiplierOption(multiplierOption);
    console.log('multiplier', multiplierOption.value)
  }

  const handleTolerance = toleranceOption => {
    setToleranceOption(toleranceOption);
    console.log('tolerance', toleranceOption.value)
  }

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
          <p>Multiplier</p>
          <Select
            defaultValue={multiplier[0]}
            options={multiplier}
            value={multiplierOption}
            onChange={handleMultiplier}
            maxMenuHeight={500}
          />
        <p>Tolerance</p>
        <Select
          defaultValue={tolerance[0]}
          options={tolerance}
          value={toleranceOption}
          onChange={handleTolerance}
          maxMenuHeight={500}
        />
        </div>
        <div>
          <h4>Output</h4>
        </div>
      </div>
    </div>
  );
}
