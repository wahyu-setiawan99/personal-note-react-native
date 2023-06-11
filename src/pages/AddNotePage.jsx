import React from 'react';
import AddNoteForm from '../components/AddNoteForm';

function AddNotePage({ onAddNote }) {
  return (
    <div className="note-input">
      <h2>Add active note</h2>
      <AddNoteForm onAddNote={onAddNote} />
    </div>
  );
}

export default AddNotePage;
