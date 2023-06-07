import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteItemTitle({ id, title }) {
  return (
    <Link to={`/note/${id.split('-')[1]}`} className="note-item__title">{title}</Link>
  );
}

NoteItemTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NoteItemTitle;
