/**  Code from https://github.com/joshwcomeau/dark-mode-minimal 
 * by Josh W Comeau https://www.joshwcomeau.com/
*/

import React from 'react';
import Terser from 'terser';

import {   
    COLOR_MODE_KEY,
    COLORS,
    INITIAL_COLOR_MODE_CSS_PROP, 
} from './src/styles/constants'

import Layout from './src/components/common/Layout'

function setColorsByTheme() {
    const colors = '🌈';
    const colorModeKey = '🔑';
    const colorModeCssProp = '⚡️';

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    const persistedPreference = localStorage.getItem(colorModeKey);

    let colorMode = 'light';

    const hasUsedToggle = typeof persistedPreference === 'string';

    if (hasUsedToggle) {
        colorMode = persistedPreference;
    } else {
        colorMode = prefersDarkFromMQ ? 'dark' : 'light';
    }

    let root = document.documentElement;

    root.style.setProperty(colorModeCssProp, colorMode);

    Object.entries(colors).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[colorMode]);
    });

}

const MagicScriptTag = () => {
    const boundFn = String(setColorsByTheme)
        .replace("'🌈'", JSON.stringify(COLORS))
        .replace('🔑', COLOR_MODE_KEY)
        .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

    let calledFunction = `(${boundFn})()`;

    //calledFunction = Terser.minify(calledFunction).code;

    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

// TODO add fallback styles for disabled JS

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
    setPreBodyComponents(<MagicScriptTag />);
};