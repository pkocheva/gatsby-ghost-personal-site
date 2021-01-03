import React from "react";

import { ThemeContext } from './ThemeContext';

import {
    COLOR_MODE_KEY,
  } from '../../styles/constants';



const DarkModeToggle = () => {
    const { colorMode, setColorMode } = React.useContext(ThemeContext);

    if (!colorMode) {
        return null;
    }

    return (
        <div className="darkModeToggle">

            <input
                type="checkbox"
                id="darkModeToggle" 
                checked={colorMode === 'dark'}
                onChange={ev => {
                    setColorMode(ev.target.checked ? 'dark' : 'light');
                }}
            />
            <label for="darkModeToggle"  className="check-trail">
                <span className="check-handler"></span>
            </label>
        </div>

    );
};

export default DarkModeToggle