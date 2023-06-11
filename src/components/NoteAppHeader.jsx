import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import ToggleTheme from './ToggleTheme';

function NoteAppHeader({
  sitetitle, archivePage, onLogout, authedUser,
}) {
  return (
    <header className="note-app__header">
      <h1><Link className="note-app__site-title" to="/">{sitetitle}</Link></h1>
      {authedUser
        ? (
          <div className="left-btn__navigation">
            <p><Link className="note-app__archive-page" to="/archives">{archivePage}</Link></p>
            <ToggleTheme />
            <LogoutButton onLogout={onLogout} authedUser={authedUser} />
          </div>
        )
        : (
          <div className="left-btn__navigation">
            <ToggleTheme />
          </div>
        )}

    </header>
  );
}

NoteAppHeader.propTypes = {
  sitetitle: PropTypes.string.isRequired,
  archivePage: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  authedUser: PropTypes.objectOf(PropTypes.string),
};

NoteAppHeader.defaultProps = {
  authedUser: { key: 'value' },
};

export default NoteAppHeader;
