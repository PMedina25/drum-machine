import React, { useEffect, useState } from 'react';

const DrumPad = ({ keyTrigger, clip, clipName, power, updateDisplay }) => {
    const activeStyle = {
        backgroundColor: 'orange',
        boxShadow: '0 3px orange',
        height: 77,
        marginTop: 13 };

    const inactiveStyle = {
        backgroundColor: 'grey',
        marginTop: 10,
        boxShadow: '3px 3px 5px black' };

    const [padStyle, setPadStyle] = useState(inactiveStyle);
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        // Especifica como sanear este efecto
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    });

    const handleKeyPress = (e) => {
        if (e.key.toUpperCase() === keyTrigger) {
            playSound();
        }
    }

    const activatePad = () => {
        if (power) {
            setPadStyle(activeStyle);
        }
        else if (padStyle.marginTop === 13) {
            setPadStyle(inactiveStyle);
        }
        else {
            setPadStyle({
                height: 77,
                marginTop: 13,
                backgroundColor: 'grey',
                boxShadow: '0 3px grey' 
            });
        }
    }

    const playSound = () => {
        const sound = document.getElementById(keyTrigger);
        sound.currentTime = 0;
        sound.play();
        activatePad();
        setTimeout(() => setPadStyle(inactiveStyle), 100);
        updateDisplay(clipName.replace(/-/g, ' '));
    }

    return (
        <div className="drum-pad" id={clipName} onClick={() => playSound()} style={padStyle}>
            <audio className="clip" id={keyTrigger} src={clip} />
            {keyTrigger}
        </div>
    )
}

export default DrumPad;