import React from 'react';
import PropTypes from 'prop-types';
import AddNoteForm from '../components/AddNoteForm';

function AddNotePage({ onAddNote }) {
  return (
    <div className="note-input">
      <h2>Add active note</h2>
      <AddNoteForm onAddNote={onAddNote} />
    </div>
  );
}

AddNotePage.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default AddNotePage;
