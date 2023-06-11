import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function LogoutButton({ onLogout }) {
  return (
    <button title="logout" type="button" className="logout-user__navigation-button" onClick={() => onLogout()}>
      <FontAwesomeIcon className="logout-icon" icon={faRightFromBracket} />
    </button>
  );
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default LogoutButton;
