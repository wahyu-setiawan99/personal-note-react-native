import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';

function NoteItem({
  title, createdAt, body, onDelete, onArchive, onMove, id, archived,
}) {
  return (
    <article className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction
        onDelete={onDelete}
        onArchive={onArchive}
        onMove={onMove}
        id={id}
        archived={archived}
      />
    </article>
  );
}

export default NoteItem;
