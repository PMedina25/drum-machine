import React from 'react';

// import components
import DrumPad from './DrumPad';

const PadBank = ({currentPadBank, power, updateDisplay}) => {
    let padBank;

    if (power) {
      padBank = currentPadBank.map((drumObj, i, padBankArr) => {
        return (
            <DrumPad key={padBankArr[i].id} clip={padBankArr[i].sound_url} clipName={padBankArr[i].name} keyTrigger={padBankArr[i].keyTrigger} power={power} updateDisplay={updateDisplay} />
        );
      });
    }
    else {
      padBank = currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad key={padBankArr[i].id} clip="#" clipName={padBankArr[i].name} keyTrigger={padBankArr[i].keyTrigger} power={power} updateDisplay={updateDisplay} />
        );
      });
    }
    return (
      <div id="pad-bank">
        {padBank}
      </div>
    )
}

export default PadBank;