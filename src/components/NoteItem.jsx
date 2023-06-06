import React from 'react';
import PropTypes from 'prop-types';
import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';

function NoteItem({
  title, createdAt, body, onDelete, onArchive, onMove, id, archived,
}) {
  return (
    <article className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction
        onDelete={onDelete}
        onArchive={onArchive}
        onMove={onMove}
        id={id}
        archived={archived}
      />
    </article>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onMove: PropTypes.func,
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

NoteItem.defaultProps = {
  onMove: () => {},
  onArchive: () => {},
};

export default NoteItem;
