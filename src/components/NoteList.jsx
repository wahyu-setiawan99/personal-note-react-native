/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import EmptyList from './EmptyList';
import NoteItem from './NoteItem';

function NoteList({
  notes, onDelete, onArchive, keyword,
}) {
  const filteredNotes = notes.filter((note) => !note.archived
  && (note.title.toUpperCase().includes(keyword.toUpperCase())
  || note.body.toUpperCase().includes(keyword.toUpperCase())));

  if (filteredNotes.length === 0) {
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
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            archived={note.archived}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </section>
    </div>

  );
}

NoteList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
