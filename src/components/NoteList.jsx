import React from 'react';
import EmptyList from './EmptyList';
import NoteItem from './NoteItem';

function NoteList({
  notes, onDelete, onArchive, keyword,
}) {
  if (notes.findIndex((note) => !note.archived
  && (note.title.toUpperCase().includes(keyword.toUpperCase())
  || note.body.toUpperCase().includes(keyword.toUpperCase()))) === -1) {
    return (
      <div>
        <h2>Active Notes</h2>
        <EmptyList message="No active notes" />
      </div>

    );
  }

  return (
    <div>
      <h2>Active Notes</h2>
      <section className="notes-list">
        {notes.map((note) => (!note.archived
        && (note.title.toUpperCase().includes(keyword.toUpperCase())
        || note.body.toUpperCase().includes(keyword.toUpperCase()))
          ? (
            <NoteItem
              key={note.id}
              id={note.id}
              archived={note.archived}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ) : null))}
      </section>
    </div>

  );
}

export default NoteList;
