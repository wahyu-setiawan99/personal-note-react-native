import React from 'react';
import PropTypes from 'prop-types';
import NoteItemContent from './NoteItemContent';

function NoteItem({
  id, title, createdAt, body,
}) {
  return (
    <article className="note-item">
      <NoteItemContent id={id} title={title} createdAt={createdAt} body={body} />
    </article>
  );
}

export const noteItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

NoteItem.propTypes = noteItemPropTypes;

export default NoteItem;
