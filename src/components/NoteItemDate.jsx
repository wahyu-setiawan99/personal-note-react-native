import React from 'react';
import { showFormattedDate } from '../utils';

function NoteItemDate({ createdAt }) {
  return (
    <p className="note-item__date">{showFormattedDate(createdAt)}</p>
  );
}

export default NoteItemDate;
