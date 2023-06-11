import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteItemTitle({ id, title }) {
  return (
    <Link to={`/note/${id}`} className="note-item__title">{title}</Link>
  );
}

NoteItemTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NoteItemTitle;
