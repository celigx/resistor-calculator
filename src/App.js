import React, { useState, useEffect } from 'react';
import './App.sass';
import { firstBand, secondBand, thirdBand, multiplier, tolerance, ppm } from './components/bandValues';
import Select from "react-select";
import Resistor from './components/Resistor';


export default function FourBand() {
  const [firstBandOption, setFirstBandOption] = useState(null);
  const [secondBandOption, setSecondBandOption] = useState(null);
  const [thirdBandOption, setThirdBandOption] = useState(null);
  const [multiplierOption, setMultiplierOption] = useState(null);
  const [toleranceOption, setToleranceOption] = useState(null);
  const [ppmOption, setPpmOption] = useState(null);
  const [output, setOutput] = useState(null);
  // eslint-disable-next-line
  const [array, setArray] = useState([false, false, false, false]);
  const [selectedOption, setSelectedOption] = useState("4")
  const isTrue = (currentValue) => currentValue === true;

  useEffect(() => {
    if (array.every(isTrue)) {
      handleCalculate()
    }
  })

  const handleFirstBand = firstBandOption => {
    setFirstBandOption(firstBandOption);
    array[0] = true;
    console.log('firstBand:', firstBandOption.value);
  }

  const handleSecondBand = secondBandOption => {
    setSecondBandOption(secondBandOption);
    array[1] = true;
    console.log('secondBand:', secondBandOption.value);
  };

  const handleThirdBand = thirdBandOption => {
    setThirdBandOption(thirdBandOption);
    array[4] = true;
    console.log('thirdBand:', thirdBandOption.value);
  }

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

  const handlePPM = ppmOption => {
    setPpmOption(ppmOption);
    array[5] = true;
    console.log('ppm', ppmOption.value)
  }

  const numFormat = (num) => {
    return num > 999999999 ? `${num / 1000000000}G`
    : num > 999999 ? `${num / 1000000}M`
    : num > 999 ? `${num / 1000}k`
    : num
  }

  const handleCalculate = () => {
    if (selectedOption === "4") {
      const firstBand = firstBandOption.value;
      const secondBand = secondBandOption.value;
      const concatBand = firstBand.concat(secondBand);
      const multiplier = multiplierOption.value;
      const tolerance = toleranceOption.value;
      const resistance = numFormat(concatBand * multiplier);
      
      setOutput(`${resistance} Ohms ${tolerance}%`);
      console.log('calculate', `Resistor: ${resistance} Ohms ${tolerance}%`)
    } else if (selectedOption === "5") {
      const firstBand = firstBandOption.value;
      const secondBand = secondBandOption.value;
      const thirdBand = thirdBandOption.value;
      const concatBand = firstBand.concat(secondBand, thirdBand);
      const multiplier = multiplierOption.value;
      const tolerance = toleranceOption.value;
      const resistance = numFormat(concatBand * multiplier);

      setOutput(`${resistance} Ohms ${tolerance}%`);
      console.log('calculate', `Resistor: ${resistance} Ohms ${tolerance}%`)
    } else if (selectedOption === "6") {
      const firstBand = firstBandOption.value;
      const secondBand = secondBandOption.value;
      const thirdBand = thirdBandOption.value;
      const concatBand = firstBand.concat(secondBand, thirdBand);
      const multiplier = multiplierOption.value;
      const tolerance = toleranceOption.value;
      const resistance = numFormat(concatBand * multiplier);
      const ppm = ppmOption.value;

      setOutput(`${resistance} Ohms ${tolerance}% ${ppm}ppm`);
      console.log('calculate', `Resistor: ${resistance} Ohms ${tolerance}% ${ppm}ppm`)
    }
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
    console.log(e.target.value)

    if (e.target.value === '4') {
      if (array.length === 5) {
        setArray(prevState => prevState, array.pop())
      } else if (array.length === 6) {
        setArray(prevState => prevState, array.splice(4, 2))
      }
    } else if (e.target.value === '5') {
      if (array.length === 4) {
        setArray(prevState => prevState, array.push(thirdBandOption === null ? false : true))            
      } else if (array.length === 6) {
        setArray(prevState => prevState, array.pop())
      }
    } else if (e.target.value === '6') {
      if (array.length === 4) {
        setArray(prevState => prevState, array.push(thirdBandOption === null ? false : true, ppmOption === null ? false : true))
      } else if (array.length === 5) {
        setArray(prevState => prevState, array.push(ppmOption === null ? false : true))
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Resistor Calculator</h3>
      </header>
        <div className="Resistor-container">
          <div className="Resistor-parameters">
            <h4>Resistor Parameters</h4>
            <div className="Radio-buttons">
              <input type="radio" value="4" id="4" checked={selectedOption === "4"} onChange={handleOptionChange} />
              <label htmlFor="4">4 Band</label>
              <input type="radio" value="5" id="5" checked={selectedOption === "5"} onChange={handleOptionChange} />
              <label htmlFor="5">5 Band</label>
              <input type="radio" value="6" id="6" checked={selectedOption === "6"} onChange={handleOptionChange} />
              <label htmlFor="6">6 Band</label>
            </div>
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
            {selectedOption === "5" || selectedOption === "6" ?
            (
              <div className="Third-band">
                <p>3rd Band of Color</p>
                <Select
                  placeholder={"Select a color"}
                  options={thirdBand}
                  value={thirdBandOption}
                  onChange={handleThirdBand}
                  maxMenuHeight={500}
                  blurInputOnSelect={true}
                  isSearchable={false}
                  />
              </div>
            ) : (
              null
            )
            }
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
            {selectedOption === "6" ?
            (
              <div className="Ppm-band">
                <p>PPM</p>
                <Select
                  placeholder={"Select a color"}
                  options={ppm}
                  value={ppmOption}
                  onChange={handlePPM}
                  maxMenuHeight={500}
                  blurInputOnSelect={true}
                  isSearchable={false}
                  />
              </div>
            ) : (
              null
            )
            }
          </div>
          <div className="Resistor-output">
            <h4>Output</h4>
            <Resistor
              firstColor={firstBandOption && firstBandOption.color}
              secondColor={secondBandOption && secondBandOption.color}
              thirdColor={thirdBandOption && thirdBandOption.color}
              multiplierColor={multiplierOption && multiplierOption.color}
              toleranceColor={toleranceOption && toleranceOption.color}
              ppmColor={ppmOption && ppmOption.color}
              firstValue={firstBandOption && firstBandOption.value}
              secondValue={secondBandOption && secondBandOption.value}
              thirdValue={thirdBandOption && thirdBandOption.value}
              multiplierValue={multiplierOption && numFormat(multiplierOption.value)}
              toleranceValue={toleranceOption && toleranceOption.value}
              ppmValue={ppmOption && ppmOption.value}
              selectedOption={selectedOption}
            />
            <p className="Output-paragraph">
              {array.every(isTrue) ? `Resistor: ${output}` : `Resistor: --`}
            </p>
          </div>
        </div>
    </div>
  );
}
