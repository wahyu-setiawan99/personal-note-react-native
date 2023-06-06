/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import InputNotes from './InputNotes';
import SearchNotes from './SearchNotes';
import NoteList from './NoteList';
import NoteListArchived from './NoteListArchived';

function NoteAppBody({
  notes, onDelete, onArchive, onMove, onSubmitNotes, onSearch, keyword,
}) {
  return (
    <div className="note-app__body">
      <InputNotes onSubmitNotes={onSubmitNotes} />
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

NoteAppBody.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSearch: PropTypes.func.isRequired,
  onSubmitNotes: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default NoteAppBody;
