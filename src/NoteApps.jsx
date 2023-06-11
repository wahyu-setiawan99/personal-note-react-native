/* eslint-disable no-shadow */
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import NoteAppBody from './components/NoteAppBody';
import NoteAppHeader from './components/NoteAppHeader';
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes, getArchivedNotes, getUserLogged, putAccessToken, unarchiveNote,
} from './utils/network-data';
import ThemeContext from './contexts/ThemeContext';

function NoteApps() {
  const [notes, setNotes] = useState([]);
  const [archives, setArchives] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get('keyword') || '');
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [trigger, setTrigger] = useState([]);
  const [theme, setTheme] = useState('dark');

  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  useEffect(() => {
    async function getAuthedUser() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    getAuthedUser();
  }, []);

  useEffect(() => {
    async function getInitialNotes() {
      const { error: errorActive, data: activeNotes } = await getActiveNotes();
      const { error: errorArchive, data: archivedNotes } = await getArchivedNotes();
      if (!errorActive && !errorArchive) {
        setNotes(activeNotes);
        setArchives(archivedNotes);
      } else {
        setNotes([]);
        setArchives([]);
      }
    }

    getInitialNotes();
  }, [trigger]);

  const onLoginSuccessHandlerEvent = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
    setTrigger([]);
  };

  const onLogoutHandlerEvent = async () => {
    putAccessToken('');
    setAuthedUser(null);
    setNotes([]);
    setArchives([]);
    navigate('/login');
  };

  const onAddNoteHandlerEvent = async ({ title, body }) => {
    await addNote({ title, body });
    setTrigger([]);
    navigate('/');
  };

  const onDeleteHandlerEvent = async (id) => {
    await deleteNote(id);
    setTrigger([]);
  };

  const onArchiveHandlerEvent = async (id) => {
    await archiveNote(id);
    setTrigger([]);
  };

  const onMoveHandlerEvent = async (id) => {
    await unarchiveNote(id);
    setTrigger([]);
  };

  const onSearchNoteHandlerEvent = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredNotes = notes
    .filter((note) => note.title.toUpperCase().includes(keyword.toUpperCase()));

  const filteredArchives = archives
    .filter((archive) => archive.title.toUpperCase().includes(keyword.toUpperCase()));

  if (initializing) {
    return null;
  }

  return (
    <div>
      <ThemeContext.Provider value={themeContextValue}>
        <NoteAppHeader sitetitle="MyNotes" archivePage="Archives" onLogout={onLogoutHandlerEvent} authedUser={authedUser} />
        <NoteAppBody
          keyword={keyword}
          notes={filteredNotes}
          archives={filteredArchives}
          onDelete={onDeleteHandlerEvent}
          onArchive={onArchiveHandlerEvent}
          onMove={onMoveHandlerEvent}
          onSearch={onSearchNoteHandlerEvent}
          authedUser={authedUser}
          loginSuccess={onLoginSuccessHandlerEvent}
          onAddNote={onAddNoteHandlerEvent}
        />
      </ThemeContext.Provider>

    </div>
  );
}

export default NoteApps;
