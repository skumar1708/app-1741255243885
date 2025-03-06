import React from 'react';

const DarkModeToggle = ({ isDarkMode, onClick }) => {
  return (
    <button className="dark-mode-toggle" onClick={onClick}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;