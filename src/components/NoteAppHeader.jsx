import React from 'react';
import PropTypes from 'prop-types';

function NoteAppHeader({ sitetitle }) {
  return (
    <header className="note-app__header">
      <h1>{sitetitle}</h1>
    </header>
  );
}

NoteAppHeader.propTypes = {
  sitetitle: PropTypes.string.isRequired,
};

export default NoteAppHeader;
