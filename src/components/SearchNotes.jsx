import React from 'react';
import PropTypes from 'prop-types';

function SearchNotes({ keyword, onSearch }) {
  return (
    <div className="note-search">
      <input
        value={keyword}
        onChange={(event) => {
          onSearch(event.target.value);
        }}
        type="text"
        placeholder="Search notes by title"
      />
    </div>
  );
}

SearchNotes.propTypes = {
  keyword: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchNotes;
