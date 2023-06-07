import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function DeleteButton({ onDelete, id }) {
  return (
    <button
      title="delete"
      type="button"
      className="note-item__delete-button"
      onClick={() => onDelete(id)}
    >
      <Link to="/">
        <FontAwesomeIcon className="action-icon" icon={faTrash} />
      </Link>
    </button>
  );
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DeleteButton;
