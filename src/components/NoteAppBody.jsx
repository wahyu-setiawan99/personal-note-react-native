/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import InputNotes from './InputNotes';
import NoteList from './NoteListActive';
import NoteListArchived from './NoteListArchived';
import NoteItemDetail from './NoteItemDetail';

function NoteAppBody({
  notes, onDelete, onArchive, onMove, onSubmitNotes, keyword,
}) {
  return (
    <div className="note-app__body">
      <Routes>
        <Route
          path="/"
          element={(
            <NoteList
              notes={notes}
              onDelete={onDelete}
              onArchive={onArchive}
              keyword={keyword}
            />
          )}
        />

        <Route
          path="/archives"
          element={(
            <NoteListArchived
              notes={notes}
              onDelete={onDelete}
              onMove={onMove}
              keyword={keyword}
            />
          )}
        />

        <Route
          path="/notes/new"
          element={(
            <InputNotes
              onSubmitNotes={onSubmitNotes}
            />
          )}
        />

        <Route
          path="/note/:id"
          element={(
            <NoteItemDetail
              notes={notes}
              onDelete={onDelete}
              onArchive={onArchive}
              onMove={onMove}
            />
          )}
        />

      </Routes>

    </div>
  );
}

NoteAppBody.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmitNotes: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default NoteAppBody;
