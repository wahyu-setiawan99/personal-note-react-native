/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import NoteItemAction from './NoteItemAction';
import showFormattedDate from '../utils/formatDate';

function NoteItemDetail({
  onDelete, onArchive, onMove, detailNote,
}) {
  const {
    id, title, createdAt, body, archived,
  } = detailNote;

  return (
    <div className="note-item__detail-item">
      <h3>{title}</h3>
      <p className="note-item__detail-date">{showFormattedDate(createdAt)}</p>
      <div className="note-item__detail-body">{parser(body)}</div>

      <div className="note-item__action-btn">
        <NoteItemAction
          onDelete={onDelete}
          onArchive={onArchive}
          onMove={onMove}
          id={id}
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

export default NoteItemDetail;
