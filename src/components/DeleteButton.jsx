import React from 'react';

function DeleteButton({ onDelete, id }) {
  return <button type="button" className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>;
}

export default DeleteButton;
