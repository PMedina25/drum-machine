import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import heaterSounds from './data/heaterSounds';
import pianoSounds from './data/pianoSounds';

// Import components
import PadBank from './components/PadBank';
import Controls from './components/Controls';

function App() {
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState('');
  const [currentPadBank, setCurrentPadBank] = useState(heaterSounds);
  const [currentPadBankId, setCurrentPadBankId] = useState('Heater Kit');
  const [sliderVal, setSliderVal] = useState(0.3);

  const powerControl = () => {
    setPower(!power);
    setDisplay('');
  }

  const selectBank = () => {
    if (power) {
      if (currentPadBankId === 'Heater Kit') {
        setCurrentPadBank(pianoSounds);
        setDisplay('Smooth Piano Kit');
        setCurrentPadBankId('Smooth Piano Kit');
      }
      else {
        setCurrentPadBank(heaterSounds);
        setDisplay('Heater Kit');
        setCurrentPadBankId('Heater Kit');
      }
    }
  }

  const displayClipName = (name) => {
    setDisplay(name);
  }

  const adjustVolume = (e) => {
    setSliderVal(e.target.value);
    setDisplay('Volume: ' + Math.round(e.target.value * 100));

    setTimeout(() => clearDisplay(), 1000);
  }

  const clearDisplay = () => {
    setDisplay('');
  }

  const powerSlider = power ? { float: 'right' } : { float: 'left' };
  const bankSlider = currentPadBank === heaterSounds ? 
  { 
    float: 'left' } : 
  { float: 'right' };
  {
    const clips = [].slice.call(document.getElementsByClassName('clip'));
    clips.forEach(sound => {
      sound.volume = sliderVal;
    });
  };

  return (
    <div id="main" className="container-fluid">
      <div id="wrapper">
        <div id="header">
          <div id="logo" className="logo">
            <span id="logo-text">FCC</span>
            <i className="fa fa-free-code-camp" id="logo-icon"></i>
          </div>
      </div>
      <div id="drum-machine">
        <PadBank clipVolume={sliderVal} currentPadBank={currentPadBank} power={power} updateDisplay={displayClipName} />
        <Controls powerControl={powerControl} powerSlider={powerSlider} adjustVolume={adjustVolume} sliderVal={sliderVal} selectBank={selectBank} bankSlider={bankSlider} display={display} />
      </div>
      </div>
    </div>
  );
}

export default App;
