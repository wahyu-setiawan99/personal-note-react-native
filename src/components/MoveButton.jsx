import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function MoveButton({ onMove, id }) {
  return (
    <button title="activate" type="button" className="note-item__archive-move-button" onClick={() => onMove(id)}>
      <Link to="/archives">
        <FontAwesomeIcon className="action-icon" icon={faArrowsSpin} />
      </Link>
    </button>
  );
}

MoveButton.propTypes = {
  onMove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default MoveButton;
