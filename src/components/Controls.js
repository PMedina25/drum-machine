import React from 'react';

const Controls = ({powerControl, powerSlider, adjustVolume, sliderVal, selectBank, bankSlider, display }) => {

    return (
        <div id="controls-container">
          <div id="power" className="switch-toggle">
            <p className="switch-button-header">Power</p>
            <label className="switch" htmlFor="power-switch">
              <input type="checkbox" id="power-switch" defaultChecked="true" onClick={powerControl} style={powerSlider} />
              <span className="slider" />
            </label>
          </div>
          <p id="display">{display}</p>
          <div id="volume">
            <input type="range" min="0" max="1" step="0.01" id="volume-range" onChange={adjustVolume} value={sliderVal} />
          </div>
          <div id="bank" className="switch-toggle">
            <p className="switch-button-header">Bank</p>
            <label className="switch" htmlFor="bank-switch">
              <input type="checkbox" id="bank-switch" onClick={selectBank} style={bankSlider} />
              <span className="slider" />
            </label>
          </div>
        </div>
    );
}

export default Controls;