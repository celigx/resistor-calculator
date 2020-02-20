import React, { useState } from 'react';
import './App.css';
import { firstBand } from './components/bandValues'

import Select from "react-select";

export default function App() {
  const [firstBandOption, setFirstBandOption] = useState(null)

  const handleChange = firstBandOption => {
    setFirstBandOption(firstBandOption)
    console.log(firstBandOption.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Resistor Calculator</h3>
      </header>

      <div style={{display:'flex', justifyContent: 'space-around'}}>
        <div style={{}}>
          <h4>Resistor Parameters</h4>
          <p>1st Band of Color</p>
          <Select
            defaultValue={firstBand[0]}
            options={firstBand}
            value={firstBandOption}
            onChange={handleChange}
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
