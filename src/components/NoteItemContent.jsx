import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import NoteItemDate from './NoteItemDate';
import NoteItemTitle from './NoteItemTitle';

function NoteItemContent({
  id, title, createdAt, body,
}) {
  return (
    <div className="note-item__content">
      <NoteItemTitle
        title={title}
        id={id}
      />
      <NoteItemDate createdAt={createdAt} />
      <NoteItemBody body={body} />
    </div>
  );
}

NoteItemContent.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemContent;
