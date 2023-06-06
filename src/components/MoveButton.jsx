import React from 'react';
import PropTypes from 'prop-types';

function MoveButton({ onMove, id }) {
  return <button type="button" className="note-item__archive-button" onClick={() => onMove(id)}>Move</button>;
}

MoveButton.propTypes = {
  onMove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default MoveButton;
