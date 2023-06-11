/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { getNote } from '../utils/network-data';
import NoteItemDetail from '../components/NoteItemDetail';

function DetailNotePage({
  onDelete, onArchive, onMove,
}) {
  const { id } = useParams();

  const [detailNote, setDetailNote] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNote() {
      const { error, data } = await getNote(id);
      if (!error) {
        setDetailNote(data);
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    }

    fetchNote();
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading-indicator__display">
        <Oval
          ariaLabel="loading-indicator"
          height={40}
          width={40}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible
          secondaryColor="#4fa94d"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div className="note-item__detail-page">
      <NoteItemDetail
        detailNote={detailNote}
        onDelete={onDelete}
        onArchive={onArchive}
        onMove={onMove}
      />
    </div>
  );
}

DetailNotePage.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
};

export default DetailNotePage;
