import React from 'react';
import PropTypes from 'prop-types';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import MoveButton from './MoveButton';

function NoteItemAction({
  onDelete, onArchive, onMove, id, archived,
}) {
  if (!archived) {
    return (
      <div className="note-item__action">
        <DeleteButton onDelete={onDelete} id={id} />
        <ArchiveButton onArchive={onArchive} id={id} />
      </div>
    );
  }
  return (
    <div className="note-item__action">
      <DeleteButton onDelete={onDelete} id={id} />
      <MoveButton onMove={onMove} id={id} />
    </div>
  );
}

NoteItemAction.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onMove: PropTypes.func,
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

NoteItemAction.defaultProps = {
  onMove: () => {},
  onArchive: () => {},
};

export default NoteItemAction;
