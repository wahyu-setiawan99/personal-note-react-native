import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteAppHeader({ sitetitle, archivePage }) {
  return (
    <header className="note-app__header">
      <h1><Link className="note-app__site-title" to="/">{sitetitle}</Link></h1>
      <h2><Link className="note-app__archive-page" to="/archives">{archivePage}</Link></h2>
    </header>
  );
}

NoteAppHeader.propTypes = {
  sitetitle: PropTypes.string.isRequired,
};

export default NoteAppHeader;
