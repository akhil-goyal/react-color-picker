import React, { useState } from 'react';
import 'css/App.css';

const Palettes = ({ colors }) => {

    const [bgColors, setBgColor] = useState(colors);

    const { colorOne, colorTwo, colorThree } = bgColors;

    const handleColorChange = name => event => {
        setBgColor({ ...bgColors, [name]: event.target.value });
    };

    return (
        <>
            <div style={{ backgroundColor: colorOne }} className="palette">
                <input onChange={handleColorChange('colorOne')} className="color-picker" type="color" value={colorOne} />
            </div>
            <div style={{ backgroundColor: colorTwo }} className="palette">
                <input onChange={handleColorChange('colorTwo')} className="color-picker" type="color" value={colorTwo} />
            </div>
            <div style={{ backgroundColor: colorThree }} className="palette">
                <input onChange={handleColorChange('colorThree')} className="color-picker" type="color" value={colorThree} />
            </div>
        </>
    )
}

export default Palettes;