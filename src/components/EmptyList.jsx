import React from 'react';

function EmptyList({ message }) {
  return (
    <div className="notes-list__empty-message">
      <p>{message}</p>
    </div>
  );
}

export default EmptyList;
