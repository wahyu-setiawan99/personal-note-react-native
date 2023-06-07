import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
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
      <p className="note-item__detail-body">{body}</p>

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
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
};

// NoteItemDetail.defaultProps = {
//   onMove: () => {},
//   onArchive: () => {},
// };

export default NoteItemDetail;
