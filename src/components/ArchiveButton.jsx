import React from 'react';
import PropTypes from 'prop-types';

function ArchiveButton({ onArchive, id }) {
  return <button type="button" className="note-item__archive-button" onClick={() => onArchive(id)}>Archive</button>;
}

ArchiveButton.propTypes = {
  onArchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ArchiveButton;
