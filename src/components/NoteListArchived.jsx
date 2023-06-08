/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import EmptyList from './EmptyList';
import NoteItem from './NoteItem';
import AddNoteButton from './AddNoteButton';
import SearchNotes from './SearchNotes';

function NoteListArchived({
  notes, onDelete, onMove, onSearch, keyword,
}) {
  const archivedNotes = notes.filter((note) => note.archived);

  if (archivedNotes.length === 0) {
    return (
      <div>
        <h2>Archived Notes</h2>
        <SearchNotes onSearch={onSearch} keyword={keyword} />
        <EmptyList message="No archived notes" />
        <AddNoteButton />
      </div>
    );
  }

  return (
    <div>
      <h2>Archived Notes</h2>
      <SearchNotes onSearch={onSearch} keyword={keyword} />
      <section className="notes-list">
        {archivedNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            archived={note.archived}
            onDelete={onDelete}
            onMove={onMove}
            {...note}
          />
        ))}
      </section>
      <AddNoteButton />
    </div>
  );
}

NoteListArchived.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteListArchived;
