import React from 'react';
import PropTypes from 'prop-types';

function EmptyList({ message }) {
  return (
    <div className="notes-list__empty-message">
      <p>{message}</p>
    </div>
  );
}

EmptyList.propTypes = {
  message: PropTypes.string.isRequired,
};

export default EmptyList;
