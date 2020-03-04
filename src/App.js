import React, { useState, useEffect } from 'react';
import './App.css';
import { firstBand, secondBand, multiplier, tolerance } from './components/bandValues';
import Select from "react-select";
import Resistor from './components/Resistor';


export default function App() {
  const [firstBandOption, setFirstBandOption] = useState(null);
  const [secondBandOption, setSecondBandOption] = useState(null);
  const [multiplierOption, setMultiplierOption] = useState(null);
  const [toleranceOption, setToleranceOption] = useState(null);
  const [output, setOutput] = useState(null);
  // eslint-disable-next-line
  const [array, setArray] = useState([false, false, false, false]);

  const isTrue = (currentValue) => currentValue === true;

  useEffect(() => {
    array.every(isTrue)
      ? handleCalculate()
      : console.log('Not true')
  })

  const handleFirstBand = firstBandOption => {
    setFirstBandOption(firstBandOption)
    array[0] = true
    console.log('firstBand:', firstBandOption.value)
    console.log("selected:", firstBandOption.selected);
  }

  const handleSecondBand = secondBandOption => {
    setSecondBandOption(secondBandOption);
    array[1] = true;
    console.log('secondBand:', secondBandOption.value);
  };

  const handleMultiplier = multiplierOption => {
    setMultiplierOption(multiplierOption);
    array[2] = true;
    console.log('multiplier', multiplierOption.value)
  }

  const handleTolerance = toleranceOption => {
    setToleranceOption(toleranceOption);
    array[3] = true;
    console.log('tolerance', toleranceOption.value)
  }

  const numFormat = (num) => {
    return num > 999999999 ? `${num / 1000000000}G`
    : num > 999999 ? `${num / 1000000}M`
    : num > 999 ? `${num / 1000}k`
    : num
  }

  const handleCalculate = () => {
    const firstBand = firstBandOption.value;
    const secondBand = secondBandOption.value;
    const concatBand = firstBand.concat(secondBand);
    const multiplier = multiplierOption.value;
    const tolerance = toleranceOption.value;
    const resistance = numFormat(concatBand * multiplier);

    setOutput(`${resistance} Ohms ${tolerance}%`);
    console.log('calculate', `Resistor: ${resistance} Ohms ${tolerance}%`)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>Resistor Calculator</h3>
      </header>

      <div className="App-container">
        <div className="Resistor-parameters">
          <h4>Resistor Parameters</h4>
          <p>1st Band of Color</p>
          <Select
            placeholder={"Select a color"}
            options={firstBand}
            value={firstBandOption}
            onChange={handleFirstBand}
            maxMenuHeight={500}
            blurInputOnSelect={true}
            isSearchable={false}
          />
          <p>2nd Band of Color</p>
          <Select
            placeholder={"Select a color"}
            options={secondBand}
            value={secondBandOption}
            onChange={handleSecondBand}
            maxMenuHeight={500}
            blurInputOnSelect={true}
            isSearchable={false}
          />
          <p>Multiplier</p>
          <Select
            placeholder={"Select a color"}
            options={multiplier}
            value={multiplierOption}
            onChange={handleMultiplier}
            maxMenuHeight={500}
            blurInputOnSelect={true}
            isSearchable={false}
          />
          <p>Tolerance</p>
          <Select
            placeholder={"Select a color"}
            options={tolerance}
            value={toleranceOption}
            onChange={handleTolerance}
            maxMenuHeight={500}
            blurInputOnSelect={true}
            isSearchable={false}
          />
        </div>
        <div className="Resistor-output">
          <h4>Output</h4>
          <Resistor
            firstColor={firstBandOption && firstBandOption.color}
            secondColor={secondBandOption && secondBandOption.color}
            multiplierColor={multiplierOption && multiplierOption.color}
            toleranceColor={toleranceOption && toleranceOption.color}
            firstValue={firstBandOption && firstBandOption.value}
            secondValue={secondBandOption && secondBandOption.value}
            multiplierValue={
              multiplierOption && numFormat(multiplierOption.value)
            }
            toleranceValue={toleranceOption && toleranceOption.value}
          />
          <p className="Output-paragraph">
            {array.every(isTrue) ? `Resistor: ${output}` : `Resistor:--`}
          </p>
        </div>
      </div>
    </div>
  );
}
