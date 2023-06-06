import React from 'react';
import PropTypes from 'prop-types';

function NoteItemBody({ body }) {
  return (
    <div className="note-item__body">
      <p>{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
