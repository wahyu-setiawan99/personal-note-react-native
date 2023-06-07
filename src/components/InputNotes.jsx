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

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
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
      <h2>Add notes</h2>
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
        <textarea
          className="note-input__body"
          placeholder="Write your notes here ..."
          value={body}
          onChange={onBodyChangeHandler}
          required
          maxLength="300"
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
