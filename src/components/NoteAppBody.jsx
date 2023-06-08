/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';
import InputNotes from './InputNotes';
import NoteListActive from './NoteListActive';
import NoteListArchived from './NoteListArchived';
import NoteItemDetail from './NoteItemDetail';
import NotFoundPage from '../pages/NotFoundPage';

function NoteAppBody({
  notes, onDelete, onArchive, onMove, onSubmitNotes, onSearch, keyword,
}) {
  return (
    <div className="note-app__body">
      <Routes>
        <Route
          path="/"
          element={(
            <NoteListActive
              notes={notes}
              onDelete={onDelete}
              onArchive={onArchive}
              onSearch={onSearch}
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
              onSearch={onSearch}
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

        <Route
          path="/404"
          element={(
            <NotFoundPage />
          )}
        />

        <Route
          path="*"
          element={(
            <Navigate to="/404" />
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
  onSearch: PropTypes.func.isRequired,
};

export default NoteAppBody;
