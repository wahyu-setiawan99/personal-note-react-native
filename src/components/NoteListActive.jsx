/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import EmptyList from './EmptyList';
import NoteItem, { noteItemPropTypes } from './NoteItem';
import AddNoteButton from './AddNoteButton';
import SearchNotes from './SearchNotes';

function NoteListActive({
  notes, onDelete, onArchive, onSearch, keyword,
}) {
  const activeNotes = notes.filter((note) => !note.archived);
  if (activeNotes.length === 0) {
    return (
      <div>
        <h2>Active Notes</h2>
        <SearchNotes onSearch={onSearch} keyword={keyword} />
        <EmptyList message="No active notes" />
        <AddNoteButton />
      </div>
    );
  }

  return (
    <div>
      <h2>Active Notes</h2>
      <SearchNotes onSearch={onSearch} keyword={keyword} />
      <section className="notes-list">
        {activeNotes.map((note) => (
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
      <AddNoteButton />
    </div>

  );
}

NoteListActive.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};

export default NoteListActive;
