import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';

function AddNoteButton() {
  return (
    <button title="add note" className="note-item__add-button" type="button">
      <Link to="/notes/new">
        <FontAwesomeIcon className="add-note__icon" icon={faFolderPlus} />
      </Link>
    </button>

  );
}

export default AddNoteButton;
