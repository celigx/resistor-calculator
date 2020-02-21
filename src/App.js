import React, { useState } from 'react';
import './App.css';
import { firstBand, secondBand, multiplier, tolerance } from './components/bandValues'

import Select from "react-select";

export default function App() {
  const [firstBandOption, setFirstBandOption] = useState(0);
  const [secondBandOption, setSecondBandOption] = useState(0);
  const [multiplierOption, setMultiplierOption] = useState(0);
  const [toleranceOption, setToleranceOption] = useState(0);
  const [showOutput, setShowOutput] = useState('');

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

  const handleCalculate = () => {
    const firstBand = firstBandOption.value;
    const secondBand = secondBandOption.value;
    const concatBand = firstBand.concat(secondBand);
    const multiplier = multiplierOption.value;
    const tolerance = toleranceOption.value;
    const resistance = concatBand * multiplier;

    setShowOutput(`${resistance} Ohms ${tolerance}%`);
    console.log('calculate', `Resistor: ${resistance} Ohms ${tolerance}%`)
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
            placeholder={"Select a color"}
            options={firstBand}
            value={firstBandOption}
            onChange={handleFirstBand}
            maxMenuHeight={500}
            blurInputOnSelect={true}
          />
          <p>2nd Band of Color</p>
          <Select
            placeholder={"Select a color"}
            options={secondBand}
            value={secondBandOption}
            onChange={handleSecondBand}
            maxMenuHeight={500}
            blurInputOnSelect={true}
          />
          <p>Multiplier</p>
          <Select
            placeholder={"Select a color"}
            options={multiplier}
            value={multiplierOption}
            onChange={handleMultiplier}
            maxMenuHeight={500}
            blurInputOnSelect={true}
          />
          <p>Tolerance</p>
          <Select
            placeholder={"Select a color"}
            options={tolerance}
            value={toleranceOption}
            onChange={handleTolerance}
            maxMenuHeight={500}
            blurInputOnSelect={true}
          />
          <button className="Button-calc" onClick={handleCalculate}>
            Calculate
          </button>
        </div>
        <div>
          <h4>Output</h4>
          <p className="Output-paragraph">Resistor: {showOutput}</p>
        </div>
      </div>
    </div>
  );
}
