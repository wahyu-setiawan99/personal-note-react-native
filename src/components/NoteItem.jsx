import React from 'react';
import PropTypes from 'prop-types';
import NoteItemContent from './NoteItemContent';

function NoteItem({
  title, createdAt, body, id,
}) {
  return (
    <article className="note-item">
      <NoteItemContent id={id} title={title} createdAt={createdAt} body={body} />
    </article>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItem;
