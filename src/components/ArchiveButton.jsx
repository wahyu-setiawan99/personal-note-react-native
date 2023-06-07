import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ArchiveButton({ onArchive, id }) {
  return (
    <button title="archive" type="button" className="note-item__archive-move-button" onClick={() => onArchive(id)}>
      <Link to="/">
        <FontAwesomeIcon className="action-icon" icon={faFolderOpen} />
      </Link>

    </button>
  );
}

ArchiveButton.propTypes = {
  onArchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ArchiveButton;
