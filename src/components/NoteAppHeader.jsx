import React from 'react';

function NoteAppHeader({ sitetitle }) {
  return (
    <header className="note-app__header">
      <h1>{sitetitle}</h1>
    </header>
  );
}

export default NoteAppHeader;
