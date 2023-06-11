/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import EmptyList from '../components/EmptyList';
import NoteItem, { noteItemPropTypes } from '../components/NoteItem';
import AddNoteButton from '../components/AddNoteButton';
import SearchNotes from '../components/SearchNotes';

function ActiveNotesPage({
  notes, onDelete, onArchive, onSearch, keyword,
}) {
  if (notes.length === 0) {
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
        {notes.map((note) => (
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

ActiveNotesPage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default ActiveNotesPage;
