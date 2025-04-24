import React from "react";
import ThemeContext from "./themeContext";
import { useState } from "react";

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div style={{
            minHeight: '100vh', width: '100vw',
            margin: 0,
            padding: 0,
            backgroundColor: theme === 'light' ? 'blue' : 'orange',
            transition: 'background-color 0.3s ease'
        }}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )

}

export default ThemeProvider;