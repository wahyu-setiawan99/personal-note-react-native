import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import MoveButton from './MoveButton';

function NoteItemAction({
  onDelete, onArchive, onMove, id, archived,
}) {
  if (!archived) {
    return (
      <div className="note-item__action">
        <DeleteButton onDelete={onDelete} id={id} />
        <ArchiveButton onArchive={onArchive} id={id} />
      </div>
    );
  }
  return (
    <div className="note-item__action">
      <DeleteButton onDelete={onDelete} id={id} />
      <MoveButton onMove={onMove} id={id} />
    </div>
  );
}

export default NoteItemAction;
