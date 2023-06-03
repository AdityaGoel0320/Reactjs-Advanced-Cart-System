import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css'; // Import the CSS file for styling
const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      const currentMode = localStorage.getItem('darkMode');
      setIsDarkMode(currentMode === 'true');
    }, []);
  
    useEffect(() => {
      localStorage.setItem('darkMode', isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDarkMode]);
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <button className={`dark-mode-toggle ${isDarkMode ? 'dark' : ''}`} onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    );
  };
  
  export default DarkModeToggle;
  