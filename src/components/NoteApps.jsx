/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';
import { getInitialNotes } from '../utils/notes';

function NoteApps() {
  const [notes, setNotes] = useState(getInitialNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(defaultKeyword || '');

  const onDeleteHandlerEvent = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const onArchiveHandlerEvent = (id) => {
    const updatedNotes = notes.map((note) => (note.id === id ? { ...note, archived: true } : note));
    setNotes(updatedNotes);
  };

  const onMoveHandlerEvent = (id) => {
    const updatedNotes = notes
      .map((note) => (note.id === id ? { ...note, archived: false } : note));
    setNotes(updatedNotes);
  };

  const onSubmitHandlerEvent = ({ title, body }) => {
    const newNote = {
      id: `notes-${+new Date()}`,
      title,
      body,
      archived: false,
      createdAt: new Date().toDateString(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const onSearchNoteEventHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredNotes = notes
    .filter((note) => note.title.toUpperCase().includes(keyword.toUpperCase()));

  return (
    <div>
      <NoteAppHeader sitetitle="MyNotes" archivePage="Archives" />
      <NoteAppBody
        keyword={keyword}
        notes={filteredNotes}
        onDelete={onDeleteHandlerEvent}
        onArchive={onArchiveHandlerEvent}
        onMove={onMoveHandlerEvent}
        onSubmitNotes={onSubmitHandlerEvent}
        onSearch={onSearchNoteEventHandler}
      />
    </div>
  );
}

export default NoteApps;
