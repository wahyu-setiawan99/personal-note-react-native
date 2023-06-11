/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import EmptyList from '../components/EmptyList';
import NoteItem from '../components/NoteItem';
import AddNoteButton from '../components/AddNoteButton';
import SearchNotes from '../components/SearchNotes';

function ArchivedNotesPage({
  archives, onDelete, onMove, onSearch, keyword,
}) {
  if (archives.length === 0) {
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
        {archives.map((note) => (
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

ArchivedNotesPage.propTypes = {
  archives: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default ArchivedNotesPage;
