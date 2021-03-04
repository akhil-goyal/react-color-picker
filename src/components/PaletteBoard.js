import React, { useState } from 'react';
import Palettes from './Palletes';
import 'css/App.css';

const PaletteBoard = () => {

    const [bgColors, setBgColor] = useState({
        colorOne: '#FF9933',
        colorTwo: '#FFFFFF',
        colorThree: '#138808'
    });

    return (
        <div className="palette-board">
            <Palettes colors={bgColors} />
        </div>
    )
}

export default PaletteBoard;