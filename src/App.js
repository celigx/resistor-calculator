import React, { useState, useEffect } from 'react';
import './App.sass';
import { firstBand, secondBand, thirdBand, multiplier, tolerance, ppm } from './components/bandValues';
import Select from "react-select";
import Resistor from './components/Resistor';


export default function FourBand() {
  const [resistor, setResistor] = useState({
    firstBandOption: undefined,
    secondBandOption: undefined,
    thirdBandOption: undefined,
    multiplierOption: undefined,
    toleranceOption: undefined,
    ppmOption: undefined,
  })
  const [output, setOutput] = useState(null);
  const [array, setArray] = useState([false, false, false, false]);
  const [selectedOption, setSelectedOption] = useState("4")
  const isTrue = (currentValue) => currentValue === true;

  useEffect(() => {
    if (array.every(isTrue)) {
      handleCalculate()
    }
  })

  const handleFirstBand = option => {
    setResistor(prevState => ({...prevState, firstBandOption: option}));
    array[0] = true;
    console.log('firstBand:', option.value);
  }

  const handleSecondBand = option => {
    setResistor(prevState => ({...prevState, secondBandOption: option}));
    array[1] = true;
    console.log('secondBand:', option.value);
  }

  const handleThirdBand = option => {
    setResistor(prevState => ({...prevState, thirdBandOption: option}));
    array[4] = true;
    console.log('thirdBand:', option.value);
  }

  const handleMultiplier = option => {
    setResistor(prevState => ({...prevState, multiplierOption: option}));
    array[2] = true;
    console.log('multiplier', option.value)
  }

  const handleTolerance = option => {
    setResistor(prevState => ({...prevState, toleranceOption: option}));
    array[3] = true;
    console.log('tolerance', option.value)
  }

  const handlePPM = option => {
    setResistor(prevState => ({...prevState, ppmOption: option}));
    array[5] = true;
    console.log('ppm', option.value)
  }

  const numFormat = (num) => {
    return num > 999999999 ? `${num / 1000000000}G`
    : num > 999999 ? `${num / 1000000}M`
    : num > 999 ? `${num / 1000}k`
    : num
  }

  const handleCalculate = () => {
    if (selectedOption === "4") {
      const firstBand = resistor.firstBandOption.value;
      const secondBand = resistor.secondBandOption.value;
      const concatBand = firstBand.concat(secondBand);
      const multiplier = resistor.multiplierOption.value;
      const tolerance = resistor.toleranceOption.value;
      const resistance = numFormat(concatBand * multiplier);
      
      setOutput(`${resistance} Ohms ${tolerance}%`);
      console.log('calculate', `Resistor: ${resistance} Ohms ${tolerance}%`)
    } else if (selectedOption === "5") {
      const firstBand = resistor.firstBandOption.value;
      const secondBand = resistor.secondBandOption.value;
      const thirdBand = resistor.thirdBandOption.value;
      const concatBand = firstBand.concat(secondBand, thirdBand);
      const multiplier = resistor.multiplierOption.value;
      const tolerance = resistor.toleranceOption.value;
      const resistance = numFormat(concatBand * multiplier);

      setOutput(`${resistance} Ohms ${tolerance}%`);
      console.log('calculate', `Resistor: ${resistance} Ohms ${tolerance}%`)
    } else if (selectedOption === "6") {
      const firstBand = resistor.firstBandOption.value;
      const secondBand = resistor.secondBandOption.value;
      const thirdBand = resistor.thirdBandOption.value;
      const concatBand = firstBand.concat(secondBand, thirdBand);
      const multiplier = resistor.multiplierOption.value;
      const tolerance = resistor.toleranceOption.value;
      const resistance = numFormat(concatBand * multiplier);
      const ppm = resistor.ppmOption.value;

      setOutput(`${resistance} Ohms ${tolerance}% ${ppm}ppm`);
      console.log('calculate', `Resistor: ${resistance} Ohms ${tolerance}% ${ppm}ppm`)
    }
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
    console.log(e.target.value)

    const handleArrayLength = () => {
      if (e.target.value === '4') {
        if (array.length === 5) {
          setArray(prevState => prevState, array.pop())
        } else if (array.length === 6) {
          setArray(prevState => prevState, array.splice(4, 2))
        }
      } else if (e.target.value === '5') {
        if (array.length === 4) {
          setArray(prevState => prevState, array.push(resistor.thirdBandOption === undefined ? false : true))            
        } else if (array.length === 6) {
          setArray(prevState => prevState, array.pop())
        }
      } else if (e.target.value === '6') {
        if (array.length === 4) {
          setArray(prevState => prevState, array.push(resistor.thirdBandOption === undefined ? false : true, resistor.ppmOption === undefined ? false : true))
        } else if (array.length === 5) {
          setArray(prevState => prevState, array.push(resistor.ppmOption === undefined ? false : true))
        }
      }
    }
    handleArrayLength()
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
              value={resistor.firstBandOption}
              onChange={handleFirstBand}
              maxMenuHeight={500}
              blurInputOnSelect={true}
              isSearchable={false}
            />
            <p>2nd Band of Color</p>
            <Select
              placeholder={"Select a color"}
              options={secondBand}
              value={resistor.secondBandOption}
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
                  value={resistor.thirdBandOption}
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
              value={resistor.multiplierOption}
              onChange={handleMultiplier}
              maxMenuHeight={500}
              blurInputOnSelect={true}
              isSearchable={false}
            />
            <p>Tolerance</p>
            <Select
              placeholder={"Select a color"}
              options={tolerance}
              value={resistor.toleranceOption}
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
                  value={resistor.ppmOption}
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
              resistor={resistor}
              selectedOption={selectedOption}
              numFormat={numFormat}
            />
            <p className="Output-paragraph">
              {array.every(isTrue) ? `Resistor: ${output}` : `Resistor: --`}
            </p>
          </div>
        </div>
    </div>
  );
}
