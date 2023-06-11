/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';
import NoteListActive from '../pages/ActiveNotesPage';
import NoteListArchived from '../pages/ArchivedNotesPage';
import NotFoundPage from '../pages/NotFoundPage';
import { noteItemPropTypes } from './NoteItem';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import AddNotePage from '../pages/AddNotePage';
import DetailNotePage from '../pages/DetailNotePage';

function NoteAppBody({
  notes,
  archives,
  onDelete,
  onArchive,
  onMove,
  onSearch,
  keyword,
  authedUser,
  loginSuccess,
  onAddNote,

}) {
  if (authedUser === null) {
    return (
      <div className="note-app__body">
        <Routes>
          <Route
            path="/register"
            element={(
              <RegistrationPage />
          )}
          />

          <Route
            path="/"
            element={(
              <Navigate to="/login" />
          )}
          />

          <Route
            path="/login"
            element={(
              <LoginPage loginSuccess={loginSuccess} />
          )}
          />

          <Route
            path="/404"
            element={(
              <NotFoundPage />
          )}
          />

          <Route
            path="/*"
            element={(
              <Navigate to="/404" />
          )}
          />

        </Routes>
      </div>
    );
  }

  return (
    <div className="note-app__body">
      <Routes>

        <Route
          path="/login"
          element={(
            <Navigate to="/" />
          )}
        />

        <Route
          path="/register"
          element={(
            <Navigate to="/" />
          )}
        />

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
              archives={archives}
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
            <AddNotePage onAddNote={onAddNote} />
          )}
        />

        <Route
          path="/note/:id"
          element={(
            <DetailNotePage
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
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default NoteAppBody;
