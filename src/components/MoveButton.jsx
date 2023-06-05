import React from 'react';

function MoveButton({ onMove, id }) {
  return <button type="button" className="note-item__archive-button" onClick={() => onMove(id)}>Move</button>;
}

export default MoveButton;
