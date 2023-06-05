import React from 'react';

import NoteItemBody from './NoteItemBody';
import NoteItemDate from './NoteItemDate';
import NoteItemTitle from './NoteItemTitle';

function NoteItemContent({ title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <NoteItemTitle title={title} />
      <NoteItemDate createdAt={createdAt} />
      <NoteItemBody body={body} />
    </div>
  );
}

export default NoteItemContent;
