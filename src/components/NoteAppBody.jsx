import React from 'react';
import InputNotes from './InputNotes';
import SearchNotes from './SearchNotes';
import NoteList from './NoteList';
import NoteListArchived from './NoteListArchived';

function NoteAppBody({
  notes, onDelete, onArchive, onMove, submitNotes, onSearch, keyword,
}) {
  return (
    <div className="note-app__body">
      <InputNotes submitNotes={submitNotes} />
      <SearchNotes onSearch={onSearch} />
      <NoteList
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        keyword={keyword}
      />

      <NoteListArchived
        notes={notes}
        onDelete={onDelete}
        onMove={onMove}
        keyword={keyword}
      />
    </div>
  );
}

export default NoteAppBody;
