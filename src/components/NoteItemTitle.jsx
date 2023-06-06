import React from 'react';
import PropTypes from 'prop-types';

function NoteItemTitle({ title }) {
  return (
    <header className="note-item__title">{title}</header>
  );
}

NoteItemTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NoteItemTitle;
