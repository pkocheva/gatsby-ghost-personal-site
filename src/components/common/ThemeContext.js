/**  Code from https://github.com/joshwcomeau/dark-mode-minimal 
 * by Josh W Comeau https://www.joshwcomeau.com/
*/

import React from 'react';

import {
    COLORS,
    COLOR_MODE_KEY,
    INITIAL_COLOR_MODE_CSS_PROP,
} from '../../styles/constants';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [colorMode, rawSetColorMode] = React.useState(undefined);

    React.useEffect(() => {
        const root = window.document.documentElement;

        // Because colors matter so much for the initial page view, we're
        // doing a lot of the work in gatsby-ssr. That way it can happen before
        // the React component tree mounts.

        const persistedPreference = localStorage.getItem(COLOR_MODE_KEY);
        let initialColorValue = 'light'

        if (typeof persistedPreference === 'string') {
            initialColorValue = persistedPreference
        }
        else {
            initialColorValue = root.style.getPropertyValue(
                INITIAL_COLOR_MODE_CSS_PROP
            );
        }

        rawSetColorMode(initialColorValue);
    }, []);

    const contextValue = React.useMemo(() => {
        function setColorMode(newValue) {
            const root = window.document.documentElement;

            localStorage.setItem(COLOR_MODE_KEY, newValue);

            Object.entries(COLORS).forEach(([name, colorByTheme]) => {
                const cssVarName = `--color-${name}`;

                root.style.setProperty(cssVarName, colorByTheme[newValue]);
            });

            console.log(newValue)

            rawSetColorMode(newValue);
        }

        return {
            colorMode,
            setColorMode,
        };
    }, [colorMode, rawSetColorMode]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};