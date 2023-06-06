import React from 'react';
import PropTypes from 'prop-types';

function DeleteButton({ onDelete, id }) {
  return <button type="button" className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>;
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DeleteButton;
