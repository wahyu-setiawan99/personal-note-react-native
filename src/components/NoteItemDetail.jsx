/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import NoteItemAction from './NoteItemAction';
import showFormattedDate from '../utils/formatDate';

function NoteItemDetail({
  notes, onDelete, onArchive, onMove,
}) {
  const { id } = useParams();
  const noteId = `notes-${id}`;
  const {
    title, createdAt, body, archived,
  } = notes.filter((note) => note.id === noteId)[0];
  return (
    <div className="note-item__detail-page">
      <h3>{title}</h3>
      <p className="note-item__detail-date">{showFormattedDate(createdAt)}</p>
      <div className="note-item__detail-body">{parser(body)}</div>

      <div className="note-item__action-btn">
        <NoteItemAction
          onDelete={onDelete}
          onArchive={onArchive}
          onMove={onMove}
          id={noteId}
          archived={archived}
        />
      </div>

    </div>
  );
}

NoteItemDetail.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
};

export default NoteItemDetail;
