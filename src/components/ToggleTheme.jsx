import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../contexts/ThemeContext';

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const icon = theme === 'dark' ? faSun : faMoon;

  return (
    <div>
      <button title="change-theme" className="toggle-theme__btn-wrapper" type="button" onClick={toggleTheme}>
        <FontAwesomeIcon className="action-icon__theme-change" icon={icon} />
      </button>
    </div>
  );
}

export default ToggleTheme;
