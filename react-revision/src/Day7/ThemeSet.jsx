import React, { useContext } from "react";
import ThemeContext from "./themeContext";

const ThemeSetter = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh' // Full height so vertical centering works
        }}>
          <button 
            onClick={toggleTheme} 
            style={{ 
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '8px',
              border:'solid',
              borderWidth:'3px',
              cursor: 'pointer',
              background: theme === 'light' ? 'yellow' : 'green',
              color: theme === 'light' ? 'black' : 'white',
              transition: 'all 0.3s ease'
            }}
          >
            Toggle Theme
          </button>
        </div>
    );
};

export default ThemeSetter;
