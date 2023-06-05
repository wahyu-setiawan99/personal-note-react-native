import React from 'react';
import EmptyList from './EmptyList';
import NoteItem from './NoteItem';

function NoteListArchived({
  notes, onDelete, onMove, keyword,
}) {
  if (notes.findIndex((note) => note.archived
  && (note.title.toUpperCase().includes(keyword.toUpperCase())
  || note.body.toUpperCase().includes(keyword.toUpperCase()))) === -1) {
    return (
      <div>
        <h2>Archived Notes</h2>
        <EmptyList message="No archived notes" />
      </div>
    );
  }
  return (
    <div>
      <h2>Archived Notes</h2>
      <section className="notes-list">
        {notes.map((note) => (note.archived
        && (note.title.toUpperCase().includes(keyword.toUpperCase())
        || note.body.toUpperCase().includes(keyword.toUpperCase()))
          ? (
            <NoteItem
              key={note.id}
              id={note.id}
              archived={note.archived}
              onDelete={onDelete}
              onMove={onMove}
              {...note}
            />
          ) : null))}
      </section>
    </div>
  );
}

export default NoteListArchived;
