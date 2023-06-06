import React from 'react';
import PropTypes from 'prop-types';

function CharLimit({ number }) {
  return (
    <div>
      {number <= 50
        ? (
          <p className="note-input__title__char-limit">
            Characters left:
            {' '}
            {50 - number}
          </p>
        )
        : (
          <p className="note-input__title__char-limit">
            Characters left:
            {' '}
            {0}
          </p>
        )}
    </div>
  );
}

CharLimit.propTypes = {
  number: PropTypes.number.isRequired,
};

export default CharLimit;
