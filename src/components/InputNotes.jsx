import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CharLimit from './CharLimit';

function InputNotes({ onSubmitNotes }) {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [titleLength, setTitleLength] = React.useState(0);
  const navigate = useNavigate();

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
    onSubmitNotes({ title, body });
    navigate('/', { replace: true });

    setTitle('');
    setBody('');
    setTitleLength(0);
  };

  return (
    <div className="note-input">
      <h2>Add active note</h2>
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

InputNotes.propTypes = {
  onSubmitNotes: PropTypes.func.isRequired,
};

export default InputNotes;
