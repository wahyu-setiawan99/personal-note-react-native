import React from 'react';

function ArchiveButton({ onArchive, id }) {
  return <button type="button" className="note-item__archive-button" onClick={() => onArchive(id)}>Archive</button>;
}

export default ArchiveButton;
