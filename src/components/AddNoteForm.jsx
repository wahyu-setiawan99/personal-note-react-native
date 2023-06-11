import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CharLimit from './CharLimit';

function AddNoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleLength, setTitleLength] = useState(0);

  const onTitleChangeHandler = (event) => {
    const { value } = event.target;
    setTitleLength(value.length);
    setTitle(value.length > 50 ? title : value);
  };

  const onBodyInputHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAddNote({ title, body });
  };

  return (
    <div className="add-note__form">
      <CharLimit number={titleLength} />

      <form onSubmit={onSubmitHandler}>
        <input
          className="note-input__title"
          type="text"
          placeholder="Notes title ..."
          value={title}
          onChange={onTitleChangeHandler}
          required
        />
        <div
          className="note-input__body"
          value={body}
          onInput={onBodyInputHandler}
          contentEditable
        />
        <button type="submit">Create</button>
      </form>
    </div>

  );
}

AddNoteForm.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default AddNoteForm;
