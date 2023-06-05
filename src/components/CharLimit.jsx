import React from 'react';

function CharLimit({ number }) {
  return (
    <div>
      <p className="note-input__title__char-limit">
        Characters left:
        {' '}
        {50 - number}
      </p>
    </div>
  );
}

export default CharLimit;
